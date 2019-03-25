/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
package org.openapitools.client.core

import java.io.File

import akka.actor.ActorSystem
import akka.http.scaladsl.Http
import akka.http.scaladsl.coding._
import akka.http.scaladsl.model.Multipart.FormData.BodyPart
import akka.http.scaladsl.model.Uri.Query
import akka.http.scaladsl.model._
import akka.http.scaladsl.model.headers._
import akka.http.scaladsl.unmarshalling.{ Unmarshal, Unmarshaller }
import akka.stream.ActorMaterializer
import akka.stream.scaladsl.Source
import akka.util.{ ByteString, Timeout }
import de.heikoseeberger.akkahttpjson4s.Json4sSupport
import org.joda.time.DateTime
import org.joda.time.format.ISODateTimeFormat
import org.json4s.JsonAST.JString
import org.json4s._
import org.json4s.jackson.JsonMethods._
import org.json4s.jackson.Serialization

import scala.collection.immutable
import scala.concurrent.{ ExecutionContext, ExecutionContextExecutor, Future }
import scala.reflect.ClassTag

object ApiInvoker {

  def apply()(implicit system: ActorSystem): ApiInvoker =
    apply(DefaultFormats + DateTimeSerializer)

  def apply(serializers: Iterable[Serializer[_]])(implicit system: ActorSystem): ApiInvoker =
    apply(DefaultFormats + DateTimeSerializer ++ serializers)

  def apply(formats: Formats)(implicit system: ActorSystem): ApiInvoker = new ApiInvoker(formats)


  /**
    * Allows request execution without calling apiInvoker.execute(request)
    * request.response can be used to get a future of the ApiResponse generated.
    * request.result can be used to get a future of the expected ApiResponse content. If content doesn't match, a
    * Future will failed with a ClassCastException
    *
    * @param request the apiRequest to be executed
    */
  implicit class ApiRequestImprovements[T](request: ApiRequest[T]) {

    def response(invoker: ApiInvoker)(implicit ec: ExecutionContext, system: ActorSystem): Future[ApiResponse[T]] =
      response(ec, system, invoker)

    def response(implicit ec: ExecutionContext, system: ActorSystem, invoker: ApiInvoker): Future[ApiResponse[T]] =
      invoker.execute(request)

    def result[U <: T](implicit c: ClassTag[U], ec: ExecutionContext, system: ActorSystem, invoker: ApiInvoker): Future[U] =
      invoker.execute(request).map(_.content).mapTo[U]

  }

  /**
    * Allows transformation from ApiMethod to spray HttpMethods
    *
    * @param method the ApiMethod to be converted
    */
  implicit class ApiMethodExtensions(val method: ApiMethod) {
    def toAkkaHttpMethod: HttpMethod = HttpMethods.getForKey(method.value).getOrElse(HttpMethods.GET)
  }

  case object DateTimeSerializer extends CustomSerializer[DateTime](format => ( {
    case JString(s) =>
      ISODateTimeFormat.dateOptionalTimeParser().parseDateTime(s)
  }, {
    case d: DateTime =>
      JString(ISODateTimeFormat.dateTime().print(d))
  })
  )

}

trait UnitJSONSupport {

}

class ApiInvoker(formats: Formats)(implicit system: ActorSystem) extends CustomContentTypes with Json4sSupport {

  import org.openapitools.client.core.ApiInvoker._
  import org.openapitools.client.core.ParametersMap._

  implicit val ec: ExecutionContextExecutor = system.dispatcher
  implicit val jsonFormats: Formats = formats

  protected val settings: ApiSettings = ApiSettings(system)

  private implicit val materializer: ActorMaterializer = ActorMaterializer()
  private implicit val serialization: Serialization = jackson.Serialization


  private val http = Http()

  val CompressionFilter: HttpMessage ⇒ Boolean = (msg: HttpMessage) =>
    Seq(
      { _: HttpMessage => settings.compressionEnabled },
      Encoder.DefaultFilter,
      (message: HttpMessage) => {
        val long = message.entity().getContentLengthOption()
        if (long.isPresent) long.getAsLong > settings.compressionSizeThreshold else true
      }
    )
      .map(f => f(msg))
      .forall(identity)


  private def addAuthentication(credentialsSeq: Seq[Credentials]) = {
    request: HttpRequest =>
      credentialsSeq.foldLeft(request) {
        case (req, BasicCredentials(login, password)) =>
          req.withHeaders(Authorization(BasicHttpCredentials(login, password)))
        case (req, ApiKeyCredentials(keyValue, keyName, ApiKeyLocations.HEADER)) =>
          req.withHeaders(RawHeader(keyName, keyValue.value))
        case (req, _) => req
      }
  }

  private def headers(headers: Map[String, Any]): immutable.Seq[HttpHeader] =
    headers.asFormattedParams
      .map { case (name, value) => RawHeader(name, value.toString) }
      .to[immutable.Seq]


  private def bodyPart(name: String, value: Any): BodyPart = {
    value match {
      case f: File =>
        BodyPart.fromFile(
          name,
          ContentType(MediaTypes.`application/octet-stream`),
          f,
          f.length().toInt
        )
      case v: String =>
        BodyPart.Strict(name, v.toString)
      case NumericValue(v) =>
        BodyPart.Strict(name, v.toString)
      case m: ApiModel =>
        BodyPart.Strict(name, Serialization.write(m))
    }
  }


  private def formDataContent(request: ApiRequest[_]) = {
    val params = request.formParams.asFormattedParams
    if (params.isEmpty)
      None
    else
      Some(
        normalizedContentType(request.contentType).mediaType match {
          case MediaTypes.`multipart/form-data` =>
            Multipart.FormData(Source(params.toList.map { case (name, value) => bodyPart(name, value) }))
          case MediaTypes.`application/x-www-form-urlencoded` =>
            FormData(params.mapValues(_.toString))
          case _: MediaType => // Default : application/x-www-form-urlencoded.
            FormData(params.mapValues(_.toString))
        }
      )
  }

  private def bodyContent(request: ApiRequest[_]): Option[Any] = request
    .bodyParam
    .map(Extraction.decompose)
    .map(compact)

  private def createRequest(uri: Uri, request: ApiRequest[_]): HttpRequest = {
    val httpRequest = request.method.toAkkaHttpMethod match {
      case m@(HttpMethods.GET | HttpMethods.DELETE) => HttpRequest(m, uri)
      case m@(HttpMethods.POST | HttpMethods.PUT) =>
        formDataContent(request) orElse bodyContent(request) match {
          case Some(c: FormData) =>
            HttpRequest(m, uri, entity = c.toEntity)
          case Some(c: Multipart.FormData) =>
            HttpRequest(m, uri, entity = c.toEntity)
          case Some(c: String) =>
            HttpRequest(m, uri, entity = HttpEntity(normalizedContentType(request.contentType), ByteString(c)))
          case _ =>
            HttpRequest(m, uri, entity = HttpEntity(normalizedContentType(request.contentType), ByteString(" ")))
        }
      case m: HttpMethod => HttpRequest(m, uri)
    }

    addAuthentication(request.credentials)(
      httpRequest.withHeaders(headers(request.headerParams))
    )
  }

  def makeQuery(r: ApiRequest[_]): Query = {
    r.credentials.foldLeft(r.queryParams) {
      case (params, ApiKeyCredentials(key, keyName, ApiKeyLocations.QUERY)) =>
        params + (keyName -> key.value)
      case (params, _) => params
    }.asFormattedParams
      .mapValues(_.toString)
      .foldRight[Query](Uri.Query.Empty) {
      case ((name, value), acc) => acc.+:(name, value)
    }
  }

  def makeUri(r: ApiRequest[_]): Uri = {
    val opPath = r.operationPath.replaceAll("\\{format\\}", "json")
    val opPathWithParams = r.pathParams.asFormattedParams
      .mapValues(_.toString)
      .foldLeft(opPath) {
        case (path, (name, value)) => path.replaceAll(s"\\{$name\\}", value)
      }
    val query = makeQuery(r)

    Uri(r.basePath + opPathWithParams).withQuery(query)
  }

  def execute[T](r: ApiRequest[T]): Future[ApiResponse[T]] = {
    implicit val timeout: Timeout = settings.connectionTimeout

    val request = createRequest(makeUri(r), r)

    http
      .singleRequest(request)
      .map { response =>
        val decoder: Coder with StreamDecoder = response.encoding match {
          case HttpEncodings.gzip ⇒
            Gzip
          case HttpEncodings.deflate ⇒
            Deflate
          case HttpEncodings.identity ⇒
            NoCoding
          case HttpEncoding(encoding) =>
            throw new IllegalArgumentException(s"Unsupported encoding: $encoding")
        }

        decoder.decodeMessage(response)
      }
      .flatMap(unmarshallApiResponse(r))
  }

  def unmarshallApiResponse[T](request: ApiRequest[T])(response: HttpResponse): Future[ApiResponse[T]] = {
    def responseForState[V](state: ResponseState, value: V) = {
      state match {
        case ResponseState.Success =>
          ApiResponse(response.status.intValue, value, response.headers.map(header => (header.name, header.value)).toMap)
        case ResponseState.Error =>
          throw ApiError(
            response.status.intValue,
            "Error response received",
            Some(value),
            headers = response.headers.map(header => (header.name, header.value)).toMap
          )
      }
    }

    request
      .responseForCode(response.status.intValue)
      .map {
        case (Manifest.Unit, state: ResponseState) =>
          // FIXME Casting is ugly, how to do better?
          Future(responseForState(state, Unit)).asInstanceOf[Future[ApiResponse[T]]]
        case (manifest: Manifest[T], state: ResponseState) =>
          implicit val m: Unmarshaller[HttpEntity, T] = unmarshaller[T](manifest, serialization, formats)

          Unmarshal(response.entity)
            .to[T]
            .recoverWith {
              case e ⇒ throw ApiError(response.status.intValue, s"Unable to unmarshall content to [$manifest]", Some(response.entity.toString), e)
            }
            .map(value => responseForState(state, value))
      }
      .getOrElse(Future.failed(ApiError(response.status.intValue, "Unexpected response code", Some(response.entity.toString))))
  }
}

sealed trait CustomContentTypes {

  protected def normalizedContentType(original: String): ContentType =
    ContentType(MediaTypes.forExtension(original), () => HttpCharsets.`UTF-8`)

  protected def parseContentType(contentType: String): ContentType = {

    ContentType.parse(contentType) match {
      case Right(ct: ContentType) =>
        ct
      case Left(error: List[ErrorInfo]) =>
        throw new IllegalArgumentException(
          s"Error converting '$contentType' to a ContentType header: '${error.map(_.summary).mkString(", ")}'"
        )
    }
  }
}

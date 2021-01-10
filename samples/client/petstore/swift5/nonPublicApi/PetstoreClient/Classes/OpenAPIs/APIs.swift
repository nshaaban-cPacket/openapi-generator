// APIs.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation

internal class PetstoreClientAPI {
    internal static var basePath = "http://petstore.swagger.io:80/v2"
    internal static var credential: URLCredential?
    internal static var customHeaders: [String: String] = [:]
    internal static var requestBuilderFactory: RequestBuilderFactory = URLSessionRequestBuilderFactory()
    internal static var apiResponseQueue: DispatchQueue = .main
}

internal class RequestBuilder<T> {
    var credential: URLCredential?
    var headers: [String: String]
    internal let parameters: [String: Any]?
    internal let method: String
    internal let URLString: String

    /// Optional block to obtain a reference to the request's progress instance when available.
    /// With the URLSession http client the request's progress only works on iOS 11.0, macOS 10.13, macCatalyst 13.0, tvOS 11.0, watchOS 4.0.
    /// If you need to get the request's progress in older OS versions, please use Alamofire http client.
    internal var onProgressReady: ((Progress) -> Void)?

    required internal init(method: String, URLString: String, parameters: [String: Any]?, headers: [String: String] = [:]) {
        self.method = method
        self.URLString = URLString
        self.parameters = parameters
        self.headers = headers

        addHeaders(PetstoreClientAPI.customHeaders)
    }

    internal func addHeaders(_ aHeaders: [String: String]) {
        for (header, value) in aHeaders {
            headers[header] = value
        }
    }

    internal func execute(_ apiResponseQueue: DispatchQueue = PetstoreClientAPI.apiResponseQueue, _ completion: @escaping (_ result: Swift.Result<Response<T>, Error>) -> Void) { }

    internal func addHeader(name: String, value: String) -> Self {
        if !value.isEmpty {
            headers[name] = value
        }
        return self
    }

    internal func addCredential() -> Self {
        credential = PetstoreClientAPI.credential
        return self
    }
}

internal protocol RequestBuilderFactory {
    func getNonDecodableBuilder<T>() -> RequestBuilder<T>.Type
    func getBuilder<T: Decodable>() -> RequestBuilder<T>.Type
}

# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

from dataclasses import dataclass
import re  # noqa: F401
import sys  # noqa: F401
import typing
import urllib3
from urllib3._collections import HTTPHeaderDict

from petstore_api import api_client, exceptions
import decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
from frozendict import frozendict  # noqa: F401

from petstore_api.schemas import (  # noqa: F401
    AnyTypeSchema,
    ComposedSchema,
    DictSchema,
    ListSchema,
    StrSchema,
    IntSchema,
    Int32Schema,
    Int64Schema,
    Float32Schema,
    Float64Schema,
    NumberSchema,
    DateSchema,
    DateTimeSchema,
    DecimalSchema,
    BoolSchema,
    BinarySchema,
    NoneSchema,
    none_type,
    InstantiationMetadata,
    Unset,
    unset,
    ComposedBase,
    ListBase,
    DictBase,
    NoneBase,
    StrBase,
    IntBase,
    Int32Base,
    Int64Base,
    Float32Base,
    Float64Base,
    NumberBase,
    DateBase,
    DateTimeBase,
    BoolBase,
    BinaryBase,
    Schema,
    _SchemaValidator,
    _SchemaTypeChecker,
    _SchemaEnumMaker
)

# query params
UsernameSchema = StrSchema
PasswordSchema = StrSchema
RequestRequiredQueryParams = typing.TypedDict(
    'RequestRequiredQueryParams',
    {
        'username': UsernameSchema,
        'password': PasswordSchema,
    }
)
RequestOptionalQueryParams = typing.TypedDict(
    'RequestOptionalQueryParams',
    {
    },
    total=False
)


class RequestQueryParams(RequestRequiredQueryParams, RequestOptionalQueryParams):
    pass


request_query_username = api_client.QueryParameter(
    name="username",
    style=api_client.ParameterStyle.FORM,
    schema=UsernameSchema,
    required=True,
    explode=True,
)
request_query_password = api_client.QueryParameter(
    name="password",
    style=api_client.ParameterStyle.FORM,
    schema=PasswordSchema,
    required=True,
    explode=True,
)
_path = '/user/login'
_method = 'GET'
XRateLimitSchema = Int32Schema
x_rate_limit_parameter = api_client.HeaderParameter(
    name="X-Rate-Limit",
    style=api_client.ParameterStyle.SIMPLE,
    schema=XRateLimitSchema,
)
XExpiresAfterSchema = DateTimeSchema
x_expires_after_parameter = api_client.HeaderParameter(
    name="X-Expires-After",
    style=api_client.ParameterStyle.SIMPLE,
    schema=XExpiresAfterSchema,
)
SchemaFor200ResponseBodyApplicationXml = StrSchema
SchemaFor200ResponseBodyApplicationJson = StrSchema
ResponseHeadersFor200 = typing.TypedDict(
    'ResponseHeadersFor200',
    {
        'X-Rate-Limit': XRateLimitSchema,
        'X-Expires-After': XExpiresAfterSchema,
    }
)


@dataclass
class ApiResponseFor200(api_client.ApiResponse):
    response: urllib3.HTTPResponse
    body: typing.Union[
        SchemaFor200ResponseBodyApplicationXml,
        SchemaFor200ResponseBodyApplicationJson,
    ]
    headers: ResponseHeadersFor200


_response_for_200 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor200,
    content={
        'application/xml': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationXml),
        'application/json': api_client.MediaType(
            schema=SchemaFor200ResponseBodyApplicationJson),
    },
    headers=[
        x_rate_limit_parameter,
        x_expires_after_parameter,
    ]
)


@dataclass
class ApiResponseFor400(api_client.ApiResponse):
    response: urllib3.HTTPResponse
    body: Unset = unset
    headers: Unset = unset


_response_for_400 = api_client.OpenApiResponse(
    response_cls=ApiResponseFor400,
)
_status_code_to_response = {
    '200': _response_for_200,
    '400': _response_for_400,
}
_all_accept_content_types = (
    'application/xml',
    'application/json',
)


class LoginUser(api_client.Api):

    def login_user(
        self: api_client.Api,
        query_params: RequestQueryParams = frozendict(),
        accept_content_types: typing.Tuple[str] = _all_accept_content_types,
        stream: bool = False,
        timeout: typing.Optional[typing.Union[int, typing.Tuple]] = None,
        skip_deserialization: bool = False,
    ) -> typing.Union[
        ApiResponseFor200,
        api_client.ApiResponseWithoutDeserialization
    ]:
        """
        Logs user into the system
        :param skip_deserialization: If true then api_response.response will be set but
            api_response.body and api_response.headers will not be deserialized into schema
            class instances
        """
        self._verify_typed_dict_inputs(RequestQueryParams, query_params)

        _query_params = []
        for parameter in (
            request_query_username,
            request_query_password,
        ):
            parameter_data = query_params.get(parameter.name, unset)
            if parameter_data is unset:
                continue
            serialized_data = parameter.serialize(parameter_data)
            _query_params.extend(serialized_data)

        _headers = HTTPHeaderDict()
        # TODO add cookie handling
        if accept_content_types:
            for accept_content_type in accept_content_types:
                _headers.add('Accept', accept_content_type)

        response = self.api_client.call_api(
            resource_path=_path,
            method=_method,
            query_params=tuple(_query_params),
            headers=_headers,
            stream=stream,
            timeout=timeout,
        )

        if skip_deserialization:
            api_response = api_client.ApiResponseWithoutDeserialization(response=response)
        else:
            response_for_status = _status_code_to_response.get(str(response.status))
            if response_for_status:
                api_response = response_for_status.deserialize(response, self.api_client.configuration)
            else:
                api_response = api_client.ApiResponseWithoutDeserialization(response=response)

        if not 200 <= response.status <= 299:
            raise exceptions.ApiException(api_response=api_response)

        return api_response

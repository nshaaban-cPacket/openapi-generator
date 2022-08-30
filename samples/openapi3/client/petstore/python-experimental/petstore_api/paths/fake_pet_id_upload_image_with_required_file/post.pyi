# coding: utf-8

"""


    Generated by: https://openapi-generator.tech
"""

from dataclasses import dataclass
import re  # noqa: F401
import sys  # noqa: F401
import typing
import urllib3
import functools  # noqa: F401
from urllib3._collections import HTTPHeaderDict

from petstore_api import api_client, exceptions
import decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401

from petstore_api.model.api_response import ApiResponse

# path params
PetIdSchema = schemas.Int64Schema
# body param


class SchemaForRequestBodyMultipartFormData(
    schemas.DictSchema
):


    class MetaOapg:
        required = {
            "requiredFile",
        }
        class properties:
            additionalMetadata = schemas.StrSchema
            requiredFile = schemas.BinarySchema
            __annotations__ = {
                "additionalMetadata": additionalMetadata,
                "requiredFile": requiredFile,
            }
        additional_properties = schemas.AnyTypeSchema
    
    requiredFile: MetaOapg.properties.requiredFile
    additionalMetadata: MetaOapg.properties.additionalMetadata
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["requiredFile"]) -> MetaOapg.properties.requiredFile: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["additionalMetadata"]) -> MetaOapg.properties.additionalMetadata: ...
    
    def __getitem__(self, name: str) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        requiredFile: typing.Union[MetaOapg.properties.requiredFile, ],
        additionalMetadata: typing.Union[MetaOapg.properties.additionalMetadata, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'SchemaForRequestBodyMultipartFormData':
        return super().__new__(
            cls,
            *args,
            requiredFile=requiredFile,
            additionalMetadata=additionalMetadata,
            _configuration=_configuration,
            **kwargs,
        )
SchemaFor200ResponseBodyApplicationJson = ApiResponse

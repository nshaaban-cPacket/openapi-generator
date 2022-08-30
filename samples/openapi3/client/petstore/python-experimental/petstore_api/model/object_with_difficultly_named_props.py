# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import typing  # noqa: F401
import functools  # noqa: F401

import decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401


class ObjectWithDifficultlyNamedProps(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    model with properties that have invalid names for python
    """


    class MetaOapg:
        required = {
            "123-list",
        }
        class properties:
            _123_list = schemas.StrSchema
            special_property_name = schemas.Int64Schema
            _123_number = schemas.IntSchema
            __annotations__ = {
                "123-list": _123_list,
                "$special[property.name]": special_property_name,
                "123Number": _123_number,
            }
        additional_properties = schemas.AnyTypeSchema
    
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["123-list"]) -> MetaOapg.properties._123_list: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["$special[property.name]"]) -> MetaOapg.properties.special_property_name: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["123Number"]) -> MetaOapg.properties._123_number: ...
    
    def __getitem__(self, name: str) -> MetaOapg.additional_properties:
        # dict_instance[name] accessor
        return super().__getitem__(name)

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'ObjectWithDifficultlyNamedProps':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
            **kwargs,
        )

# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import sys  # noqa: F401
import typing  # noqa: F401
import functools  # noqa: F401

from frozendict import frozendict  # noqa: F401

import decimal  # noqa: F401
from datetime import date, datetime  # noqa: F401
from frozendict import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401


class DanishPig(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    _required_property_names = {
        "className",
    }
    
    
    class className(
        schemas.SchemaEnumMakerClsFactory(
            enum_value_to_name={
                "DanishPig": "DANISH_PIG",
            }
        ),
        schemas.StrSchema
    ):
        
        @classmethod
        @property
        def DANISH_PIG(cls):
            return cls("DanishPig")


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        className: className,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Type[schemas.Schema],
    ) -> 'DanishPig':
        return super().__new__(
            cls,
            *args,
            className=className,
            _configuration=_configuration,
            **kwargs,
        )

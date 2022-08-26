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
import uuid  # noqa: F401

from petstore_api import schemas  # noqa: F401


class StringEnum(
    schemas.SchemaTypeCheckerClsFactory(typing.Union[schemas.NoneClass, str, ]),
    schemas.SchemaEnumMakerClsFactory(
        enum_value_to_name={
            schemas.NoneClass.NONE: "NONE",
            "placed": "PLACED",
            "approved": "APPROVED",
            "delivered": "DELIVERED",
            "single quoted": "SINGLE_QUOTED",
            "multiple\nlines": "MULTIPLE_LINES",
            "double quote \n with newline": "DOUBLE_QUOTE_WITH_NEWLINE",
        }
    ),
    schemas.StrBase,
    schemas.NoneBase,
    schemas.Schema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    
    @classmethod
    @property
    def NONE(cls):
        return cls(None)
    
    @classmethod
    @property
    def PLACED(cls):
        return cls("placed")
    
    @classmethod
    @property
    def APPROVED(cls):
        return cls("approved")
    
    @classmethod
    @property
    def DELIVERED(cls):
        return cls("delivered")
    
    @classmethod
    @property
    def SINGLE_QUOTED(cls):
        return cls("single quoted")
    
    @classmethod
    @property
    def MULTIPLE_LINES(cls):
        return cls("multiple\nlines")
    
    @classmethod
    @property
    def DOUBLE_QUOTE_WITH_NEWLINE(cls):
        return cls("double quote \n with newline")

    def __new__(
        cls,
        *args: typing.Union[None, str, ],
        _configuration: typing.Optional[schemas.Configuration] = None,
    ) -> 'StringEnum':
        return super().__new__(
            cls,
            *args,
            _configuration=_configuration,
        )

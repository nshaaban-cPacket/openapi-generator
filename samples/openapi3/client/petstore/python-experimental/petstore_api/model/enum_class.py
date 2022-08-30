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


class EnumClass(
    schemas.SchemaEnumMakerClsFactory(
        enum_value_to_name={
            "_abc": "_ABC",
            "-efg": "EFG",
            "(xyz)": "XYZ",
            "COUNT_1M": "COUNT_1M",
            "COUNT_50M": "COUNT_50M",
        }
    ),
    schemas.StrSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    
    @classmethod
    @property
    def _ABC(cls):
        return cls("_abc")
    
    @classmethod
    @property
    def EFG(cls):
        return cls("-efg")
    
    @classmethod
    @property
    def XYZ(cls):
        return cls("(xyz)")
    
    @classmethod
    @property
    def COUNT_1M(cls):
        return cls("COUNT_1M")
    
    @classmethod
    @property
    def COUNT_50M(cls):
        return cls("COUNT_50M")

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


class ReadOnlyFirst(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        class properties:
            bar = schemas.StrSchema
            baz = schemas.StrSchema
        additional_properties = schemas.AnyTypeSchema
    
    bar: MetaOapg.properties.bar
    baz: MetaOapg.properties.baz

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        bar: typing.Union[MetaOapg.properties.bar, str, schemas.Unset] = schemas.unset,
        baz: typing.Union[MetaOapg.properties.baz, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'ReadOnlyFirst':
        return super().__new__(
            cls,
            *args,
            bar=bar,
            baz=baz,
            _configuration=_configuration,
            **kwargs,
        )

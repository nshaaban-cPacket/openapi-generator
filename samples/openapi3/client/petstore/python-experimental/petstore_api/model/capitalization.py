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


class Capitalization(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """
    smallCamel = schemas.StrSchema
    CapitalCamel = schemas.StrSchema
    small_Snake = schemas.StrSchema
    Capital_Snake = schemas.StrSchema
    SCA_ETH_Flow_Points = schemas.StrSchema
    ATT_NAME = schemas.StrSchema


    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        smallCamel: typing.Union[smallCamel, schemas.Unset] = schemas.unset,
        CapitalCamel: typing.Union[CapitalCamel, schemas.Unset] = schemas.unset,
        small_Snake: typing.Union[small_Snake, schemas.Unset] = schemas.unset,
        Capital_Snake: typing.Union[Capital_Snake, schemas.Unset] = schemas.unset,
        SCA_ETH_Flow_Points: typing.Union[SCA_ETH_Flow_Points, schemas.Unset] = schemas.unset,
        ATT_NAME: typing.Union[ATT_NAME, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Type[schemas.Schema],
    ) -> 'Capitalization':
        return super().__new__(
            cls,
            *args,
            smallCamel=smallCamel,
            CapitalCamel=CapitalCamel,
            small_Snake=small_Snake,
            Capital_Snake=Capital_Snake,
            SCA_ETH_Flow_Points=SCA_ETH_Flow_Points,
            ATT_NAME=ATT_NAME,
            _configuration=_configuration,
            **kwargs,
        )

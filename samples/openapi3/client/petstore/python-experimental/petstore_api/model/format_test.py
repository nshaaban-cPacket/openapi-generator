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


class FormatTest(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        required = {
            "date",
            "number",
            "password",
            "byte",
        }
        class properties:
            
            
            class integer(
                schemas.IntSchema
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 100
                    inclusive_minimum = 10
                    multiple_of = 2
            int32 = schemas.Int32Schema
            
            
            class int32withValidations(
                schemas.Int32Schema
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 200
                    inclusive_minimum = 20
            int64 = schemas.Int64Schema
            
            
            class number(
                schemas.NumberSchema
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 543.2
                    inclusive_minimum = 32.1
                    multiple_of = 32.5
            
            
            class _float(
                schemas.Float32Schema
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 987.6
                    inclusive_minimum = 54.3
            locals()["float"] = _float
            del locals()['_float']
            """
            NOTE:
            openapi/json-schema allows properties to have invalid python names
            The above local assignment allows the code to keep those invalid python names
            This allows properties to have names like 'some-name', '1 bad name'
            Properties with these names are omitted from the __new__ + _from_openapi_data signatures
            - __new__ these properties can be passed in as **kwargs
            - _from_openapi_data these are passed in in a dict in the first positional argument *arg
            If the property is required and was not passed in, an exception will be thrown
            """
            float32 = schemas.Float32Schema
            
            
            class double(
                schemas.Float64Schema
            ):
            
            
                class MetaOapg:
                    inclusive_maximum = 123.4
                    inclusive_minimum = 67.8
            float64 = schemas.Float64Schema
            
            
            class arrayWithUniqueItems(
                schemas.ListSchema
            ):
            
            
                class MetaOapg:
                    unique_items = True
                    items = schemas.NumberSchema
            
            
            class string(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    regex=[{
                        'pattern': r'[a-z]',  # noqa: E501
                        'flags': (
                            re.IGNORECASE
                        )
                    }]
            byte = schemas.StrSchema
            binary = schemas.BinarySchema
            date = schemas.DateSchema
            dateTime = schemas.DateTimeSchema
            uuid = schemas.UUIDSchema
            uuidNoExample = schemas.UUIDSchema
            
            
            class password(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    max_length = 64
                    min_length = 10
            
            
            class pattern_with_digits(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    regex=[{
                        'pattern': r'^\d{10}$',  # noqa: E501
                    }]
            
            
            class pattern_with_digits_and_delimiter(
                schemas.StrSchema
            ):
            
            
                class MetaOapg:
                    regex=[{
                        'pattern': r'^image_\d{1,3}$',  # noqa: E501
                        'flags': (
                            re.IGNORECASE
                        )
                    }]
            noneProp = schemas.NoneSchema
        additional_properties = schemas.AnyTypeSchema
    
    integer: MetaOapg.properties.integer
    int32: MetaOapg.properties.int32
    int32withValidations: MetaOapg.properties.int32withValidations
    int64: MetaOapg.properties.int64
    number: MetaOapg.properties.number
    float32: MetaOapg.properties.float32
    double: MetaOapg.properties.double
    float64: MetaOapg.properties.float64
    arrayWithUniqueItems: MetaOapg.properties.arrayWithUniqueItems
    string: MetaOapg.properties.string
    byte: MetaOapg.properties.byte
    binary: MetaOapg.properties.binary
    date: MetaOapg.properties.date
    dateTime: MetaOapg.properties.dateTime
    uuid: MetaOapg.properties.uuid
    uuidNoExample: MetaOapg.properties.uuidNoExample
    password: MetaOapg.properties.password
    pattern_with_digits: MetaOapg.properties.pattern_with_digits
    pattern_with_digits_and_delimiter: MetaOapg.properties.pattern_with_digits_and_delimiter
    noneProp: MetaOapg.properties.noneProp

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict, ],
        date: typing.Union[MetaOapg.properties.date, date, str, ],
        number: typing.Union[MetaOapg.properties.number, decimal.Decimal, int, float, ],
        password: typing.Union[MetaOapg.properties.password, str, ],
        byte: typing.Union[MetaOapg.properties.byte, str, ],
        integer: typing.Union[MetaOapg.properties.integer, int, schemas.Unset] = schemas.unset,
        int32: typing.Union[MetaOapg.properties.int32, int, schemas.Unset] = schemas.unset,
        int32withValidations: typing.Union[MetaOapg.properties.int32withValidations, int, schemas.Unset] = schemas.unset,
        int64: typing.Union[MetaOapg.properties.int64, int, schemas.Unset] = schemas.unset,
        float32: typing.Union[MetaOapg.properties.float32, float, schemas.Unset] = schemas.unset,
        double: typing.Union[MetaOapg.properties.double, float, schemas.Unset] = schemas.unset,
        float64: typing.Union[MetaOapg.properties.float64, float, schemas.Unset] = schemas.unset,
        arrayWithUniqueItems: typing.Union[MetaOapg.properties.arrayWithUniqueItems, tuple, schemas.Unset] = schemas.unset,
        string: typing.Union[MetaOapg.properties.string, str, schemas.Unset] = schemas.unset,
        binary: typing.Union[MetaOapg.properties.binary, schemas.Unset] = schemas.unset,
        dateTime: typing.Union[MetaOapg.properties.dateTime, datetime, str, schemas.Unset] = schemas.unset,
        uuid: typing.Union[MetaOapg.properties.uuid, uuid.UUID, str, schemas.Unset] = schemas.unset,
        uuidNoExample: typing.Union[MetaOapg.properties.uuidNoExample, uuid.UUID, str, schemas.Unset] = schemas.unset,
        pattern_with_digits: typing.Union[MetaOapg.properties.pattern_with_digits, str, schemas.Unset] = schemas.unset,
        pattern_with_digits_and_delimiter: typing.Union[MetaOapg.properties.pattern_with_digits_and_delimiter, str, schemas.Unset] = schemas.unset,
        noneProp: typing.Union[MetaOapg.properties.noneProp, None, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'FormatTest':
        return super().__new__(
            cls,
            *args,
            date=date,
            number=number,
            password=password,
            byte=byte,
            integer=integer,
            int32=int32,
            int32withValidations=int32withValidations,
            int64=int64,
            float32=float32,
            double=double,
            float64=float64,
            arrayWithUniqueItems=arrayWithUniqueItems,
            string=string,
            binary=binary,
            dateTime=dateTime,
            uuid=uuid,
            uuidNoExample=uuidNoExample,
            pattern_with_digits=pattern_with_digits,
            pattern_with_digits_and_delimiter=pattern_with_digits_and_delimiter,
            noneProp=noneProp,
            _configuration=_configuration,
            **kwargs,
        )

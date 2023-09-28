# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import date, datetime
from typing import Any, Dict, Optional, Union
from pydantic import BaseModel, Field, StrictBytes, StrictInt, StrictStr, condecimal, confloat, conint, constr, validator

class FormatTest(BaseModel):
    """
    FormatTest
    """
    integer: Optional[conint(strict=True, le=100, ge=10)] = None
    int32: Optional[conint(strict=True, le=200, ge=20)] = None
    int64: Optional[StrictInt] = None
    number: confloat(le=543.2, ge=32.1, strict=True) = Field(...)
    double: Optional[confloat(le=123.4, ge=67.8, strict=True)] = None
    decimal: Optional[condecimal()] = None
    string: Optional[constr(strict=True)] = None
    string_with_double_quote_pattern: Optional[constr(strict=True)] = None
    byte: Optional[Union[StrictBytes, StrictStr]] = None
    binary: Optional[Union[StrictBytes, StrictStr]] = None
    var_date: date = Field(..., alias="date")
    date_time: Optional[datetime] = Field(None, alias="dateTime")
    uuid: Optional[StrictStr] = None
    password: constr(strict=True, max_length=64, min_length=10) = Field(...)
    pattern_with_digits: Optional[constr(strict=True)] = Field(None, description="A string that is a 10 digit number. Can have leading zeros.")
    pattern_with_digits_and_delimiter: Optional[constr(strict=True)] = Field(None, description="A string starting with 'image_' (case insensitive) and one to three digits following i.e. Image_01.")
    additional_properties: Dict[str, Any] = {}
    __properties = ["integer", "int32", "int64", "number", "double", "decimal", "string", "string_with_double_quote_pattern", "byte", "binary", "date", "dateTime", "uuid", "password", "pattern_with_digits", "pattern_with_digits_and_delimiter"]

    @validator('string')
    def string_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"[a-z]", value ,re.IGNORECASE):
            raise ValueError(r"must validate the regular expression /[a-z]/i")
        return value

    @validator('string_with_double_quote_pattern')
    def string_with_double_quote_pattern_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"this is \"something\"", value):
            raise ValueError(r"must validate the regular expression /this is \"something\"/")
        return value

    @validator('pattern_with_digits')
    def pattern_with_digits_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^\d{10}$", value):
            raise ValueError(r"must validate the regular expression /^\d{10}$/")
        return value

    @validator('pattern_with_digits_and_delimiter')
    def pattern_with_digits_and_delimiter_validate_regular_expression(cls, value):
        """Validates the regular expression"""
        if value is None:
            return value

        if not re.match(r"^image_\d{1,3}$", value ,re.IGNORECASE):
            raise ValueError(r"must validate the regular expression /^image_\d{1,3}$/i")
        return value

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> FormatTest:
        """Create an instance of FormatTest from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "additional_properties"
                          },
                          exclude_none=True)
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> FormatTest:
        """Create an instance of FormatTest from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return FormatTest.parse_obj(obj)

        _obj = FormatTest.parse_obj({
            "integer": obj.get("integer"),
            "int32": obj.get("int32"),
            "int64": obj.get("int64"),
            "number": obj.get("number"),
            "double": obj.get("double"),
            "decimal": obj.get("decimal"),
            "string": obj.get("string"),
            "string_with_double_quote_pattern": obj.get("string_with_double_quote_pattern"),
            "byte": obj.get("byte"),
            "binary": obj.get("binary"),
            "var_date": obj.get("date"),
            "date_time": obj.get("dateTime"),
            "uuid": obj.get("uuid"),
            "password": obj.get("password"),
            "pattern_with_digits": obj.get("pattern_with_digits"),
            "pattern_with_digits_and_delimiter": obj.get("pattern_with_digits_and_delimiter")
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj



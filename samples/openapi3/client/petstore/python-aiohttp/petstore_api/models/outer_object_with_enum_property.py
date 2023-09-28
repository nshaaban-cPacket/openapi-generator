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


from typing import Optional
from pydantic import BaseModel
from petstore_api.models.outer_enum import OuterEnum
from petstore_api.models.outer_enum_integer import OuterEnumInteger

class OuterObjectWithEnumProperty(BaseModel):
    """
    OuterObjectWithEnumProperty
    """
    str_value: Optional[OuterEnum] = None
    value: OuterEnumInteger
    __properties = ["str_value", "value"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> OuterObjectWithEnumProperty:
        """Create an instance of OuterObjectWithEnumProperty from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # set to None if str_value (nullable) is None
        # and __fields_set__ contains the field
        if self.str_value is None and "str_value" in self.__fields_set__:
            _dict['str_value'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> OuterObjectWithEnumProperty:
        """Create an instance of OuterObjectWithEnumProperty from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return OuterObjectWithEnumProperty.parse_obj(obj)

        _obj = OuterObjectWithEnumProperty.parse_obj({
            "str_value": obj.get("str_value"),
            "value": obj.get("value")
        })
        return _obj



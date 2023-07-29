# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""


from __future__ import annotations
import pprint
import re  # noqa: F401
import json


from typing import Any, Dict, Optional
from pydantic import BaseModel, StrictInt
from petstore_api.models.one_of_enum_string import OneOfEnumString
from petstore_api.models.pig import Pig

class WithNestedOneOf(BaseModel):
    """
    WithNestedOneOf
    """
    size: Optional[StrictInt] = None
    nested_pig: Optional[Pig] = None
    nested_oneof_enum_string: Optional[OneOfEnumString] = None
    additional_properties: Dict[str, Any] = {}
    __properties = ["size", "nested_pig", "nested_oneof_enum_string"]

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
    def from_json(cls, json_str: str) -> WithNestedOneOf:
        """Create an instance of WithNestedOneOf from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                            "additional_properties"
                          },
                          exclude_none=True)
        # override the default output from pydantic by calling `to_dict()` of nested_pig
        if self.nested_pig:
            _dict['nested_pig'] = self.nested_pig.to_dict()
        # override the default output from pydantic by calling `to_dict()` of nested_oneof_enum_string
        if self.nested_oneof_enum_string:
            _dict['nested_oneof_enum_string'] = self.nested_oneof_enum_string.to_dict()
        # puts key-value pairs in additional_properties in the top level
        if self.additional_properties is not None:
            for _key, _value in self.additional_properties.items():
                _dict[_key] = _value

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> WithNestedOneOf:
        """Create an instance of WithNestedOneOf from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return WithNestedOneOf.parse_obj(obj)

        _obj = WithNestedOneOf.parse_obj({
            "size": obj.get("size"),
            "nested_pig": Pig.from_dict(obj.get("nested_pig")) if obj.get("nested_pig") is not None else None,
            "nested_oneof_enum_string": OneOfEnumString.from_dict(obj.get("nested_oneof_enum_string")) if obj.get("nested_oneof_enum_string") is not None else None
        })
        # store additional fields in additional_properties
        for _key in obj.keys():
            if _key not in cls.__properties:
                _obj.additional_properties[_key] = obj.get(_key)

        return _obj


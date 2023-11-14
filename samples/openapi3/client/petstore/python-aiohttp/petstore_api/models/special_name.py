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


from typing import Any, ClassVar, Dict, List, Optional
from pydantic import BaseModel, StrictInt, StrictStr, field_validator
from pydantic import Field
from petstore_api.models.category import Category
try:
    from typing import Self
except ImportError:
    from typing_extensions import Self

class SpecialName(BaseModel):
    """
    SpecialName
    """ # noqa: E501
    var_property: Optional[StrictInt] = Field(default=None, alias="property")
    var_async: Optional[Category] = Field(default=None, alias="async")
    var_schema: Optional[StrictStr] = Field(default=None, description="pet status in the store", alias="schema")
    __properties: ClassVar[List[str]] = ["property", "async", "schema"]

    @field_validator('var_schema')
    def var_schema_validate_enum(cls, value):
        """Validates the enum"""
        if value is None:
            return value

        if value not in ('available', 'pending', 'sold'):
            raise ValueError("must be one of enum values ('available', 'pending', 'sold')")
        return value

    model_config = {
        "populate_by_name": True,
        "validate_assignment": True,
        "protected_namespaces": (),
    }


    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.model_dump(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        # TODO: pydantic v2: use .model_dump_json(by_alias=True, exclude_unset=True) instead
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> Self:
        """Create an instance of SpecialName from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self) -> Dict[str, Any]:
        """Return the dictionary representation of the model using alias.

        This has the following differences from calling pydantic's
        `self.model_dump(by_alias=True)`:

        * `None` is only added to the output dict for nullable fields that
          were set at model initialization. Other fields with value `None`
          are ignored.
        """
        _dict = self.model_dump(
            by_alias=True,
            exclude={
            },
            exclude_none=True,
        )
        # override the default output from pydantic by calling `to_dict()` of var_async
        if self.var_async:
            _dict['async'] = self.var_async.to_dict()
        return _dict

    @classmethod
    def from_dict(cls, obj: Dict) -> Self:
        """Create an instance of SpecialName from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return cls.model_validate(obj)

        _obj = cls.model_validate({
            "property": obj.get("property"),
            "async": Category.from_dict(obj.get("async")) if obj.get("async") is not None else None,
            "schema": obj.get("schema")
        })
        return _obj



/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 */

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package petstore

import (
	"encoding/json"
)

// OuterObjectWithEnumProperty struct for OuterObjectWithEnumProperty
type OuterObjectWithEnumProperty struct {
	Value OuterEnumInteger `json:"value"`
}

// NewOuterObjectWithEnumProperty instantiates a new OuterObjectWithEnumProperty object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewOuterObjectWithEnumProperty(value OuterEnumInteger) *OuterObjectWithEnumProperty {
	this := OuterObjectWithEnumProperty{}
	this.Value = value
	return &this
}

// NewOuterObjectWithEnumPropertyWithDefaults instantiates a new OuterObjectWithEnumProperty object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewOuterObjectWithEnumPropertyWithDefaults() *OuterObjectWithEnumProperty {
	this := OuterObjectWithEnumProperty{}
	return &this
}

// GetValue returns the Value field value
func (o *OuterObjectWithEnumProperty) GetValue() OuterEnumInteger {
	if o == nil {
		var ret OuterEnumInteger
		return ret
	}

	return o.Value
}

// GetValueOk returns a tuple with the Value field value
// and a boolean to check if the value has been set.
func (o *OuterObjectWithEnumProperty) GetValueOk() (*OuterEnumInteger, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Value, true
}

// SetValue sets field value
func (o *OuterObjectWithEnumProperty) SetValue(v OuterEnumInteger) {
	o.Value = v
}

func (o OuterObjectWithEnumProperty) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["value"] = o.Value
	}
	return json.Marshal(toSerialize)
}

type NullableOuterObjectWithEnumProperty struct {
	value *OuterObjectWithEnumProperty
	isSet bool
}

func (v NullableOuterObjectWithEnumProperty) Get() *OuterObjectWithEnumProperty {
	return v.value
}

func (v *NullableOuterObjectWithEnumProperty) Set(val *OuterObjectWithEnumProperty) {
	v.value = val
	v.isSet = true
}

func (v NullableOuterObjectWithEnumProperty) IsSet() bool {
	return v.isSet
}

func (v *NullableOuterObjectWithEnumProperty) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableOuterObjectWithEnumProperty(val *OuterObjectWithEnumProperty) *NullableOuterObjectWithEnumProperty {
	return &NullableOuterObjectWithEnumProperty{value: val, isSet: true}
}

func (v NullableOuterObjectWithEnumProperty) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableOuterObjectWithEnumProperty) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package petstore

import (
	"bytes"
	"encoding/json"
)

// EnumClass the model 'EnumClass'
type EnumClass string

// List of EnumClass
const (
	ENUMCLASS_ABC EnumClass = "_abc"
	ENUMCLASS_EFG EnumClass = "-efg"
	ENUMCLASS_XYZ EnumClass = "(xyz)"
)

type NullableEnumClass struct {
	Value EnumClass
	ExplicitNull bool
}

func (v NullableEnumClass) MarshalJSON() ([]byte, error) {
    switch {
    case v.ExplicitNull:
        return []byte("null"), nil
    default:
		return json.Marshal(v.Value)
	}
}

func (v *NullableEnumClass) UnmarshalJSON(src []byte) error {
	if bytes.Equal(src, []byte("null")) {
		v.ExplicitNull = true
		return nil
	}

	return json.Unmarshal(src, &v.Value)
}

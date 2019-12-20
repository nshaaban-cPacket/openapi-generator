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

// List struct for List
type List struct {
	Var123List *string `json:"123-list,omitempty"`
}

// GetVar123List returns the Var123List field value if set, zero value otherwise.
func (o *List) GetVar123List() string {
	if o == nil || o.Var123List == nil {
		var ret string
		return ret
	}
	return *o.Var123List
}

// GetVar123ListOk returns a tuple with the Var123List field value if set, zero value otherwise
// and a boolean to check if the value has been set.
func (o *List) GetVar123ListOk() (string, bool) {
	if o == nil || o.Var123List == nil {
		var ret string
		return ret, false
	}
	return *o.Var123List, true
}

// HasVar123List returns a boolean if a field has been set.
func (o *List) HasVar123List() bool {
	if o != nil && o.Var123List != nil {
		return true
	}

	return false
}

// SetVar123List gets a reference to the given string and assigns it to the Var123List field.
func (o *List) SetVar123List(v string) {
	o.Var123List = &v
}

type NullableList struct {
	Value List
	ExplicitNull bool
}

func (v NullableList) MarshalJSON() ([]byte, error) {
    switch {
    case v.ExplicitNull:
        return []byte("null"), nil
    default:
		return json.Marshal(v.Value)
	}
}

func (v *NullableList) UnmarshalJSON(src []byte) error {
	if bytes.Equal(src, []byte("null")) {
		v.ExplicitNull = true
		return nil
	}

	return json.Unmarshal(src, &v.Value)
}

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

// BigCat struct for BigCat
type BigCat struct {
	Cat
	Kind *string `json:"kind,omitempty"`
}

// NewBigCat instantiates a new BigCat object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewBigCat() *BigCat {
    this := BigCat{}
    return &this
}

// NewBigCatWithDefaults instantiates a new BigCat object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewBigCatWithDefaults() *BigCat {
    this := BigCat{}
    return &this
}

// GetKind returns the Kind field value if set, zero value otherwise.
func (o *BigCat) GetKind() string {
	if o == nil || o.Kind == nil {
		var ret string
		return ret
	}
	return *o.Kind
}

// GetKindOk returns a tuple with the Kind field value if set, zero value otherwise
// and a boolean to check if the value has been set.
func (o *BigCat) GetKindOk() (string, bool) {
	if o == nil || o.Kind == nil {
		var ret string
		return ret, false
	}
	return *o.Kind, true
}

// HasKind returns a boolean if a field has been set.
func (o *BigCat) HasKind() bool {
	if o != nil && o.Kind != nil {
		return true
	}

	return false
}

// SetKind gets a reference to the given string and assigns it to the Kind field.
func (o *BigCat) SetKind(v string) {
	o.Kind = &v
}

type NullableBigCat struct {
	Value BigCat
	ExplicitNull bool
}

func (v NullableBigCat) MarshalJSON() ([]byte, error) {
    switch {
    case v.ExplicitNull:
        return []byte("null"), nil
    default:
		return json.Marshal(v.Value)
	}
}

func (v *NullableBigCat) UnmarshalJSON(src []byte) error {
	if bytes.Equal(src, []byte("null")) {
		v.ExplicitNull = true
		return nil
	}

	return json.Unmarshal(src, &v.Value)
}

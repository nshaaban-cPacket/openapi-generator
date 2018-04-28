/*
 * Swagger Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * API version: 1.0.0
 * Contact: apiteam@swagger.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package petstore
import (
	"time"
)

type MixedPropertiesAndAdditionalPropertiesClass struct {
	Uuid string `json:"uuid,omitempty"`
	DateTime time.Time `json:"dateTime,omitempty"`
	Map_ map[string]Animal `json:"map,omitempty"`
}

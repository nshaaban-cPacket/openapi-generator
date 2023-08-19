/*
 * OpenAPI Petstore
 *
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package petstoreserver

import (
	"github.com/gin-gonic/gin"
)

type PetApi struct {
	// Post /v2/pet
	// Add a new pet to the store
	AddPet gin.HandlerFunc
	// Delete /v2/pet/:petId
	// Deletes a pet
	DeletePet gin.HandlerFunc
	// Get /v2/pet/findByStatus
	// Finds Pets by status
	FindPetsByStatus gin.HandlerFunc
	// Get /v2/pet/findByTags
	// Finds Pets by tags
	// Deprecated
	FindPetsByTags gin.HandlerFunc
	// Get /v2/pet/:petId
	// Find pet by ID
	GetPetById gin.HandlerFunc
	// Put /v2/pet
	// Update an existing pet
	UpdatePet gin.HandlerFunc
	// Post /v2/pet/:petId
	// Updates a pet in the store with form data
	UpdatePetWithForm gin.HandlerFunc
	// Post /v2/pet/:petId/uploadImage
	// uploads an image
	UploadFile gin.HandlerFunc
}

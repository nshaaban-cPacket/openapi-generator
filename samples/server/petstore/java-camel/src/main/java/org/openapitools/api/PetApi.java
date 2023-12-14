/**
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech) (6.0.1-SNAPSHOT).
* https://openapi-generator.tech
* Do not edit the class manually.
*/
package org.openapitools.api;

import org.apache.camel.builder.RouteBuilder;
import org.apache.camel.model.rest.RestParamType;
import org.springframework.stereotype.Component;
import org.openapitools.model.*;
import org.apache.camel.model.rest.RestBindingMode;
import org.apache.camel.LoggingLevel;

@Component
public class PetApi extends RouteBuilder {

    @Override
    public void configure() throws Exception {
        onException(Exception.class)
            .log(LoggingLevel.ERROR, "${exception.message}: ${exception.stacktrace}")
            .handled(true)
            .process("validationErrorProcessor");
        

        /**
        POST /pet : Add a new pet to the store
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("write:pets","modify pets in your account")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .post("/pet")
                .description("Add a new pet to the store")
                .id("addPetApi")
                .produces("application/xml, application/json")
                .outType(Pet.class)
                .consumes("application/json, application/xml")
                .type(Pet.class)
                
                .param()
                    .name("pet")
                    .type(RestParamType.body)
                    .required(true)
                    .description("Pet object that needs to be added to the store")
                .endParam()
                .to("direct:validate-addPet");
        

        /**
        DELETE /pet/{petId} : Deletes a pet
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("write:pets","modify pets in your account")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .delete("/pet/{petId}")
                .description("Deletes a pet")
                .id("deletePetApi")
                .param()
                    .name("petId")
                    .type(RestParamType.path)
                    .required(true)
                    .description("Pet id to delete")
                .endParam()
                .param()
                    .name("apiKey")
                    .type(RestParamType.header)
                    .required(false)
                .endParam()
                .to("direct:validate-deletePet");
        

        /**
        GET /pet/findByStatus : Finds Pets by status
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .get("/pet/findByStatus")
                .description("Finds Pets by status")
                .id("findPetsByStatusApi")
                .produces("application/xml, application/json")
                .outType(Pet[].class)
                .param()
                    .name("status")
                    .type(RestParamType.query)
                    .required(true)
                    .description("Status values that need to be considered for filter")
                .endParam()
                .to("direct:validate-findPetsByStatus");
        

        /**
        GET /pet/findByTags : Finds Pets by tags
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .get("/pet/findByTags")
                .description("Finds Pets by tags")
                .id("findPetsByTagsApi")
                .produces("application/xml, application/json")
                .outType(Pet[].class)
                .param()
                    .name("tags")
                    .type(RestParamType.query)
                    .required(true)
                    .description("Tags to filter by")
                .endParam()
                .to("direct:validate-findPetsByTags");
        

        /**
        GET /pet/{petId} : Find pet by ID
        **/
        rest()
            .securityDefinitions()
                .apiKey("api_key")
                    .withHeader("api_key")
                
            .endSecurityDefinition()
            .get("/pet/{petId}")
                .description("Find pet by ID")
                .id("getPetByIdApi")
                .produces("application/xml, application/json")
                .outType(Pet.class)
                .param()
                    .name("petId")
                    .type(RestParamType.path)
                    .required(true)
                    .description("ID of pet to return")
                .endParam()
                .to("direct:validate-getPetById");
        

        /**
        PUT /pet : Update an existing pet
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("write:pets","modify pets in your account")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .put("/pet")
                .description("Update an existing pet")
                .id("updatePetApi")
                .produces("application/xml, application/json")
                .outType(Pet.class)
                .consumes("application/json, application/xml")
                .type(Pet.class)
                
                .param()
                    .name("pet")
                    .type(RestParamType.body)
                    .required(true)
                    .description("Pet object that needs to be added to the store")
                .endParam()
                .to("direct:validate-updatePet");
        

        /**
        POST /pet/{petId} : Updates a pet in the store with form data
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("write:pets","modify pets in your account")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .post("/pet/{petId}")
                .description("Updates a pet in the store with form data")
                .id("updatePetWithFormApi")
                .clientRequestValidation(false)
                .bindingMode(RestBindingMode.off)
                .consumes("application/x-www-form-urlencoded")
                
                .param()
                    .name("petId")
                    .type(RestParamType.path)
                    .required(true)
                    .description("ID of pet that needs to be updated")
                .endParam()
                .param()
                    .name("name")
                    .type(RestParamType.formData)
                    .required(false)
                    .description("Updated name of the pet")
                .endParam()
                .param()
                    .name("status")
                    .type(RestParamType.formData)
                    .required(false)
                    .description("Updated status of the pet")
                .endParam()
                .to("direct:validate-updatePetWithForm");
        

        /**
        POST /pet/{petId}/uploadImage : uploads an image
        **/
        rest()
            .securityDefinitions()
                .oauth2("petstore_auth")
                    .flow("implicit")
                    .authorizationUrl("http://petstore.swagger.io/api/oauth/dialog")
                        .withScope("write:pets","modify pets in your account")
                        .withScope("read:pets","read your pets")
                
            .endSecurityDefinition()
            .post("/pet/{petId}/uploadImage")
                .description("uploads an image")
                .id("uploadFileApi")
                .clientRequestValidation(false)
                .bindingMode(RestBindingMode.off)
                .produces("application/json")
                .outType(ModelApiResponse.class)
                .consumes("multipart/form-data")
                
                .param()
                    .name("petId")
                    .type(RestParamType.path)
                    .required(true)
                    .description("ID of pet to update")
                .endParam()
                .param()
                    .name("additionalMetadata")
                    .type(RestParamType.formData)
                    .required(false)
                    .description("Additional data to pass to server")
                .endParam()
                .param()
                    .name("file")
                    .type(RestParamType.formData)
                    .required(false)
                    .description("file to upload")
                .endParam()
                .to("direct:validate-uploadFile");
        
    }
}

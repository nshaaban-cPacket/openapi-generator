/*
 * OpenAPI Petstore
 *
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://openapi-generator.tech
 */

use std::rc::Rc;
use std::borrow::Borrow;

use hyper;
use serde_json;
use futures::Future;

use super::{Error, configuration};
use super::request as __internal_request;

pub struct PetApiClient<C: hyper::client::Connect> {
    configuration: Rc<configuration::Configuration<C>>,
}

impl<C: hyper::client::Connect> PetApiClient<C> {
    pub fn new(configuration: Rc<configuration::Configuration<C>>) -> PetApiClient<C> {
        PetApiClient {
            configuration,
        }
    }
}

pub trait PetApi {
    fn add_pet(&self, body: crate::models::Pet) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>>;
    fn delete_pet(&self, pet_id: i64, api_key: &str) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>>;
    fn find_pets_by_status(&self, status: Vec<String>) -> Box<dyn Future<Item = Vec<crate::models::Pet>, Error = Error<serde_json::Value>>>;
    fn find_pets_by_tags(&self, tags: Vec<String>) -> Box<dyn Future<Item = Vec<crate::models::Pet>, Error = Error<serde_json::Value>>>;
    fn get_pet_by_id(&self, pet_id: i64) -> Box<dyn Future<Item = crate::models::Pet, Error = Error<serde_json::Value>>>;
    fn update_pet(&self, body: crate::models::Pet) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>>;
    fn update_pet_with_form(&self, pet_id: i64, name: &str, status: &str) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>>;
    fn upload_file(&self, pet_id: i64, additional_metadata: &str, file: std::path::PathBuf) -> Box<dyn Future<Item = crate::models::ApiResponse, Error = Error<serde_json::Value>>>;
}


impl<C: hyper::client::Connect>PetApi for PetApiClient<C> {
    fn add_pet(&self, body: crate::models::Pet) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Post, "/pet".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_body_param(body)
            .returns_nothing()
            .execute(self.configuration.borrow())
    }

    fn delete_pet(&self, pet_id: i64, api_key: &str) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Delete, "/pet/{petId}".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_path_param("petId".to_string(), pet_id.to_string())
            .with_header_param("api_key".to_string(), api_key.to_string())
            .returns_nothing()
            .execute(self.configuration.borrow())
    }

    fn find_pets_by_status(&self, status: Vec<String>) -> Box<dyn Future<Item = Vec<crate::models::Pet>, Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Get, "/pet/findByStatus".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_query_param("status".to_string(), status.join(",").to_string())
            .execute(self.configuration.borrow())
    }

    fn find_pets_by_tags(&self, tags: Vec<String>) -> Box<dyn Future<Item = Vec<crate::models::Pet>, Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Get, "/pet/findByTags".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_query_param("tags".to_string(), tags.join(",").to_string())
            .execute(self.configuration.borrow())
    }

    fn get_pet_by_id(&self, pet_id: i64) -> Box<dyn Future<Item = crate::models::Pet, Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Get, "/pet/{petId}".to_string())
            .with_auth(__internal_request::Auth::ApiKey(__internal_request::ApiKey{
                in_header: true,
                in_query: false,
                param_name: "api_key".to_owned(),
            }))
            .with_path_param("petId".to_string(), pet_id.to_string())
            .execute(self.configuration.borrow())
    }

    fn update_pet(&self, body: crate::models::Pet) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Put, "/pet".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_body_param(body)
            .returns_nothing()
            .execute(self.configuration.borrow())
    }

    fn update_pet_with_form(&self, pet_id: i64, name: &str, status: &str) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Post, "/pet/{petId}".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_path_param("petId".to_string(), pet_id.to_string())
            .with_form_param("name".to_string(), name.to_string())
            .with_form_param("status".to_string(), status.to_string())
            .returns_nothing()
            .execute(self.configuration.borrow())
    }

    fn upload_file(&self, pet_id: i64, additional_metadata: &str, file: std::path::PathBuf) -> Box<dyn Future<Item = crate::models::ApiResponse, Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Post, "/pet/{petId}/uploadImage".to_string())
            .with_auth(__internal_request::Auth::Oauth)
            .with_path_param("petId".to_string(), pet_id.to_string())
            .with_form_param("additionalMetadata".to_string(), additional_metadata.to_string())
            .with_form_param("file".to_string(), unimplemented!())
            .execute(self.configuration.borrow())
    }

}

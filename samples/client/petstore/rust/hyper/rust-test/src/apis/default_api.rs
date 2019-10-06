/*
 * Rust client test spec
 *
 * Special testing for the Rust client generator
 *
 * The version of the OpenAPI document: 1.0.7
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

pub struct DefaultApiClient<C: hyper::client::Connect> {
    configuration: Rc<configuration::Configuration<C>>,
}

impl<C: hyper::client::Connect> DefaultApiClient<C> {
    pub fn new(configuration: Rc<configuration::Configuration<C>>) -> DefaultApiClient<C> {
        DefaultApiClient {
            configuration,
        }
    }
}

pub trait DefaultApi {
    fn dummy_get(&self, ) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>>;
}


impl<C: hyper::client::Connect>DefaultApi for DefaultApiClient<C> {
    fn dummy_get(&self, ) -> Box<dyn Future<Item = (), Error = Error<serde_json::Value>>> {
        __internal_request::Request::new(hyper::Method::Get, "/dummy".to_string())
            .returns_nothing()
            .execute(self.configuration.borrow())
    }

}

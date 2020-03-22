#![allow(missing_docs, unused_variables, trivial_casts)]
extern crate rust_server_test;
extern crate clap;
extern crate env_logger;
extern crate futures;

// log may be unused if there are no examples
#[allow(unused_imports)]
#[macro_use]
extern crate log;
#[macro_use]
extern crate swagger;
extern crate tokio;

#[allow(unused_imports)]
use futures::{Future, future, Stream, stream};
#[allow(unused_imports)]
use rust_server_test::{Api, ApiNoContext, Client, ContextWrapperExt,
                      ApiError,
                      AllOfGetResponse,
                      DummyGetResponse,
                      DummyPutResponse,
                      FileResponseGetResponse,
                      GetStructuredYamlResponse,
                      HtmlPostResponse,
                      PostYamlResponse,
                      RawJsonGetResponse,
                      SoloObjectPostResponse
                     };
use clap::{App, Arg};

// swagger::Has may be unused if there are no examples
#[allow(unused_imports)]
use swagger::{ContextBuilder, EmptyContext, XSpanIdString, Has, Push, AuthData};

// rt may be unused if there are no examples
#[allow(unused_mut)]
fn main() {
    env_logger::init();

    let matches = App::new("client")
        .arg(Arg::with_name("operation")
            .help("Sets the operation to run")
            .possible_values(&[
                "AllOfGet",
                "DummyGet",
                "FileResponseGet",
                "GetStructuredYaml",
                "HtmlPost",
                "PostYaml",
                "RawJsonGet",
            ])
            .required(true)
            .index(1))
        .arg(Arg::with_name("https")
            .long("https")
            .help("Whether to use HTTPS or not"))
        .arg(Arg::with_name("host")
            .long("host")
            .takes_value(true)
            .default_value("localhost")
            .help("Hostname to contact"))
        .arg(Arg::with_name("port")
            .long("port")
            .takes_value(true)
            .default_value("80")
            .help("Port to contact"))
        .get_matches();

    let is_https = matches.is_present("https");
    let base_url = format!("{}://{}:{}",
                           if is_https { "https" } else { "http" },
                           matches.value_of("host").unwrap(),
                           matches.value_of("port").unwrap());

    let client = if matches.is_present("https") {
        // Using Simple HTTPS
        Client::try_new_https(&base_url)
            .expect("Failed to create HTTPS client")
    } else {
        // Using HTTP
        Client::try_new_http(
            &base_url)
            .expect("Failed to create HTTP client")
    };

    let context: make_context_ty!(ContextBuilder, EmptyContext, Option<AuthData>, XSpanIdString) =
        make_context!(ContextBuilder, EmptyContext, None as Option<AuthData>, XSpanIdString::default());

    let client = client.with_context(context);

    let mut rt = tokio::runtime::Runtime::new().unwrap();

    match matches.value_of("operation") {
        Some("AllOfGet") => {
            let result = rt.block_on(client.all_of_get(
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        Some("DummyGet") => {
            let result = rt.block_on(client.dummy_get(
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        /* Disabled because there's no example.
        Some("DummyPut") => {
            let result = rt.block_on(client.dummy_put(
                  ???
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        */
        Some("FileResponseGet") => {
            let result = rt.block_on(client.file_response_get(
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        Some("GetStructuredYaml") => {
            let result = rt.block_on(client.get_structured_yaml(
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        Some("HtmlPost") => {
            let result = rt.block_on(client.html_post(
                  "body_example".to_string()
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        Some("PostYaml") => {
            let result = rt.block_on(client.post_yaml(
                  "value_example".to_string()
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        Some("RawJsonGet") => {
            let result = rt.block_on(client.raw_json_get(
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        /* Disabled because there's no example.
        Some("SoloObjectPost") => {
            let result = rt.block_on(client.solo_object_post(
                  ???
            ));
            info!("{:?} (X-Span-ID: {:?})", result, (client.context() as &Has<XSpanIdString>).get().clone());
        },
        */
        _ => {
            panic!("Invalid operation provided")
        }
    }
}

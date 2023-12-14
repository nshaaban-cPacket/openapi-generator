/*
 * ByRefOrValue
 *
 * This tests for a oneOf interface representation 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */

/// Addressable : Base schema for addressable entities



#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct Addressable {
    /// Hyperlink reference
    #[serde(rename = "href", skip_serializing_if = "Option::is_none")]
    pub href: Option<String>,
    /// unique identifier
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
}

impl Addressable {
    /// Base schema for addressable entities
    pub fn new() -> Addressable {
        Addressable {
            href: None,
            id: None,
        }
    }
}



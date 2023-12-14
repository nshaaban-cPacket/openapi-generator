/*
 * ByRefOrValue
 *
 * This tests for a oneOf interface representation 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Serialize, Deserialize)]
pub struct Pasta {
    #[serde(rename = "vendor", skip_serializing_if = "Option::is_none")]
    pub vendor: Option<String>,
    /// Hyperlink reference
    #[serde(rename = "href", skip_serializing_if = "Option::is_none")]
    pub href: Option<String>,
    /// unique identifier
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    /// A URI to a JSON-Schema file that defines additional attributes and relationships
    #[serde(rename = "@schemaLocation", skip_serializing_if = "Option::is_none")]
    pub at_schema_location: Option<String>,
    /// When sub-classing, this defines the super-class
    #[serde(rename = "@baseType", skip_serializing_if = "Option::is_none")]
    pub at_base_type: Option<String>,
    /// When sub-classing, this defines the sub-class Extensible name
    #[serde(rename = "@type")]
    pub at_type: String,
}

impl Pasta {
    pub fn new(at_type: String) -> Pasta {
        Pasta {
            vendor: None,
            href: None,
            id: None,
            at_schema_location: None,
            at_base_type: None,
            at_type,
        }
    }
}



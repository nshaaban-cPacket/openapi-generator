// <auto-generated>
/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// ReadOnlyFirst
    /// </summary>
    public partial class ReadOnlyFirst : IEquatable<ReadOnlyFirst>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ReadOnlyFirst" /> class.
        /// </summary>
        /// <param name="bar">bar</param>
        /// <param name="baz">baz</param>
        [JsonConstructor]
        public ReadOnlyFirst(string bar, string baz)
        {
            Bar = bar;
            Baz = baz;
        }

        /// <summary>
        /// Gets or Sets Bar
        /// </summary>
        [JsonPropertyName("bar")]
        public string Bar { get; }

        /// <summary>
        /// Gets or Sets Baz
        /// </summary>
        [JsonPropertyName("baz")]
        public string Baz { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public Dictionary<string, JsonElement> AdditionalProperties { get; } = new Dictionary<string, JsonElement>();

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class ReadOnlyFirst {\n");
            sb.Append("  Bar: ").Append(Bar).Append("\n");
            sb.Append("  Baz: ").Append(Baz).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input as ReadOnlyFirst).AreEqual;
        }

        /// <summary>
        /// Returns true if ReadOnlyFirst instances are equal
        /// </summary>
        /// <param name="input">Instance of ReadOnlyFirst to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(ReadOnlyFirst input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input).AreEqual;
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                hashCode = (hashCode * 59) + Bar.GetHashCode();
                hashCode = (hashCode * 59) + AdditionalProperties.GetHashCode();

                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// A Json converter for type ReadOnlyFirst
    /// </summary>
    public class ReadOnlyFirstJsonConverter : JsonConverter<ReadOnlyFirst>
    {
        /// <summary>
        /// A Json reader.
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override ReadOnlyFirst Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            string bar = default;
            string baz = default;

            while (utf8JsonReader.Read())
            {
                if (startingTokenType == JsonTokenType.StartObject && utf8JsonReader.TokenType == JsonTokenType.EndObject && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (startingTokenType == JsonTokenType.StartArray && utf8JsonReader.TokenType == JsonTokenType.EndArray && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (utf8JsonReader.TokenType == JsonTokenType.PropertyName && currentDepth == utf8JsonReader.CurrentDepth - 1)
                {
                    string propertyName = utf8JsonReader.GetString();
                    utf8JsonReader.Read();

                    switch (propertyName)
                    {
                        case "bar":
                            bar = utf8JsonReader.GetString();
                            break;
                        case "baz":
                            baz = utf8JsonReader.GetString();
                            break;
                        default:
                            break;
                    }
                }
            }

#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning disable CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            if (bar == null)
                throw new ArgumentNullException(nameof(bar), "Property is required for class ReadOnlyFirst.");

            if (baz == null)
                throw new ArgumentNullException(nameof(baz), "Property is required for class ReadOnlyFirst.");

#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning restore CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            return new ReadOnlyFirst(bar, baz);
        }

        /// <summary>
        /// A Json writer
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="readOnlyFirst"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, ReadOnlyFirst readOnlyFirst, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            writer.WriteString("bar", readOnlyFirst.Bar);
            writer.WriteString("baz", readOnlyFirst.Baz);

            writer.WriteEndObject();
        }
    }
}

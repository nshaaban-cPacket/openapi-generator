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
    /// ZeroBasedEnumClass
    /// </summary>
    public partial class ZeroBasedEnumClass : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="ZeroBasedEnumClass" /> class.
        /// </summary>
        /// <param name="zeroBasedEnum">zeroBasedEnum</param>
        [JsonConstructor]
        public ZeroBasedEnumClass(ZeroBasedEnumEnum zeroBasedEnum)
        {
            ZeroBasedEnum = zeroBasedEnum;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Defines ZeroBasedEnum
        /// </summary>
        public enum ZeroBasedEnumEnum
        {
            /// <summary>
            /// Enum Unknown for value: unknown
            /// </summary>
            Unknown,

            /// <summary>
            /// Enum NotUnknown for value: notUnknown
            /// </summary>
            NotUnknown

        }

        /// <summary>
        /// Returns a ZeroBasedEnumEnum
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static ZeroBasedEnumEnum ZeroBasedEnumEnumFromString(string value)
        {
            if (value == "unknown")
                return ZeroBasedEnumEnum.Unknown;

            if (value == "notUnknown")
                return ZeroBasedEnumEnum.NotUnknown;

            throw new NotImplementedException($"Could not convert value to type ZeroBasedEnumEnum: '{value}'");
        }

        /// <summary>
        /// Returns equivalent json value
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static string ZeroBasedEnumEnumToJsonValue(ZeroBasedEnumEnum value)
        {
            if (value == ZeroBasedEnumEnum.Unknown)
                return "unknown";

            if (value == ZeroBasedEnumEnum.NotUnknown)
                return "notUnknown";

            throw new NotImplementedException($"Value could not be handled: '{value}'");
        }

        /// <summary>
        /// Gets or Sets ZeroBasedEnum
        /// </summary>
        [JsonPropertyName("ZeroBasedEnum")]
        public ZeroBasedEnumEnum ZeroBasedEnum { get; set; }

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
            sb.Append("class ZeroBasedEnumClass {\n");
            sb.Append("  ZeroBasedEnum: ").Append(ZeroBasedEnum).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
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
    /// A Json converter for type ZeroBasedEnumClass
    /// </summary>
    public class ZeroBasedEnumClassJsonConverter : JsonConverter<ZeroBasedEnumClass>
    {
        /// <summary>
        /// A Json reader.
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override ZeroBasedEnumClass Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            ZeroBasedEnumClass.ZeroBasedEnumEnum zeroBasedEnum = default;

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
                        case "ZeroBasedEnum":
                            string zeroBasedEnumRawValue = utf8JsonReader.GetString();
                            zeroBasedEnum = ZeroBasedEnumClass.ZeroBasedEnumEnumFromString(zeroBasedEnumRawValue);
                            break;
                        default:
                            break;
                    }
                }
            }

#pragma warning disable CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning disable CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            if (zeroBasedEnum == null)
                throw new ArgumentNullException(nameof(zeroBasedEnum), "Property is required for class ZeroBasedEnumClass.");

#pragma warning restore CS0472 // The result of the expression is always the same since a value of this type is never equal to 'null'
#pragma warning restore CS8073 // The result of the expression is always the same since a value of this type is never equal to 'null'

            return new ZeroBasedEnumClass(zeroBasedEnum);
        }

        /// <summary>
        /// A Json writer
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="zeroBasedEnumClass"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, ZeroBasedEnumClass zeroBasedEnumClass, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            var zeroBasedEnumRawValue = ZeroBasedEnumClass.ZeroBasedEnumEnumToJsonValue(zeroBasedEnumClass.ZeroBasedEnum);
            if (zeroBasedEnumRawValue != null)
                writer.WriteString("ZeroBasedEnum", zeroBasedEnumRawValue);
            else
                writer.WriteNull("ZeroBasedEnum");

            writer.WriteEndObject();
        }
    }
}

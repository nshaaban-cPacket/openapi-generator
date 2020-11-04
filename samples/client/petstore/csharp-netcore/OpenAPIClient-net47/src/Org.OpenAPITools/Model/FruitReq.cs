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
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;
using System.Reflection;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// FruitReq
    /// </summary>
    [JsonConverter(typeof(FruitReqJsonConverter))]
    [DataContract(Name = "fruitReq")]
    public partial class FruitReq : AbstractOpenAPISchema, IEquatable<FruitReq>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="FruitReq" /> class.
        /// </summary>
        public FruitReq()
        {
            this.IsNullable = true;
            this.SchemaType= "oneOf";
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FruitReq" /> class
        /// with the <see cref="AppleReq" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of AppleReq.</param>
        public FruitReq(AppleReq actualInstance)
        {
            this.IsNullable = true;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="FruitReq" /> class
        /// with the <see cref="BananaReq" /> class
        /// </summary>
        /// <param name="actualInstance">An instance of BananaReq.</param>
        public FruitReq(BananaReq actualInstance)
        {
            this.IsNullable = true;
            this.SchemaType= "oneOf";
            this.ActualInstance = actualInstance;
        }


        private Object _actualInstance;

        /// <summary>
        /// Gets or Sets ActualInstance
        /// </summary>
        public override Object ActualInstance
        {
            get
            {
                return _actualInstance;
            }
            set
            {
                if (value.GetType() == typeof(AppleReq))
                {
                    this._actualInstance = value;
                }
                else if (value.GetType() == typeof(BananaReq))
                {
                    this._actualInstance = value;
                }
                else
                {
                    throw new ArgumentException("Invalid instance found. Must be the following types: AppleReq, BananaReq");
                }
            }
        }

        /// <summary>
        /// Get the actual instance of `AppleReq`. If the actual instanct is not `AppleReq`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of AppleReq</returns>
        public AppleReq GetAppleReq()
        {
            return (AppleReq)this.ActualInstance;
        }

        /// <summary>
        /// Get the actual instance of `BananaReq`. If the actual instanct is not `BananaReq`,
        /// the InvalidClassException will be thrown
        /// </summary>
        /// <returns>An instance of BananaReq</returns>
        public BananaReq GetBananaReq()
        {
            return (BananaReq)this.ActualInstance;
        }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class FruitReq {\n");
            sb.Append("  ActualInstance: ").Append(this.ActualInstance).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this.ActualInstance, FruitReq.SerializerSettings);
        }

        /// <summary>
        /// Converts the JSON string into an instance of FruitReq
        /// </summary>
        /// <param name="jsonString">JSON string</param>
        /// <returns>An instance of FruitReq</returns>
        public static FruitReq FromJson(string jsonString)
        {
            FruitReq newFruitReq = null;

            if (jsonString == null)
            {
                return newFruitReq;
            }
            int match = 0;
            List<string> matchedTypes = new List<string>();

            try
            {
                newFruitReq = new FruitReq(JsonConvert.DeserializeObject<AppleReq>(jsonString, FruitReq.SerializerSettings));
                matchedTypes.Add("AppleReq");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(String.Format("Failed to deserialize `{0}` into AppleReq: {1}", jsonString, exception.ToString()));
            }

            try
            {
                newFruitReq = new FruitReq(JsonConvert.DeserializeObject<BananaReq>(jsonString, FruitReq.SerializerSettings));
                matchedTypes.Add("BananaReq");
                match++;
            }
            catch (Exception exception)
            {
                // deserialization failed, try the next one
                System.Diagnostics.Debug.WriteLine(String.Format("Failed to deserialize `{0}` into BananaReq: {1}", jsonString, exception.ToString()));
            }

            if (match == 0)
            {
                throw new InvalidDataException("The JSON string `" + jsonString + "` cannot be deserialized into any schema defined.");
            }
            else if (match > 1)
            {
                throw new InvalidDataException("The JSON string `" + jsonString + "` incorrectly matches more than one schema (should be exactly one match): " + matchedTypes);
            }
            
            // deserialization is considered successful at this point if no exception has been thrown.
            return newFruitReq;
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return OpenAPIClientUtils.compareLogic.Compare(this, input as FruitReq).AreEqual;
        }

        /// <summary>
        /// Returns true if FruitReq instances are equal
        /// </summary>
        /// <param name="input">Instance of FruitReq to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(FruitReq input)
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
                if (this.ActualInstance != null)
                    hashCode = hashCode * 59 + this.ActualInstance.GetHashCode();
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
    /// Custom JSON converter for FruitReq
    /// </summary>
    public class FruitReqJsonConverter : JsonConverter
    {
        /// <summary>
        /// To write the JSON string
        /// </summary>
        /// <param name="writer">JSON writer</param>
        /// <param name="value">Object to be converted into a JSON string</param>
        /// <param name="serializer">JSON Serializer</param>
        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            writer.WriteRawValue((String)(typeof(FruitReq).GetMethod("ToJson").Invoke(value, null)));
        }

        /// <summary>
        /// To convert a JSON string into an object
        /// </summary>
        /// <param name="reader">JSON reader</param>
        /// <param name="objectType">Object type</param>
        /// <param name="existingValue">Existing value</param>
        /// <param name="serializer">JSON Serializer</param>
        /// <returns>The object converted from the JSON string</returns>
        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            return FruitReq.FromJson(JObject.Load(reader).ToString(Formatting.None));
        }

        /// <summary>
        /// Check if the object can be converted
        /// </summary>
        /// <param name="objectType">Object type</param>
        /// <returns>True if the object can be converted</returns>
        public override bool CanConvert(Type objectType)
        {
            return false;
        }
    }

}

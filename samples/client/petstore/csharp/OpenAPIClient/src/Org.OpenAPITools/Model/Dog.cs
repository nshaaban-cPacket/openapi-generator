/* 
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = Org.OpenAPITools.Client.OpenAPIDateConverter;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// Dog
    /// </summary>
    [DataContract]
    public partial class Dog : Animal,  IEquatable<Dog>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Dog" /> class.
        /// </summary>
        [JsonConstructorAttribute]
        protected Dog() { }
        /// <summary>
        /// Initializes a new instance of the <see cref="Dog" /> class.
        /// </summary>
        /// <param name="breed">breed.</param>
        public Dog(string breed = default(string), string className = "Dog", string color = "red") : base(className, color)
        {
            this.Breed = breed;
        }
        
        /// <summary>
        /// Gets or Sets Breed
        /// </summary>
        [DataMember(Name="breed", EmitDefaultValue=false)]
        public string Breed { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class Dog {\n");
            sb.Append("  ").Append(base.ToString().Replace("\n", "\n  ")).Append("\n");
            sb.Append("  Breed: ").Append(Breed).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public override string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as Dog);
        }

        /// <summary>
        /// Returns true if Dog instances are equal
        /// </summary>
        /// <param name="input">Instance of Dog to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(Dog input)
        {
            if (input == null)
                return false;

            return base.Equals(input) && 
                (
                    this.Breed == input.Breed ||
                    (this.Breed != null &&
                    this.Breed.Equals(input.Breed))
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = base.GetHashCode();
                if (this.Breed != null)
                    hashCode = hashCode * 59 + this.Breed.GetHashCode();
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
            foreach(var x in base.BaseValidate(validationContext)) yield return x;
            yield break;
        }
    }

}

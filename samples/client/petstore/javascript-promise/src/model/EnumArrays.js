/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.3-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.EnumArrays = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The EnumArrays model module.
   * @module model/EnumArrays
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>EnumArrays</code>.
   * @alias module:model/EnumArrays
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>EnumArrays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EnumArrays} obj Optional instance to populate.
   * @return {module:model/EnumArrays} The populated <code>EnumArrays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('just_symbol')) {
        obj['just_symbol'] = ApiClient.convertToType(data['just_symbol'], 'String');
      }
      if (data.hasOwnProperty('array_enum')) {
        obj['array_enum'] = ApiClient.convertToType(data['array_enum'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EnumArrays.JustSymbolEnum} just_symbol
   */
  exports.prototype['just_symbol'] = undefined;
  /**
   * @member {Array.<module:model/EnumArrays.ArrayEnumEnum>} array_enum
   */
  exports.prototype['array_enum'] = undefined;


  /**
   * Allowed values for the <code>just_symbol</code> property.
   * @enum {String}
   * @readonly
   */
  exports.JustSymbolEnum = {
    /**
     * value: ">="
     * @const
     */
    "GREATER_THAN_OR_EQUAL_TO": ">=",
    /**
     * value: "$"
     * @const
     */
    "DOLLAR": "$"  };

  /**
   * Allowed values for the <code>arrayEnum</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ArrayEnumEnum = {
    /**
     * value: "fish"
     * @const
     */
    "fish": "fish",
    /**
     * value: "crab"
     * @const
     */
    "crab": "crab"  };


  return exports;
}));



/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
<<<<<<< HEAD
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
=======
 * OpenAPI Generator version: 4.3.0-SNAPSHOT
>>>>>>> 4.3.x
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
    root.OpenApiPetstore.EnumClass = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class EnumClass.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "_abc"
     * @const
     */
    "_abc": "_abc",
    /**
     * value: "-efg"
     * @const
     */
    "-efg": "-efg",
    /**
     * value: "(xyz)"
     * @const
     */
    "(xyz)": "(xyz)"  };

  /**
   * Returns a <code>EnumClass</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/EnumClass} The enum <code>EnumClass</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));



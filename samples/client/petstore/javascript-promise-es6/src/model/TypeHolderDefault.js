/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TypeHolderDefault model module.
 * @module model/TypeHolderDefault
 * @version 1.0.0
 */
class TypeHolderDefault {
    /**
     * Constructs a new <code>TypeHolderDefault</code>.
     * @alias module:model/TypeHolderDefault
     * @param stringItem {String} 
     * @param numberItem {Number} 
     * @param integerItem {Number} 
     * @param boolItem {Boolean} 
     * @param arrayItem {Array.<Number>} 
     */
    constructor(stringItem, numberItem, integerItem, boolItem, arrayItem) { 
        
        TypeHolderDefault.initialize(this, stringItem, numberItem, integerItem, boolItem, arrayItem);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, stringItem, numberItem, integerItem, boolItem, arrayItem) { 
        obj['string_item'] = stringItem;
        obj['number_item'] = numberItem;
        obj['integer_item'] = integerItem;
        obj['bool_item'] = boolItem;
        obj['array_item'] = arrayItem;
    }

    /**
     * Constructs a <code>TypeHolderDefault</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TypeHolderDefault} obj Optional instance to populate.
     * @return {module:model/TypeHolderDefault} The populated <code>TypeHolderDefault</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TypeHolderDefault();

            if (data.hasOwnProperty('string_item')) {
                obj['string_item'] = ApiClient.convertToType(data['string_item'], 'String');
            }
            if (data.hasOwnProperty('number_item')) {
                obj['number_item'] = ApiClient.convertToType(data['number_item'], 'Number');
            }
            if (data.hasOwnProperty('integer_item')) {
                obj['integer_item'] = ApiClient.convertToType(data['integer_item'], 'Number');
            }
            if (data.hasOwnProperty('bool_item')) {
                obj['bool_item'] = ApiClient.convertToType(data['bool_item'], 'Boolean');
            }
            if (data.hasOwnProperty('array_item')) {
                obj['array_item'] = ApiClient.convertToType(data['array_item'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} string_item
 * @default 'what'
 */
TypeHolderDefault.prototype['string_item'] = 'what';

/**
 * @member {Number} number_item
 */
TypeHolderDefault.prototype['number_item'] = undefined;

/**
 * @member {Number} integer_item
 */
TypeHolderDefault.prototype['integer_item'] = undefined;

/**
 * @member {Boolean} bool_item
 * @default true
 */
TypeHolderDefault.prototype['bool_item'] = true;

/**
 * @member {Array.<Number>} array_item
 */
TypeHolderDefault.prototype['array_item'] = undefined;






export default TypeHolderDefault;


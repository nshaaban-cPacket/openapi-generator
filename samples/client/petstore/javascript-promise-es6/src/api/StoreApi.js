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


import ApiClient from "../ApiClient";
import Order from '../model/Order';

/**
* Store service.
* @module api/StoreApi
* @version 1.0.0
*/
export default class StoreApi {

    /**
    * Constructs a new StoreApi. 
    * @alias module:api/StoreApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} orderId ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deleteOrderWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling deleteOrder");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/store/order/{order_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete purchase order by ID
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * @param {String} orderId ID of the order that needs to be deleted
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteOrder(orderId) {
      return this.deleteOrderWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object.<String, {String: Number}>} and HTTP response
     */
    getInventoryWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = {'String': 'Number'};
      return this.apiClient.callApi(
        '/store/inventory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Returns pet inventories by status
     * Returns a map of status codes to quantities
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object.<String, {String: Number}>}
     */
    getInventory() {
      return this.getInventoryWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * @param {Number} orderId ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    getOrderByIdWithHttpInfo(orderId) {
      let postBody = null;
      // verify the required parameter 'orderId' is set
      if (orderId === undefined || orderId === null) {
        throw new Error("Missing the required parameter 'orderId' when calling getOrderById");
      }

      let pathParams = {
        'order_id': orderId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Order;
      return this.apiClient.callApi(
        '/store/order/{order_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find purchase order by ID
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * @param {Number} orderId ID of pet that needs to be fetched
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    getOrderById(orderId) {
      return this.getOrderByIdWithHttpInfo(orderId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} order order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Order} and HTTP response
     */
    placeOrderWithHttpInfo(order) {
      let postBody = order;
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling placeOrder");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Order;
      return this.apiClient.callApi(
        '/store/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Place an order for a pet
     * 
     * @param {module:model/Order} order order placed for purchasing the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Order}
     */
    placeOrder(order) {
      return this.placeOrderWithHttpInfo(order)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}

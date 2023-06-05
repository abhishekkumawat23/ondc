/*
 * sandbox-client-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {Adddeliveryaddress} from '../model/Adddeliveryaddress';
import {Adddeliveryaddressrequest} from '../model/Adddeliveryaddressrequest';
import {Ondeliveryaddress} from '../model/Ondeliveryaddress';
import {Updatedeliveryaddress} from '../model/Updatedeliveryaddress';
import {Updatedeliveryaddressrequest} from '../model/Updatedeliveryaddressrequest';

/**
* DeliveryAddress service.
* @module api/DeliveryAddressApi
* @version 1.0
*/
export class DeliveryAddressApi {

    /**
    * Constructs a new DeliveryAddressApi. 
    * @alias module:api/DeliveryAddressApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the adddeliveryaddress operation.
     * @callback moduleapi/DeliveryAddressApi~adddeliveryaddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Adddeliveryaddress{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * add delivery address
     * @param {module:model/Adddeliveryaddressrequest} body 
     * @param {module:api/DeliveryAddressApi~adddeliveryaddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    adddeliveryaddress(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adddeliveryaddress");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Adddeliveryaddress;

      return this.apiClient.callApi(
        '/v1/delivery_address', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ondeliveryaddress operation.
     * @callback moduleapi/DeliveryAddressApi~ondeliveryaddressCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Ondeliveryaddress>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * on delivery address
     * @param {module:api/DeliveryAddressApi~ondeliveryaddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ondeliveryaddress(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Ondeliveryaddress];

      return this.apiClient.callApi(
        '/v1/delivery_address', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updatedeliveryaddress operation.
     * @callback moduleapi/DeliveryAddressApi~updatedeliveryaddressCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Updatedeliveryaddress{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * update delivery address
     * @param {module:model/Updatedeliveryaddressrequest} body 
     * @param {module:api/DeliveryAddressApi~updatedeliveryaddressCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updatedeliveryaddress(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatedeliveryaddress");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Updatedeliveryaddress;

      return this.apiClient.callApi(
        '/v1/update_delivery_address/c2201e38-dd37-4da8-b19f-2ac730e0e8f2', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
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
import {Confirmorder} from '../model/Confirmorder';
import {Confirmorderrequest} from '../model/Confirmorderrequest';
import {Onconfirm} from '../model/Onconfirm';

/**
* ConfirmOrder service.
* @module api/ConfirmOrderApi
* @version 1.0
*/
export class ConfirmOrderApi {

    /**
    * Constructs a new ConfirmOrderApi. 
    * @alias module:api/ConfirmOrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the confirmorder operation.
     * @callback moduleapi/ConfirmOrderApi~confirmorderCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Confirmorder>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * confirm order
     * @param {Array.<module:model/Confirmorderrequest>} body 
     * @param {module:api/ConfirmOrderApi~confirmorderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    confirmorder(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling confirmorder");
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
      let returnType = [Confirmorder];

      return this.apiClient.callApi(
        '/v2/confirm_order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onconfirm operation.
     * @callback moduleapi/ConfirmOrderApi~onconfirmCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Onconfirm>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * on confirm
     * @param {String} messageIds comma separated message ids
     * @param {module:api/ConfirmOrderApi~onconfirmCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onconfirm(messageIds, callback) {
      
      let postBody = null;
      // verify the required parameter 'messageIds' is set
      if (messageIds === undefined || messageIds === null) {
        throw new Error("Missing the required parameter 'messageIds' when calling onconfirm");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'messageIds': messageIds
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Onconfirm];

      return this.apiClient.callApi(
        '/v2/on_confirm_order', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
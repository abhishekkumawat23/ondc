/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
import {GetFeedbackCategoriesBody} from '../model/GetFeedbackCategoriesBody';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* SellerMetaAPIs service.
* @module api/SellerMetaAPIsApi
* @version 1.0.29
*/
export class SellerMetaAPIsApi {

    /**
    * Constructs a new SellerMetaAPIsApi. 
    * @alias module:api/SellerMetaAPIsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getFeedbackCategoriesPost operation.
     * @callback moduleapi/SellerMetaAPIsApi~getFeedbackCategoriesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of categories for which feedback can be given by the Buyer App
     * @param {Object} opts Optional parameters
     * @param {module:model/GetFeedbackCategoriesBody} opts.body Context header is sent as the request
     * @param {module:api/SellerMetaAPIsApi~getFeedbackCategoriesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFeedbackCategoriesPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;

      return this.apiClient.callApi(
        '/get_feedback_categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
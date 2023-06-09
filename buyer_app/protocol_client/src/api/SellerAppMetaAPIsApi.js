/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {GetCancellationReasonsBody} from '../model/GetCancellationReasonsBody';
import {GetFeedbackFormBody} from '../model/GetFeedbackFormBody';
import {GetRatingCategoriesBody} from '../model/GetRatingCategoriesBody';
import {GetReturnReasonsBody} from '../model/GetReturnReasonsBody';
import {InlineResponse200} from '../model/InlineResponse200';

/**
* SellerAppMetaAPIs service.
* @module api/SellerAppMetaAPIsApi
* @version 1.0.13
*/
export class SellerAppMetaAPIsApi {

    /**
    * Constructs a new SellerAppMetaAPIsApi. 
    * @alias module:api/SellerAppMetaAPIsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getCancellationReasonsPOST operation.
     * @callback moduleapi/SellerAppMetaAPIsApi~getCancellationReasonsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cancellation reasons from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/GetCancellationReasonsBody} opts.body Context header is sent as the request
     * @param {module:api/SellerAppMetaAPIsApi~getCancellationReasonsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCancellationReasonsPOST(opts, callback) {
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
        '/get_cancellation_reasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getFeedbackFormPOST operation.
     * @callback moduleapi/SellerAppMetaAPIsApi~getFeedbackFormPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request a feedback form from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/GetFeedbackFormBody} opts.body The rating value and category is sent by the Buyer App
     * @param {module:api/SellerAppMetaAPIsApi~getFeedbackFormPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getFeedbackFormPOST(opts, callback) {
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
        '/get_feedback_form', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getRatingCategoriesPOST operation.
     * @callback moduleapi/SellerAppMetaAPIsApi~getRatingCategoriesPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of categories that can be rated by the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/GetRatingCategoriesBody} opts.body Context header is sent as the request
     * @param {module:api/SellerAppMetaAPIsApi~getRatingCategoriesPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getRatingCategoriesPOST(opts, callback) {
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
        '/get_rating_categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getReturnReasonsPOST operation.
     * @callback moduleapi/SellerAppMetaAPIsApi~getReturnReasonsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get return reasons from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/GetReturnReasonsBody} opts.body Context header is sent as the request
     * @param {module:api/SellerAppMetaAPIsApi~getReturnReasonsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getReturnReasonsPOST(opts, callback) {
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
        '/get_return_reasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
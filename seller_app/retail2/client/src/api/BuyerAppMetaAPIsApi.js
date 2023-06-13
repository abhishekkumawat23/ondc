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
import {CancellationReasonsBody} from '../model/CancellationReasonsBody';
import {FeedbackCategoriesBody} from '../model/FeedbackCategoriesBody';
import {FeedbackFormBody} from '../model/FeedbackFormBody';
import {InlineResponse200} from '../model/InlineResponse200';
import {RatingCategoriesBody} from '../model/RatingCategoriesBody';
import {ReturnReasonsBody} from '../model/ReturnReasonsBody';

/**
* BuyerAppMetaAPIs service.
* @module api/BuyerAppMetaAPIsApi
* @version 1.0.13
*/
export class BuyerAppMetaAPIsApi {

    /**
    * Constructs a new BuyerAppMetaAPIsApi. 
    * @alias module:api/BuyerAppMetaAPIsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the cancellationReasonsPOST operation.
     * @callback moduleapi/BuyerAppMetaAPIsApi~cancellationReasonsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get cancellation reasons from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/CancellationReasonsBody} opts.body List of cancellation reasons.
     * @param {module:api/BuyerAppMetaAPIsApi~cancellationReasonsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    cancellationReasonsPOST(opts, callback) {
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
        '/cancellation_reasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the feedbackCategoriesPOST operation.
     * @callback moduleapi/BuyerAppMetaAPIsApi~feedbackCategoriesPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of categories for which feedback can be given by the Buyer App
     * @param {Object} opts Optional parameters
     * @param {module:model/FeedbackCategoriesBody} opts.body Array of categories for which feedback can be given by the Buyer App
     * @param {module:api/BuyerAppMetaAPIsApi~feedbackCategoriesPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    feedbackCategoriesPOST(opts, callback) {
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
        '/feedback_categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the feedbackFormPOST operation.
     * @callback moduleapi/BuyerAppMetaAPIsApi~feedbackFormPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a feedback form from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/FeedbackFormBody} opts.body Feedback form sent by the Buyer App
     * @param {module:api/BuyerAppMetaAPIsApi~feedbackFormPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    feedbackFormPOST(opts, callback) {
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
        '/feedback_form', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the ratingCategoriesPOST operation.
     * @callback moduleapi/BuyerAppMetaAPIsApi~ratingCategoriesPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of categories that can be rated by the Buyer App
     * @param {Object} opts Optional parameters
     * @param {module:model/RatingCategoriesBody} opts.body Array of categories which can be rated
     * @param {module:api/BuyerAppMetaAPIsApi~ratingCategoriesPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    ratingCategoriesPOST(opts, callback) {
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
        '/rating_categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the returnReasonsPOST operation.
     * @callback moduleapi/BuyerAppMetaAPIsApi~returnReasonsPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get return reasons from the Seller App
     * @param {Object} opts Optional parameters
     * @param {module:model/ReturnReasonsBody} opts.body List of return reasons
     * @param {module:api/BuyerAppMetaAPIsApi~returnReasonsPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    returnReasonsPOST(opts, callback) {
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
        '/return_reasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
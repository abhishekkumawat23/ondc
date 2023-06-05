/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
import {InlineResponse200} from '../model/InlineResponse200';
import {InlineResponse2001} from '../model/InlineResponse2001';
import {OnCancelBody} from '../model/OnCancelBody';
import {OnConfirmBody} from '../model/OnConfirmBody';
import {OnInitBody} from '../model/OnInitBody';
import {OnRatingBody} from '../model/OnRatingBody';
import {OnSearchBody} from '../model/OnSearchBody';
import {OnSelectBody} from '../model/OnSelectBody';
import {OnStatusBody} from '../model/OnStatusBody';
import {OnSupportBody} from '../model/OnSupportBody';
import {OnTrackBody} from '../model/OnTrackBody';
import {OnUpdateBody} from '../model/OnUpdateBody';

/**
* ONDCBuyerApp service.
* @module api/ONDCBuyerAppApi
* @version 1.0.0
*/
export class ONDCBuyerAppApi {

    /**
    * Constructs a new ONDCBuyerAppApi. 
    * @alias module:api/ONDCBuyerAppApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the onCancelPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onCancelPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send cancellation request_id with reasons list in case of cancellation request. Else send cancelled order object
     * @param {Object} opts Optional parameters
     * @param {module:model/OnCancelBody} opts.body Seller provides response to cancellation request
     * @param {module:api/ONDCBuyerAppApi~onCancelPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onCancelPost(opts, callback) {
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
        '/on_cancel', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onConfirmPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onConfirmPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send active order object
     * @param {Object} opts Optional parameters
     * @param {module:model/OnConfirmBody} opts.body Seller confirms order
     * @param {module:api/ONDCBuyerAppApi~onConfirmPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onConfirmPost(opts, callback) {
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
        '/on_confirm', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onInitPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onInitPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send order object with payment details updated
     * @param {Object} opts Optional parameters
     * @param {module:model/OnInitBody} opts.body Seller provides terms and conditions for an order
     * @param {module:api/ONDCBuyerAppApi~onInitPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onInitPost(opts, callback) {
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
        '/on_init', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onRatingPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onRatingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provide feedback on a service
     * @param {Object} opts Optional parameters
     * @param {module:model/OnRatingBody} opts.body Seller provides response to rating provided by buyer
     * @param {module:api/ONDCBuyerAppApi~onRatingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onRatingPost(opts, callback) {
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
        '/on_rating', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onSearchPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send catalog
     * @param {Object} opts Optional parameters
     * @param {module:model/OnSearchBody} opts.body Sellers provide their catalog in response to buyer search
     * @param {module:api/ONDCBuyerAppApi~onSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onSearchPost(opts, callback) {
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
      let returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/on_search', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onSelectPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onSelectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send draft order object with quoted price for selected items
     * @param {Object} opts Optional parameters
     * @param {module:model/OnSelectBody} opts.body Seller provides quote for selected items
     * @param {module:api/ONDCBuyerAppApi~onSelectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onSelectPost(opts, callback) {
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
        '/on_select', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onStatusPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onStatusPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch the status of a Service
     * @param {Object} opts Optional parameters
     * @param {module:model/OnStatusBody} opts.body Seller provides status information for order
     * @param {module:api/ONDCBuyerAppApi~onStatusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onStatusPost(opts, callback) {
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
        '/on_status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onSupportPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onSupportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Contact Support
     * @param {Object} opts Optional parameters
     * @param {module:model/OnSupportBody} opts.body Seller provides Contact Support details
     * @param {module:api/ONDCBuyerAppApi~onSupportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onSupportPost(opts, callback) {
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
        '/on_support', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onTrackPost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onTrackPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send tracking details of an active order
     * @param {Object} opts Optional parameters
     * @param {module:model/OnTrackBody} opts.body Seller provides tracking details for an order
     * @param {module:api/ONDCBuyerAppApi~onTrackPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onTrackPost(opts, callback) {
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
        '/on_track', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the onUpdatePost operation.
     * @callback moduleapi/ONDCBuyerAppApi~onUpdatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns updated service with updated runtime object
     * @param {Object} opts Optional parameters
     * @param {module:model/OnUpdateBody} opts.body Seller provides response to order update
     * @param {module:api/ONDCBuyerAppApi~onUpdatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    onUpdatePost(opts, callback) {
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
        '/on_update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}
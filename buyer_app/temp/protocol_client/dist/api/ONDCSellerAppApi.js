"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONDCSellerAppApi = void 0;
var _ApiClient = require("../ApiClient");
var _CancelBody = require("../model/CancelBody");
var _ConfirmBody = require("../model/ConfirmBody");
var _InitBody = require("../model/InitBody");
var _InlineResponse = require("../model/InlineResponse200");
var _RatingBody = require("../model/RatingBody");
var _SearchBody = require("../model/SearchBody");
var _SelectBody = require("../model/SelectBody");
var _StatusBody = require("../model/StatusBody");
var _SupportBody = require("../model/SupportBody");
var _TrackBody = require("../model/TrackBody");
var _UpdateBody = require("../model/UpdateBody");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
/**
* ONDCSellerApp service.
* @module api/ONDCSellerAppApi
* @version 1.0.29
*/
var ONDCSellerAppApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ONDCSellerAppApi. 
  * @alias module:api/ONDCSellerAppApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ONDCSellerAppApi(apiClient) {
    _classCallCheck(this, ONDCSellerAppApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the cancelPost operation.
   * @callback moduleapi/ONDCSellerAppApi~cancelPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse200{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Cancel an order
   * @param {Object} opts Optional parameters
   * @param {module:model/CancelBody} opts.body Buyer cancels an order
   * @param {module:api/ONDCSellerAppApi~cancelPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(ONDCSellerAppApi, [{
    key: "cancelPost",
    value: function cancelPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the confirmPost operation.
     * @callback moduleapi/ONDCSellerAppApi~confirmPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initialize an order by providing billing and/or shipping details
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfirmBody} opts.body Buyer confirms an order
     * @param {module:api/ONDCSellerAppApi~confirmPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "confirmPost",
    value: function confirmPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the initPost operation.
     * @callback moduleapi/ONDCSellerAppApi~initPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Initialize an order by providing billing and/or shipping details
     * @param {Object} opts Optional parameters
     * @param {module:model/InitBody} opts.body Buyer initializes order checkout
     * @param {module:api/ONDCSellerAppApi~initPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "initPost",
    value: function initPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/init', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the ratingPost operation.
     * @callback moduleapi/ONDCSellerAppApi~ratingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Provide feedback on a service
     * @param {Object} opts Optional parameters
     * @param {module:model/RatingBody} opts.body Buyer rates for one or more rating categories
     * @param {module:api/ONDCSellerAppApi~ratingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "ratingPost",
    value: function ratingPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/rating', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the searchPost operation.
     * @callback moduleapi/ONDCSellerAppApi~searchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for services by intent
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchBody} opts.body Buyer searches for products and services
     * @param {module:api/ONDCSellerAppApi~searchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "searchPost",
    value: function searchPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the selectPost operation.
     * @callback moduleapi/ONDCSellerAppApi~selectPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Select items from the catalog and build your order
     * @param {Object} opts Optional parameters
     * @param {module:model/SelectBody} opts.body Buyer selects one or more catalog items
     * @param {module:api/ONDCSellerAppApi~selectPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "selectPost",
    value: function selectPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/select', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the statusPost operation.
     * @callback moduleapi/ONDCSellerAppApi~statusPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch the latest order object
     * @param {Object} opts Optional parameters
     * @param {module:model/StatusBody} opts.body Buyer checks for status of order
     * @param {module:api/ONDCSellerAppApi~statusPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "statusPost",
    value: function statusPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the supportPost operation.
     * @callback moduleapi/ONDCSellerAppApi~supportPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Contact support
     * @param {Object} opts Optional parameters
     * @param {module:model/SupportBody} opts.body Buyer searches for Support Contact details
     * @param {module:api/ONDCSellerAppApi~supportPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "supportPost",
    value: function supportPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/support', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the trackPost operation.
     * @callback moduleapi/ONDCSellerAppApi~trackPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Track an active order
     * @param {Object} opts Optional parameters
     * @param {module:model/TrackBody} opts.body Buyer tracks fulfillment of an order
     * @param {module:api/ONDCSellerAppApi~trackPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "trackPost",
    value: function trackPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/track', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the updatePost operation.
     * @callback moduleapi/ONDCSellerAppApi~updatePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an order
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateBody} opts.body Buyer updates an order
     * @param {module:api/ONDCSellerAppApi~updatePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "updatePost",
    value: function updatePost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return this.apiClient.callApi('/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return ONDCSellerAppApi;
}();
exports.ONDCSellerAppApi = ONDCSellerAppApi;
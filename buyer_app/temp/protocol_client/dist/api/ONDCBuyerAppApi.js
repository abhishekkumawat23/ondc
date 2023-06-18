"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONDCBuyerAppApi = void 0;
var _ApiClient = require("../ApiClient");
var _InlineResponse = require("../model/InlineResponse200");
var _InlineResponse2 = require("../model/InlineResponse2001");
var _OnCancelBody = require("../model/OnCancelBody");
var _OnConfirmBody = require("../model/OnConfirmBody");
var _OnInitBody = require("../model/OnInitBody");
var _OnRatingBody = require("../model/OnRatingBody");
var _OnSearchBody = require("../model/OnSearchBody");
var _OnSelectBody = require("../model/OnSelectBody");
var _OnStatusBody = require("../model/OnStatusBody");
var _OnSupportBody = require("../model/OnSupportBody");
var _OnTrackBody = require("../model/OnTrackBody");
var _OnUpdateBody = require("../model/OnUpdateBody");
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
* ONDCBuyerApp service.
* @module api/ONDCBuyerAppApi
* @version 1.0.29
*/
var ONDCBuyerAppApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ONDCBuyerAppApi. 
  * @alias module:api/ONDCBuyerAppApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ONDCBuyerAppApi(apiClient) {
    _classCallCheck(this, ONDCBuyerAppApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
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
  _createClass(ONDCBuyerAppApi, [{
    key: "onCancelPost",
    value: function onCancelPost(opts, callback) {
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
      return this.apiClient.callApi('/on_cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onConfirmPost",
    value: function onConfirmPost(opts, callback) {
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
      return this.apiClient.callApi('/on_confirm', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onInitPost",
    value: function onInitPost(opts, callback) {
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
      return this.apiClient.callApi('/on_init', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onRatingPost",
    value: function onRatingPost(opts, callback) {
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
      return this.apiClient.callApi('/on_rating', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onSearchPost",
    value: function onSearchPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['GatewaySubscriberAuth', 'GatewaySubscriberAuthNew', 'SubscriberAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse2001;
      return this.apiClient.callApi('/on_search', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onSelectPost",
    value: function onSelectPost(opts, callback) {
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
      return this.apiClient.callApi('/on_select', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onStatusPost",
    value: function onStatusPost(opts, callback) {
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
      return this.apiClient.callApi('/on_status', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onSupportPost",
    value: function onSupportPost(opts, callback) {
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
      return this.apiClient.callApi('/on_support', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onTrackPost",
    value: function onTrackPost(opts, callback) {
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
      return this.apiClient.callApi('/on_track', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
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
  }, {
    key: "onUpdatePost",
    value: function onUpdatePost(opts, callback) {
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
      return this.apiClient.callApi('/on_update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return ONDCBuyerAppApi;
}();
exports.ONDCBuyerAppApi = ONDCBuyerAppApi;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ONDCGatewayApi = void 0;
var _ApiClient = require("../ApiClient");
var _InlineResponse = require("../model/InlineResponse200");
var _InlineResponse2 = require("../model/InlineResponse2001");
var _OnSearchBody = require("../model/OnSearchBody");
var _SearchBody = require("../model/SearchBody");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for logistics
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.9
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
* ONDCGateway service.
* @module api/ONDCGatewayApi
* @version 1.0.9
*/
var ONDCGatewayApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ONDCGatewayApi. 
  * @alias module:api/ONDCGatewayApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ONDCGatewayApi(apiClient) {
    _classCallCheck(this, ONDCGatewayApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the onSearchPost operation.
   * @callback moduleapi/ONDCGatewayApi~onSearchPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/InlineResponse2001{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Send catalog
   * @param {Object} opts Optional parameters
   * @param {module:model/OnSearchBody} opts.body Sellers provide their catalog in response to buyer search
   * @param {module:api/ONDCGatewayApi~onSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(ONDCGatewayApi, [{
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
     * Callback function to receive the result of the searchPost operation.
     * @callback moduleapi/ONDCGatewayApi~searchPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for services by intent
     * @param {Object} opts Optional parameters
     * @param {module:model/SearchBody} opts.body Buyer searches for products and services
     * @param {module:api/ONDCGatewayApi~searchPostCallback} callback The callback function, accepting three arguments: error, data, response
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
  }]);
  return ONDCGatewayApi;
}();
exports.ONDCGatewayApi = ONDCGatewayApi;
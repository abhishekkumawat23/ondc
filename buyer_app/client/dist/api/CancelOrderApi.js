"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CancelOrderApi = void 0;
var _ApiClient = require("../ApiClient");
var _Cancelorder = require("../model/Cancelorder");
var _Cancelorderrequest = require("../model/Cancelorderrequest");
var _OncancelorderErrorresponse = require("../model/OncancelorderErrorresponse");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
/**
* CancelOrder service.
* @module api/CancelOrderApi
* @version 1.0
*/
var CancelOrderApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CancelOrderApi. 
  * @alias module:api/CancelOrderApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function CancelOrderApi(apiClient) {
    _classCallCheck(this, CancelOrderApi);
    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }

  /**
   * Callback function to receive the result of the cancelorder operation.
   * @callback moduleapi/CancelOrderApi~cancelorderCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Cancelorder{ data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * cancel order
   * @param {module:model/Cancelorderrequest} body 
   * @param {module:api/CancelOrderApi~cancelorderCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
   */
  _createClass(CancelOrderApi, [{
    key: "cancelorder",
    value: function cancelorder(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling cancelorder");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Cancelorder.Cancelorder;
      return this.apiClient.callApi('/v1/cancel_order', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
    /**
     * Callback function to receive the result of the oncancelorder operation.
     * @callback moduleapi/CancelOrderApi~oncancelorderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OncancelorderErrorresponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * on cancel order
     * @param {String} messageId 
     * @param {module:api/CancelOrderApi~oncancelorderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
  }, {
    key: "oncancelorder",
    value: function oncancelorder(messageId, callback) {
      var postBody = null;
      // verify the required parameter 'messageId' is set
      if (messageId === undefined || messageId === null) {
        throw new Error("Missing the required parameter 'messageId' when calling oncancelorder");
      }
      var pathParams = {};
      var queryParams = {
        'messageId': messageId
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _OncancelorderErrorresponse.OncancelorderErrorresponse;
      return this.apiClient.callApi('/v1/on_cancel_order', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, callback);
    }
  }]);
  return CancelOrderApi;
}();
exports.CancelOrderApi = CancelOrderApi;
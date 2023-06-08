"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VlookupBody = void 0;
var _ApiClient = require("../ApiClient.js");
var _VlookupSearchParameters = require("./VlookupSearchParameters");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Registry 
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Participant Management API
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2.0.5
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.42
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The VlookupBody model module.
 * @module model/VlookupBody
 * @version 2.0.5
 */
var VlookupBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VlookupBody</code>.
   * @alias module:model/VlookupBody
   * @class
   * @param senderSubscriberId {String} A unique ID describing a subscriber on a network.
   * @param requestId {String} Country code as per ISO 3166-1 and ISO 3166-2 format
   * @param timestamp {Date} request timestamp to avoid replay attack
   * @param searchParameters {module:model/VlookupSearchParameters} 
   * @param signature {String} signature
   */
  function VlookupBody(senderSubscriberId, requestId, timestamp, searchParameters, signature) {
    _classCallCheck(this, VlookupBody);
    this.senderSubscriberId = senderSubscriberId;
    this.requestId = requestId;
    this.timestamp = timestamp;
    this.searchParameters = searchParameters;
    this.signature = signature;
  }

  /**
   * Constructs a <code>VlookupBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VlookupBody} obj Optional instance to populate.
   * @return {module:model/VlookupBody} The populated <code>VlookupBody</code> instance.
   */
  _createClass(VlookupBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VlookupBody();
        if (data.hasOwnProperty('sender_subscriber_id')) obj.senderSubscriberId = _ApiClient.ApiClient.convertToType(data['sender_subscriber_id'], 'String');
        if (data.hasOwnProperty('request_id')) obj.requestId = _ApiClient.ApiClient.convertToType(data['request_id'], 'String');
        if (data.hasOwnProperty('timestamp')) obj.timestamp = _ApiClient.ApiClient.convertToType(data['timestamp'], 'Date');
        if (data.hasOwnProperty('search_parameters')) obj.searchParameters = _VlookupSearchParameters.VlookupSearchParameters.constructFromObject(data['search_parameters']);
        if (data.hasOwnProperty('signature')) obj.signature = _ApiClient.ApiClient.convertToType(data['signature'], 'String');
      }
      return obj;
    }
  }]);
  return VlookupBody;
}();
/**
 * A unique ID describing a subscriber on a network.
 * @member {String} senderSubscriberId
 */
exports.VlookupBody = VlookupBody;
VlookupBody.prototype.senderSubscriberId = undefined;

/**
 * Country code as per ISO 3166-1 and ISO 3166-2 format
 * @member {String} requestId
 */
VlookupBody.prototype.requestId = undefined;

/**
 * request timestamp to avoid replay attack
 * @member {Date} timestamp
 */
VlookupBody.prototype.timestamp = undefined;

/**
 * @member {module:model/VlookupSearchParameters} searchParameters
 */
VlookupBody.prototype.searchParameters = undefined;

/**
 * signature
 * @member {String} signature
 */
VlookupBody.prototype.signature = undefined;
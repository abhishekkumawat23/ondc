"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VlookupNetworkParticipant = void 0;
var _ApiClient = require("../ApiClient.js");
var _VlookupSellerOnRecord = require("./VlookupSellerOnRecord");
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
 * The VlookupNetworkParticipant model module.
 * @module model/VlookupNetworkParticipant
 * @version 2.0.5
 */
var VlookupNetworkParticipant = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VlookupNetworkParticipant</code>.
   * @alias module:model/VlookupNetworkParticipant
   * @class
   */
  function VlookupNetworkParticipant() {
    _classCallCheck(this, VlookupNetworkParticipant);
  }

  /**
   * Constructs a <code>VlookupNetworkParticipant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VlookupNetworkParticipant} obj Optional instance to populate.
   * @return {module:model/VlookupNetworkParticipant} The populated <code>VlookupNetworkParticipant</code> instance.
   */
  _createClass(VlookupNetworkParticipant, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VlookupNetworkParticipant();
        if (data.hasOwnProperty('subscriber_url')) obj.subscriberUrl = _ApiClient.ApiClient.convertToType(data['subscriber_url'], 'String');
        if (data.hasOwnProperty('domain')) obj.domain = _ApiClient.ApiClient.convertToType(data['domain'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('msn')) obj.msn = _ApiClient.ApiClient.convertToType(data['msn'], 'Boolean');
        if (data.hasOwnProperty('city_code')) obj.cityCode = _ApiClient.ApiClient.convertToType(data['city_code'], 'String');
        if (data.hasOwnProperty('seller_on_record')) obj.sellerOnRecord = _ApiClient.ApiClient.convertToType(data['seller_on_record'], [_VlookupSellerOnRecord.VlookupSellerOnRecord]);
      }
      return obj;
    }
  }]);
  return VlookupNetworkParticipant;
}();
/**
 * URL to be verified and configured for network participation.The given URL should have valid SSL Certificate that should be able to pass OCSP check. https://certificatetools.com/ocsp-checker can be used to check prior to submitting the request.
 * @member {String} subscriberUrl
 */
exports.VlookupNetworkParticipant = VlookupNetworkParticipant;
VlookupNetworkParticipant.prototype.subscriberUrl = undefined;

/**
 * Industry domain of the subscriber.
 * @member {String} domain
 */
VlookupNetworkParticipant.prototype.domain = undefined;

/**
 * buyerApp or sellerApp
 * @member {String} type
 */
VlookupNetworkParticipant.prototype.type = undefined;

/**
 * true or false
 * @member {Boolean} msn
 */
VlookupNetworkParticipant.prototype.msn = undefined;

/**
 * City code
 * @member {String} cityCode
 */
VlookupNetworkParticipant.prototype.cityCode = undefined;

/**
 * @member {Array.<module:model/VlookupSellerOnRecord>} sellerOnRecord
 */
VlookupNetworkParticipant.prototype.sellerOnRecord = undefined;
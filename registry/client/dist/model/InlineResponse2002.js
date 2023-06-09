"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2002 = void 0;
var _ApiClient = require("../ApiClient.js");
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
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 2.0.5
 */
var InlineResponse2002 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  function InlineResponse2002() {
    _classCallCheck(this, InlineResponse2002);
  }

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  _createClass(InlineResponse2002, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2002();
        if (data.hasOwnProperty('subscriber_id')) obj.subscriberId = _ApiClient.ApiClient.convertToType(data['subscriber_id'], 'String');
        if (data.hasOwnProperty('ukId')) obj.ukId = _ApiClient.ApiClient.convertToType(data['ukId'], 'String');
        if (data.hasOwnProperty('br_id')) obj.brId = _ApiClient.ApiClient.convertToType(data['br_id'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('domain')) obj.domain = _ApiClient.ApiClient.convertToType(data['domain'], 'String');
        if (data.hasOwnProperty('signing_public_key')) obj.signingPublicKey = _ApiClient.ApiClient.convertToType(data['signing_public_key'], 'String');
        if (data.hasOwnProperty('encr_public_key')) obj.encrPublicKey = _ApiClient.ApiClient.convertToType(data['encr_public_key'], 'String');
        if (data.hasOwnProperty('valid_from')) obj.validFrom = _ApiClient.ApiClient.convertToType(data['valid_from'], 'String');
        if (data.hasOwnProperty('valid_until')) obj.validUntil = _ApiClient.ApiClient.convertToType(data['valid_until'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'String');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'String');
      }
      return obj;
    }
  }]);
  return InlineResponse2002;
}();
/**
 * A unique ID describing a subscriber on a network.
 * @member {String} subscriberId
 */
exports.InlineResponse2002 = InlineResponse2002;
InlineResponse2002.prototype.subscriberId = undefined;

/**
 * UUID.
 * @member {String} ukId
 */
InlineResponse2002.prototype.ukId = undefined;

/**
 * UUID.
 * @member {String} brId
 */
InlineResponse2002.prototype.brId = undefined;

/**
 * Country code
 * @member {String} country
 */
InlineResponse2002.prototype.country = undefined;

/**
 * City code
 * @member {String} city
 */
InlineResponse2002.prototype.city = undefined;

/**
 * Industry domain of the subscriber.
 * @member {String} domain
 */
InlineResponse2002.prototype.domain = undefined;

/**
 * Signing Public Key
 * @member {String} signingPublicKey
 */
InlineResponse2002.prototype.signingPublicKey = undefined;

/**
 * Encryption Public Key
 * @member {String} encrPublicKey
 */
InlineResponse2002.prototype.encrPublicKey = undefined;

/**
 * Keys valid from
 * @member {String} validFrom
 */
InlineResponse2002.prototype.validFrom = undefined;

/**
 * Keys valid until
 * @member {String} validUntil
 */
InlineResponse2002.prototype.validUntil = undefined;

/**
 * Created timestamp
 * @member {String} created
 */
InlineResponse2002.prototype.created = undefined;

/**
 * Updated timestamp
 * @member {String} updated
 */
InlineResponse2002.prototype.updated = undefined;
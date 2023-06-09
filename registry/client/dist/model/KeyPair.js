"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyPair = void 0;
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
 * The KeyPair model module.
 * @module model/KeyPair
 * @version 2.0.5
 */
var KeyPair = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>KeyPair</code>.
   * @alias module:model/KeyPair
   * @class
   */
  function KeyPair() {
    _classCallCheck(this, KeyPair);
  }

  /**
   * Constructs a <code>KeyPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyPair} obj Optional instance to populate.
   * @return {module:model/KeyPair} The populated <code>KeyPair</code> instance.
   */
  _createClass(KeyPair, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new KeyPair();
        if (data.hasOwnProperty('signing_public_key')) obj.signingPublicKey = _ApiClient.ApiClient.convertToType(data['signing_public_key'], 'Blob');
        if (data.hasOwnProperty('encryption_public_key')) obj.encryptionPublicKey = _ApiClient.ApiClient.convertToType(data['encryption_public_key'], 'Blob');
        if (data.hasOwnProperty('valid_from')) obj.validFrom = _ApiClient.ApiClient.convertToType(data['valid_from'], 'Date');
        if (data.hasOwnProperty('valid_until')) obj.validUntil = _ApiClient.ApiClient.convertToType(data['valid_until'], 'Date');
      }
      return obj;
    }
  }]);
  return KeyPair;
}();
/**
 * @member {Blob} signingPublicKey
 */
exports.KeyPair = KeyPair;
KeyPair.prototype.signingPublicKey = undefined;

/**
 * @member {Blob} encryptionPublicKey
 */
KeyPair.prototype.encryptionPublicKey = undefined;

/**
 * use IST time zone
 * @member {Date} validFrom
 */
KeyPair.prototype.validFrom = undefined;

/**
 * use IST time zone
 * @member {Date} validUntil
 */
KeyPair.prototype.validUntil = undefined;
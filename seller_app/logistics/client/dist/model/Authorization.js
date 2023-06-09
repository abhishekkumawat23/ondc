"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Authorization = void 0;
var _ApiClient = require("../ApiClient");
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
 * The Authorization model module.
 * @module model/Authorization
 * @version 1.0.9
 */
var Authorization = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Authorization</code>.
   * Describes an authorization mechanism
   * @alias module:model/Authorization
   * @class
   */
  function Authorization() {
    _classCallCheck(this, Authorization);
  }

  /**
   * Constructs a <code>Authorization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Authorization} obj Optional instance to populate.
   * @return {module:model/Authorization} The populated <code>Authorization</code> instance.
   */
  _createClass(Authorization, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Authorization();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('token')) obj.token = _ApiClient.ApiClient.convertToType(data['token'], 'String');
        if (data.hasOwnProperty('valid_from')) obj.validFrom = _ApiClient.ApiClient.convertToType(data['valid_from'], 'Date');
        if (data.hasOwnProperty('valid_to')) obj.validTo = _ApiClient.ApiClient.convertToType(data['valid_to'], 'Date');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
      }
      return obj;
    }
  }]);
  return Authorization;
}();
/**
 * Type of authorization mechanism used
 * @member {String} type
 */
exports.Authorization = Authorization;
Authorization.prototype.type = undefined;

/**
 * Token used for authorization
 * @member {String} token
 */
Authorization.prototype.token = undefined;

/**
 * Timestamp in RFC3339 format from which token is valid
 * @member {Date} validFrom
 */
Authorization.prototype.validFrom = undefined;

/**
 * Timestamp in RFC3339 format until which token is valid
 * @member {Date} validTo
 */
Authorization.prototype.validTo = undefined;

/**
 * Status of the token
 * @member {String} status
 */
Authorization.prototype.status = undefined;
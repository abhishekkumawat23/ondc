"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = void 0;
var _ApiClient = require("../ApiClient");
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
 * The Params model module.
 * @module model/Params
 * @version 1.0
 */
var Params = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Params</code>.
   * @alias module:model/Params
   * @class
   * @param transactionId {String} 
   * @param mode {String} 
   * @param amount {String} 
   * @param vpa {String} 
   */
  function Params(transactionId, mode, amount, vpa) {
    _classCallCheck(this, Params);
    this.transactionId = transactionId;
    this.mode = mode;
    this.amount = amount;
    this.vpa = vpa;
  }

  /**
   * Constructs a <code>Params</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params} obj Optional instance to populate.
   * @return {module:model/Params} The populated <code>Params</code> instance.
   */
  _createClass(Params, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Params();
        if (data.hasOwnProperty('transaction_id')) obj.transactionId = _ApiClient.ApiClient.convertToType(data['transaction_id'], 'String');
        if (data.hasOwnProperty('mode')) obj.mode = _ApiClient.ApiClient.convertToType(data['mode'], 'String');
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'String');
        if (data.hasOwnProperty('vpa')) obj.vpa = _ApiClient.ApiClient.convertToType(data['vpa'], 'String');
      }
      return obj;
    }
  }]);
  return Params;
}();
/**
 * @member {String} transactionId
 */
exports.Params = Params;
Params.prototype.transactionId = undefined;

/**
 * @member {String} mode
 */
Params.prototype.mode = undefined;

/**
 * @member {String} amount
 */
Params.prototype.amount = undefined;

/**
 * @member {String} vpa
 */
Params.prototype.vpa = undefined;
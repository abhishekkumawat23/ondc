"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params2 = void 0;
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
 * The Params2 model module.
 * @module model/Params2
 * @version 1.0
 */
var Params2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Params2</code>.
   * @alias module:model/Params2
   * @class
   * @param amount {String} 
   */
  function Params2(amount) {
    _classCallCheck(this, Params2);
    this.amount = amount;
  }

  /**
   * Constructs a <code>Params2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params2} obj Optional instance to populate.
   * @return {module:model/Params2} The populated <code>Params2</code> instance.
   */
  _createClass(Params2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Params2();
        if (data.hasOwnProperty('amount')) obj.amount = _ApiClient.ApiClient.convertToType(data['amount'], 'String');
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('transaction_id')) obj.transactionId = _ApiClient.ApiClient.convertToType(data['transaction_id'], 'String');
        if (data.hasOwnProperty('mode')) obj.mode = _ApiClient.ApiClient.convertToType(data['mode'], 'String');
        if (data.hasOwnProperty('vpa')) obj.vpa = _ApiClient.ApiClient.convertToType(data['vpa'], 'String');
      }
      return obj;
    }
  }]);
  return Params2;
}();
/**
 * @member {String} amount
 */
exports.Params2 = Params2;
Params2.prototype.amount = undefined;

/**
 * @member {String} currency
 */
Params2.prototype.currency = undefined;

/**
 * @member {String} transactionId
 */
Params2.prototype.transactionId = undefined;

/**
 * @member {String} mode
 */
Params2.prototype.mode = undefined;

/**
 * @member {String} vpa
 */
Params2.prototype.vpa = undefined;
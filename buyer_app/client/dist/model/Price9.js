"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Price9 = void 0;
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
 * The Price9 model module.
 * @module model/Price9
 * @version 1.0
 */
var Price9 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Price9</code>.
   * @alias module:model/Price9
   * @class
   * @param currency {String} 
   * @param value {String} 
   * @param estimatedValue {String} 
   * @param computedValue {String} 
   * @param listedValue {String} 
   * @param offeredValue {String} 
   * @param minimumValue {String} 
   * @param maximumValue {String} 
   */
  function Price9(currency, value, estimatedValue, computedValue, listedValue, offeredValue, minimumValue, maximumValue) {
    _classCallCheck(this, Price9);
    this.currency = currency;
    this.value = value;
    this.estimatedValue = estimatedValue;
    this.computedValue = computedValue;
    this.listedValue = listedValue;
    this.offeredValue = offeredValue;
    this.minimumValue = minimumValue;
    this.maximumValue = maximumValue;
  }

  /**
   * Constructs a <code>Price9</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price9} obj Optional instance to populate.
   * @return {module:model/Price9} The populated <code>Price9</code> instance.
   */
  _createClass(Price9, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Price9();
        if (data.hasOwnProperty('currency')) obj.currency = _ApiClient.ApiClient.convertToType(data['currency'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'String');
        if (data.hasOwnProperty('estimated_value')) obj.estimatedValue = _ApiClient.ApiClient.convertToType(data['estimated_value'], 'String');
        if (data.hasOwnProperty('computed_value')) obj.computedValue = _ApiClient.ApiClient.convertToType(data['computed_value'], 'String');
        if (data.hasOwnProperty('listed_value')) obj.listedValue = _ApiClient.ApiClient.convertToType(data['listed_value'], 'String');
        if (data.hasOwnProperty('offered_value')) obj.offeredValue = _ApiClient.ApiClient.convertToType(data['offered_value'], 'String');
        if (data.hasOwnProperty('minimum_value')) obj.minimumValue = _ApiClient.ApiClient.convertToType(data['minimum_value'], 'String');
        if (data.hasOwnProperty('maximum_value')) obj.maximumValue = _ApiClient.ApiClient.convertToType(data['maximum_value'], 'String');
      }
      return obj;
    }
  }]);
  return Price9;
}();
/**
 * @member {String} currency
 */
exports.Price9 = Price9;
Price9.prototype.currency = undefined;

/**
 * @member {String} value
 */
Price9.prototype.value = undefined;

/**
 * @member {String} estimatedValue
 */
Price9.prototype.estimatedValue = undefined;

/**
 * @member {String} computedValue
 */
Price9.prototype.computedValue = undefined;

/**
 * @member {String} listedValue
 */
Price9.prototype.listedValue = undefined;

/**
 * @member {String} offeredValue
 */
Price9.prototype.offeredValue = undefined;

/**
 * @member {String} minimumValue
 */
Price9.prototype.minimumValue = undefined;

/**
 * @member {String} maximumValue
 */
Price9.prototype.maximumValue = undefined;
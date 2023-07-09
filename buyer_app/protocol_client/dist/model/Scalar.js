"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Scalar = void 0;
var _ApiClient = require("../ApiClient");
var _ScalarRange = require("./ScalarRange");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for retail (grocery, f&b)
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.13
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.46
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The Scalar model module.
 * @module model/Scalar
 * @version 1.0.13
 */
var Scalar = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Scalar</code>.
   * An object representing a scalar quantity.
   * @alias module:model/Scalar
   * @class
   * @param value {Number} 
   * @param unit {String} 
   */
  function Scalar(value, unit) {
    _classCallCheck(this, Scalar);
    this.value = value;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Scalar</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Scalar} obj Optional instance to populate.
   * @return {module:model/Scalar} The populated <code>Scalar</code> instance.
   */
  _createClass(Scalar, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Scalar();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('value')) obj.value = _ApiClient.ApiClient.convertToType(data['value'], 'Number');
        if (data.hasOwnProperty('estimated_value')) obj.estimatedValue = _ApiClient.ApiClient.convertToType(data['estimated_value'], 'Number');
        if (data.hasOwnProperty('computed_value')) obj.computedValue = _ApiClient.ApiClient.convertToType(data['computed_value'], 'Number');
        if (data.hasOwnProperty('range')) obj.range = _ScalarRange.ScalarRange.constructFromObject(data['range']);
        if (data.hasOwnProperty('unit')) obj.unit = _ApiClient.ApiClient.convertToType(data['unit'], 'String');
      }
      return obj;
    }
  }]);
  return Scalar;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.Scalar = Scalar;
Scalar.TypeEnum = {
  /**
   * value: "CONSTANT"
   * @const
   */
  CONSTANT: "CONSTANT",
  /**
   * value: "VARIABLE"
   * @const
   */
  VARIABLE: "VARIABLE"
};
/**
 * @member {module:model/Scalar.TypeEnum} type
 */
Scalar.prototype.type = undefined;

/**
 * @member {Number} value
 */
Scalar.prototype.value = undefined;

/**
 * @member {Number} estimatedValue
 */
Scalar.prototype.estimatedValue = undefined;

/**
 * @member {Number} computedValue
 */
Scalar.prototype.computedValue = undefined;

/**
 * @member {module:model/ScalarRange} range
 */
Scalar.prototype.range = undefined;

/**
 * @member {String} unit
 */
Scalar.prototype.unit = undefined;
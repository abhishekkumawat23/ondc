"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quotation = void 0;
var _ApiClient = require("../ApiClient");
var _Duration = require("./Duration");
var _Price = require("./Price");
var _QuotationBreakup = require("./QuotationBreakup");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for retail (grocery, f&b)
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.29
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
 * The Quotation model module.
 * @module model/Quotation
 * @version 1.0.29
 */
var Quotation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Quotation</code>.
   * Describes a quote
   * @alias module:model/Quotation
   * @class
   * @param price {module:model/Price} 
   */
  function Quotation(price) {
    _classCallCheck(this, Quotation);
    this.price = price;
  }

  /**
   * Constructs a <code>Quotation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Quotation} obj Optional instance to populate.
   * @return {module:model/Quotation} The populated <code>Quotation</code> instance.
   */
  _createClass(Quotation, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Quotation();
        if (data.hasOwnProperty('price')) obj.price = _Price.Price.constructFromObject(data['price']);
        if (data.hasOwnProperty('breakup')) obj.breakup = _ApiClient.ApiClient.convertToType(data['breakup'], [_QuotationBreakup.QuotationBreakup]);
        if (data.hasOwnProperty('ttl')) obj.ttl = _Duration.Duration.constructFromObject(data['ttl']);
      }
      return obj;
    }
  }]);
  return Quotation;
}();
/**
 * @member {module:model/Price} price
 */
exports.Quotation = Quotation;
Quotation.prototype.price = undefined;

/**
 * @member {Array.<module:model/QuotationBreakup>} breakup
 */
Quotation.prototype.breakup = undefined;

/**
 * @member {module:model/Duration} ttl
 */
Quotation.prototype.ttl = undefined;
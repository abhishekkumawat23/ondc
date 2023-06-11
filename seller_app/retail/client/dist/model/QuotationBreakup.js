"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuotationBreakup = void 0;
var _ApiClient = require("../ApiClient");
var _ItemId = require("./ItemId");
var _ItemQuantityAllocated = require("./ItemQuantityAllocated");
var _Price = require("./Price");
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
 * The QuotationBreakup model module.
 * @module model/QuotationBreakup
 * @version 1.0.13
 */
var QuotationBreakup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>QuotationBreakup</code>.
   * @alias module:model/QuotationBreakup
   * @class
   */
  function QuotationBreakup() {
    _classCallCheck(this, QuotationBreakup);
  }

  /**
   * Constructs a <code>QuotationBreakup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuotationBreakup} obj Optional instance to populate.
   * @return {module:model/QuotationBreakup} The populated <code>QuotationBreakup</code> instance.
   */
  _createClass(QuotationBreakup, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new QuotationBreakup();
        if (data.hasOwnProperty('@ondc/org/item_id')) obj.ondcorgitemId = _ItemId.ItemId.constructFromObject(data['@ondc/org/item_id']);
        if (data.hasOwnProperty('@ondc/org/item_quantity')) obj.ondcorgitemQuantity = _ItemQuantityAllocated.ItemQuantityAllocated.constructFromObject(data['@ondc/org/item_quantity']);
        if (data.hasOwnProperty('@ondc/org/title_type')) obj.ondcorgtitleType = _ApiClient.ApiClient.convertToType(data['@ondc/org/title_type'], 'String');
        if (data.hasOwnProperty('title')) obj.title = _ApiClient.ApiClient.convertToType(data['title'], 'String');
        if (data.hasOwnProperty('price')) obj.price = _Price.Price.constructFromObject(data['price']);
      }
      return obj;
    }
  }]);
  return QuotationBreakup;
}();
/**
 * @member {module:model/ItemId} ondcorgitemId
 */
exports.QuotationBreakup = QuotationBreakup;
QuotationBreakup.prototype.ondcorgitemId = undefined;

/**
 * @member {module:model/ItemQuantityAllocated} ondcorgitemQuantity
 */
QuotationBreakup.prototype.ondcorgitemQuantity = undefined;

/**
 * Allowed values for the <code>ondcorgtitleType</code> property.
 * @enum {String}
 * @readonly
 */
QuotationBreakup.OndcorgtitleTypeEnum = {
  /**
   * value: "item"
   * @const
   */
  item: "item",
  /**
   * value: "delivery"
   * @const
   */
  delivery: "delivery",
  /**
   * value: "packing"
   * @const
   */
  packing: "packing",
  /**
   * value: "tax"
   * @const
   */
  tax: "tax",
  /**
   * value: "convenience charge"
   * @const
   */
  convenienceCharge: "convenience charge"
};
/**
 * @member {module:model/QuotationBreakup.OndcorgtitleTypeEnum} ondcorgtitleType
 */
QuotationBreakup.prototype.ondcorgtitleType = undefined;

/**
 * @member {String} title
 */
QuotationBreakup.prototype.title = undefined;

/**
 * @member {module:model/Price} price
 */
QuotationBreakup.prototype.price = undefined;
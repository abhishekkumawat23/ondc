"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Catalog = void 0;
var _ApiClient = require("../ApiClient");
var _Category = require("./Category");
var _Descriptor = require("./Descriptor");
var _Fulfillment = require("./Fulfillment");
var _Offer = require("./Offer");
var _Payment = require("./Payment");
var _Provider = require("./Provider");
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
 * The Catalog model module.
 * @module model/Catalog
 * @version 1.0.9
 */
var Catalog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Catalog</code>.
   * Describes a Seller App catalog
   * @alias module:model/Catalog
   * @class
   * @param bppproviders {Array.<module:model/Provider>} 
   */
  function Catalog(bppproviders) {
    _classCallCheck(this, Catalog);
    this.bppproviders = bppproviders;
  }

  /**
   * Constructs a <code>Catalog</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Catalog} obj Optional instance to populate.
   * @return {module:model/Catalog} The populated <code>Catalog</code> instance.
   */
  _createClass(Catalog, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Catalog();
        if (data.hasOwnProperty('bpp/descriptor')) obj.bppdescriptor = _Descriptor.Descriptor.constructFromObject(data['bpp/descriptor']);
        if (data.hasOwnProperty('bpp/categories')) obj.bppcategories = _ApiClient.ApiClient.convertToType(data['bpp/categories'], [_Category.Category]);
        if (data.hasOwnProperty('bpp/fulfillments')) obj.bppfulfillments = _ApiClient.ApiClient.convertToType(data['bpp/fulfillments'], [_Fulfillment.Fulfillment]);
        if (data.hasOwnProperty('bpp/payments')) obj.bpppayments = _ApiClient.ApiClient.convertToType(data['bpp/payments'], [_Payment.Payment]);
        if (data.hasOwnProperty('bpp/offers')) obj.bppoffers = _ApiClient.ApiClient.convertToType(data['bpp/offers'], [_Offer.Offer]);
        if (data.hasOwnProperty('bpp/providers')) obj.bppproviders = _ApiClient.ApiClient.convertToType(data['bpp/providers'], [_Provider.Provider]);
        if (data.hasOwnProperty('exp')) obj.exp = _ApiClient.ApiClient.convertToType(data['exp'], 'Date');
      }
      return obj;
    }
  }]);
  return Catalog;
}();
/**
 * @member {module:model/Descriptor} bppdescriptor
 */
exports.Catalog = Catalog;
Catalog.prototype.bppdescriptor = undefined;

/**
 * @member {Array.<module:model/Category>} bppcategories
 */
Catalog.prototype.bppcategories = undefined;

/**
 * @member {Array.<module:model/Fulfillment>} bppfulfillments
 */
Catalog.prototype.bppfulfillments = undefined;

/**
 * @member {Array.<module:model/Payment>} bpppayments
 */
Catalog.prototype.bpppayments = undefined;

/**
 * @member {Array.<module:model/Offer>} bppoffers
 */
Catalog.prototype.bppoffers = undefined;

/**
 * @member {Array.<module:model/Provider>} bppproviders
 */
Catalog.prototype.bppproviders = undefined;

/**
 * Time after which catalog has to be refreshed
 * @member {Date} exp
 */
Catalog.prototype.exp = undefined;
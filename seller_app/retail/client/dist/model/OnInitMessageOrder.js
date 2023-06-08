"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnInitMessageOrder = void 0;
var _ApiClient = require("../ApiClient");
var _Billing = require("./Billing");
var _Fulfillment = require("./Fulfillment");
var _OnInitMessageOrderAddOns = require("./OnInitMessageOrderAddOns");
var _OnInitMessageOrderItems = require("./OnInitMessageOrderItems");
var _OnInitMessageOrderOffers = require("./OnInitMessageOrderOffers");
var _OnInitMessageOrderProvider = require("./OnInitMessageOrderProvider");
var _OnInitMessageOrderProviderLocation = require("./OnInitMessageOrderProviderLocation");
var _Payment = require("./Payment");
var _Quotation = require("./Quotation");
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.44
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The OnInitMessageOrder model module.
 * @module model/OnInitMessageOrder
 * @version 1.0.13
 */
var OnInitMessageOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnInitMessageOrder</code>.
   * @alias module:model/OnInitMessageOrder
   * @class
   */
  function OnInitMessageOrder() {
    _classCallCheck(this, OnInitMessageOrder);
  }

  /**
   * Constructs a <code>OnInitMessageOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnInitMessageOrder} obj Optional instance to populate.
   * @return {module:model/OnInitMessageOrder} The populated <code>OnInitMessageOrder</code> instance.
   */
  _createClass(OnInitMessageOrder, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnInitMessageOrder();
        if (data.hasOwnProperty('provider')) obj.provider = _OnInitMessageOrderProvider.OnInitMessageOrderProvider.constructFromObject(data['provider']);
        if (data.hasOwnProperty('provider_location')) obj.providerLocation = _OnInitMessageOrderProviderLocation.OnInitMessageOrderProviderLocation.constructFromObject(data['provider_location']);
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_OnInitMessageOrderItems.OnInitMessageOrderItems]);
        if (data.hasOwnProperty('add_ons')) obj.addOns = _ApiClient.ApiClient.convertToType(data['add_ons'], [_OnInitMessageOrderAddOns.OnInitMessageOrderAddOns]);
        if (data.hasOwnProperty('offers')) obj.offers = _ApiClient.ApiClient.convertToType(data['offers'], [_OnInitMessageOrderOffers.OnInitMessageOrderOffers]);
        if (data.hasOwnProperty('billing')) obj.billing = _Billing.Billing.constructFromObject(data['billing']);
        if (data.hasOwnProperty('fulfillment')) obj.fulfillment = _Fulfillment.Fulfillment.constructFromObject(data['fulfillment']);
        if (data.hasOwnProperty('quote')) obj.quote = _Quotation.Quotation.constructFromObject(data['quote']);
        if (data.hasOwnProperty('payment')) obj.payment = _Payment.Payment.constructFromObject(data['payment']);
      }
      return obj;
    }
  }]);
  return OnInitMessageOrder;
}();
/**
 * @member {module:model/OnInitMessageOrderProvider} provider
 */
exports.OnInitMessageOrder = OnInitMessageOrder;
OnInitMessageOrder.prototype.provider = undefined;

/**
 * @member {module:model/OnInitMessageOrderProviderLocation} providerLocation
 */
OnInitMessageOrder.prototype.providerLocation = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderItems>} items
 */
OnInitMessageOrder.prototype.items = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderAddOns>} addOns
 */
OnInitMessageOrder.prototype.addOns = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderOffers>} offers
 */
OnInitMessageOrder.prototype.offers = undefined;

/**
 * @member {module:model/Billing} billing
 */
OnInitMessageOrder.prototype.billing = undefined;

/**
 * @member {module:model/Fulfillment} fulfillment
 */
OnInitMessageOrder.prototype.fulfillment = undefined;

/**
 * @member {module:model/Quotation} quote
 */
OnInitMessageOrder.prototype.quote = undefined;

/**
 * @member {module:model/Payment} payment
 */
OnInitMessageOrder.prototype.payment = undefined;
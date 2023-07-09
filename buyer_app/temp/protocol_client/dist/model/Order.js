"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order = void 0;
var _ApiClient = require("../ApiClient");
var _Billing = require("./Billing");
var _Cancellation = require("./Cancellation");
var _Document = require("./Document");
var _Fulfillment = require("./Fulfillment");
var _OrderAddOns = require("./OrderAddOns");
var _OrderItems = require("./OrderItems");
var _OrderOffers = require("./OrderOffers");
var _OrderOndcorglinkedOrders = require("./OrderOndcorglinkedOrders");
var _OrderProvider = require("./OrderProvider");
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
 * The Order model module.
 * @module model/Order
 * @version 1.0.29
 */
var Order = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Order</code>.
   * Describes the details of an order - For \&quot;@ondc/org/cancellation.cancelled_by\&quot; use following values - buyer-app, seller-app, logistics-provider;
   * @alias module:model/Order
   * @class
   */
  function Order() {
    _classCallCheck(this, Order);
  }

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  _createClass(Order, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('provider')) obj.provider = _OrderProvider.OrderProvider.constructFromObject(data['provider']);
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_OrderItems.OrderItems]);
        if (data.hasOwnProperty('add_ons')) obj.addOns = _ApiClient.ApiClient.convertToType(data['add_ons'], [_OrderAddOns.OrderAddOns]);
        if (data.hasOwnProperty('offers')) obj.offers = _ApiClient.ApiClient.convertToType(data['offers'], [_OrderOffers.OrderOffers]);
        if (data.hasOwnProperty('documents')) obj.documents = _ApiClient.ApiClient.convertToType(data['documents'], [_Document.Document]);
        if (data.hasOwnProperty('billing')) obj.billing = _Billing.Billing.constructFromObject(data['billing']);
        if (data.hasOwnProperty('fulfillments')) obj.fulfillments = _ApiClient.ApiClient.convertToType(data['fulfillments'], [_Fulfillment.Fulfillment]);
        if (data.hasOwnProperty('quote')) obj.quote = _Quotation.Quotation.constructFromObject(data['quote']);
        if (data.hasOwnProperty('payment')) obj.payment = _Payment.Payment.constructFromObject(data['payment']);
        if (data.hasOwnProperty('@ondc/org/cancellation')) obj.ondcorgcancellation = _Cancellation.Cancellation.constructFromObject(data['@ondc/org/cancellation']);
        if (data.hasOwnProperty('@ondc/org/linked_orders')) obj.ondcorglinkedOrders = _ApiClient.ApiClient.convertToType(data['@ondc/org/linked_orders'], [_OrderOndcorglinkedOrders.OrderOndcorglinkedOrders]);
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
      }
      return obj;
    }
  }]);
  return Order;
}();
/**
 * Unique identifier for Order across the network, Will be created by buyer app in confirm API
 * @member {String} id
 */
exports.Order = Order;
Order.prototype.id = undefined;

/**
 * @member {String} state
 */
Order.prototype.state = undefined;

/**
 * @member {module:model/OrderProvider} provider
 */
Order.prototype.provider = undefined;

/**
 * @member {Array.<module:model/OrderItems>} items
 */
Order.prototype.items = undefined;

/**
 * @member {Array.<module:model/OrderAddOns>} addOns
 */
Order.prototype.addOns = undefined;

/**
 * @member {Array.<module:model/OrderOffers>} offers
 */
Order.prototype.offers = undefined;

/**
 * @member {Array.<module:model/Document>} documents
 */
Order.prototype.documents = undefined;

/**
 * @member {module:model/Billing} billing
 */
Order.prototype.billing = undefined;

/**
 * @member {Array.<module:model/Fulfillment>} fulfillments
 */
Order.prototype.fulfillments = undefined;

/**
 * @member {module:model/Quotation} quote
 */
Order.prototype.quote = undefined;

/**
 * @member {module:model/Payment} payment
 */
Order.prototype.payment = undefined;

/**
 * @member {module:model/Cancellation} ondcorgcancellation
 */
Order.prototype.ondcorgcancellation = undefined;

/**
 * payload for cascaded orders e.g. order for logistics services linked to a retail order
 * @member {Array.<module:model/OrderOndcorglinkedOrders>} ondcorglinkedOrders
 */
Order.prototype.ondcorglinkedOrders = undefined;

/**
 * @member {Date} createdAt
 */
Order.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Order.prototype.updatedAt = undefined;
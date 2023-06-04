"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Order2 = void 0;
var _ApiClient = require("../ApiClient");
var _Billing = require("./Billing2");
var _Fulfillment = require("./Fulfillment1");
var _Item = require("./Item5");
var _Payment = require("./Payment3");
var _Provider = require("./Provider5");
var _Quote = require("./Quote4");
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
// TODO(7): id duplicity..
/**
 * The Order2 model module.
 * @module model/Order2
 * @version 1.0
 */
var Order2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Order2</code>.
   * @alias module:model/Order2
   * @class
   * @param id {String} 
   * @param transactionId {String} 
   * @param v {Number} 
   * @param addOns {Array.<String>} 
   * @param billing {module:model/Billing2} 
   * @param bppId {String} 
   * @param createdAt {String} 
   * @param fulfillment {module:model/Fulfillment1} 
   * @param items {Array.<module:model/Item5>} 
   * @param messageId {String} 
   * @param offers {Array.<String>} 
   * @param parentOrderId {String} 
   * @param payment {module:model/Payment3} 
   * @param paymentStatus {String} 
   * @param provider {module:model/Provider5} 
   * @param quote {module:model/Quote4} 
   * @param state {String} 
   * @param updatedAt {String} 
   * @param userId {String} 
   */
  function Order2(id, transactionId, v, addOns, billing, bppId, createdAt, fulfillment, items, messageId, offers, parentOrderId, payment, paymentStatus, provider, quote, state, updatedAt, userId) {
    _classCallCheck(this, Order2);
    this.id = id;
    this.transactionId = transactionId;
    this.v = v;
    this.addOns = addOns;
    this.billing = billing;
    this.bppId = bppId;
    this.createdAt = createdAt;
    this.fulfillment = fulfillment;
    this.items = items;
    this.messageId = messageId;
    this.offers = offers;
    this.parentOrderId = parentOrderId;
    this.payment = payment;
    this.paymentStatus = paymentStatus;
    this.provider = provider;
    this.quote = quote;
    this.state = state;
    this.updatedAt = updatedAt;
    this.userId = userId;
  }

  /**
   * Constructs a <code>Order2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order2} obj Optional instance to populate.
   * @return {module:model/Order2} The populated <code>Order2</code> instance.
   */
  _createClass(Order2, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Order2();
        if (data.hasOwnProperty('_id')) obj.id = _ApiClient.ApiClient.convertToType(data['_id'], 'String');
        if (data.hasOwnProperty('transactionId')) obj.transactionId = _ApiClient.ApiClient.convertToType(data['transactionId'], 'String');
        if (data.hasOwnProperty('__v')) obj.v = _ApiClient.ApiClient.convertToType(data['__v'], 'Number');
        if (data.hasOwnProperty('addOns')) obj.addOns = _ApiClient.ApiClient.convertToType(data['addOns'], ['String']);
        if (data.hasOwnProperty('billing')) obj.billing = _Billing.Billing2.constructFromObject(data['billing']);
        if (data.hasOwnProperty('bppId')) obj.bppId = _ApiClient.ApiClient.convertToType(data['bppId'], 'String');
        if (data.hasOwnProperty('createdAt')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['createdAt'], 'String');
        if (data.hasOwnProperty('fulfillment')) obj.fulfillment = _Fulfillment.Fulfillment1.constructFromObject(data['fulfillment']);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_Item.Item5]);
        if (data.hasOwnProperty('messageId')) obj.messageId = _ApiClient.ApiClient.convertToType(data['messageId'], 'String');
        if (data.hasOwnProperty('offers')) obj.offers = _ApiClient.ApiClient.convertToType(data['offers'], ['String']);
        if (data.hasOwnProperty('parentOrderId')) obj.parentOrderId = _ApiClient.ApiClient.convertToType(data['parentOrderId'], 'String');
        if (data.hasOwnProperty('payment')) obj.payment = _Payment.Payment3.constructFromObject(data['payment']);
        if (data.hasOwnProperty('paymentStatus')) obj.paymentStatus = _ApiClient.ApiClient.convertToType(data['paymentStatus'], 'String');
        if (data.hasOwnProperty('provider')) obj.provider = _Provider.Provider5.constructFromObject(data['provider']);
        if (data.hasOwnProperty('quote')) obj.quote = _Quote.Quote4.constructFromObject(data['quote']);
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('updatedAt')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updatedAt'], 'String');
        if (data.hasOwnProperty('userId')) obj.userId = _ApiClient.ApiClient.convertToType(data['userId'], 'String');
      }
      return obj;
    }
  }]);
  return Order2;
}();
/**
 * @member {String} transactionId
 */
exports.Order2 = Order2;
Order2.prototype.transactionId = undefined;

/**
 * @member {Number} v
 */
Order2.prototype.v = undefined;

/**
 * @member {Array.<String>} addOns
 */
Order2.prototype.addOns = undefined;

/**
 * @member {module:model/Billing2} billing
 */
Order2.prototype.billing = undefined;

/**
 * @member {String} bppId
 */
Order2.prototype.bppId = undefined;

/**
 * @member {String} createdAt
 */
Order2.prototype.createdAt = undefined;

/**
 * @member {module:model/Fulfillment1} fulfillment
 */
Order2.prototype.fulfillment = undefined;

/**
 * @member {String} id
 */
Order2.prototype.id = undefined;

/**
 * @member {Array.<module:model/Item5>} items
 */
Order2.prototype.items = undefined;

/**
 * @member {String} messageId
 */
Order2.prototype.messageId = undefined;

/**
 * @member {Array.<String>} offers
 */
Order2.prototype.offers = undefined;

/**
 * @member {String} parentOrderId
 */
Order2.prototype.parentOrderId = undefined;

/**
 * @member {module:model/Payment3} payment
 */
Order2.prototype.payment = undefined;

/**
 * @member {String} paymentStatus
 */
Order2.prototype.paymentStatus = undefined;

/**
 * @member {module:model/Provider5} provider
 */
Order2.prototype.provider = undefined;

/**
 * @member {module:model/Quote4} quote
 */
Order2.prototype.quote = undefined;

/**
 * @member {String} state
 */
Order2.prototype.state = undefined;

/**
 * @member {String} updatedAt
 */
Order2.prototype.updatedAt = undefined;

/**
 * @member {String} userId
 */
Order2.prototype.userId = undefined;
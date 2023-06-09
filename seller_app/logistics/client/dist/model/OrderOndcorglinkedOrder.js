"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderOndcorglinkedOrder = void 0;
var _ApiClient = require("../ApiClient");
var _OrderOndcorglinkedOrderItems = require("./OrderOndcorglinkedOrderItems");
var _OrderOndcorglinkedOrderOrder = require("./OrderOndcorglinkedOrderOrder");
var _OrderOndcorglinkedOrderProvider = require("./OrderOndcorglinkedOrderProvider");
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
 * The OrderOndcorglinkedOrder model module.
 * @module model/OrderOndcorglinkedOrder
 * @version 1.0.9
 */
var OrderOndcorglinkedOrder = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OrderOndcorglinkedOrder</code>.
   * payload for linked order e.g. retail order that cascaded into this logistics order
   * @alias module:model/OrderOndcorglinkedOrder
   * @class
   */
  function OrderOndcorglinkedOrder() {
    _classCallCheck(this, OrderOndcorglinkedOrder);
  }

  /**
   * Constructs a <code>OrderOndcorglinkedOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderOndcorglinkedOrder} obj Optional instance to populate.
   * @return {module:model/OrderOndcorglinkedOrder} The populated <code>OrderOndcorglinkedOrder</code> instance.
   */
  _createClass(OrderOndcorglinkedOrder, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OrderOndcorglinkedOrder();
        if (data.hasOwnProperty('items')) obj.items = _ApiClient.ApiClient.convertToType(data['items'], [_OrderOndcorglinkedOrderItems.OrderOndcorglinkedOrderItems]);
        if (data.hasOwnProperty('provider')) obj.provider = _OrderOndcorglinkedOrderProvider.OrderOndcorglinkedOrderProvider.constructFromObject(data['provider']);
        if (data.hasOwnProperty('order')) obj.order = _OrderOndcorglinkedOrderOrder.OrderOndcorglinkedOrderOrder.constructFromObject(data['order']);
      }
      return obj;
    }
  }]);
  return OrderOndcorglinkedOrder;
}();
/**
 * @member {Array.<module:model/OrderOndcorglinkedOrderItems>} items
 */
exports.OrderOndcorglinkedOrder = OrderOndcorglinkedOrder;
OrderOndcorglinkedOrder.prototype.items = undefined;

/**
 * @member {module:model/OrderOndcorglinkedOrderProvider} provider
 */
OrderOndcorglinkedOrder.prototype.provider = undefined;

/**
 * @member {module:model/OrderOndcorglinkedOrderOrder} order
 */
OrderOndcorglinkedOrder.prototype.order = undefined;
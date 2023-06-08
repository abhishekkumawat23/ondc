"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Payment = void 0;
var _ApiClient = require("../ApiClient");
var _PaymentOndcorgcodsettlementDetails = require("./PaymentOndcorgcodsettlementDetails");
var _PaymentParams = require("./PaymentParams");
var _Time = require("./Time");
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
 * The Payment model module.
 * @module model/Payment
 * @version 1.0.9
 */
var Payment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payment</code>.
   * Describes a payment
   * @alias module:model/Payment
   * @class
   */
  function Payment() {
    _classCallCheck(this, Payment);
  }

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment} obj Optional instance to populate.
   * @return {module:model/Payment} The populated <code>Payment</code> instance.
   */
  _createClass(Payment, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payment();
        if (data.hasOwnProperty('uri')) obj.uri = _ApiClient.ApiClient.convertToType(data['uri'], 'String');
        if (data.hasOwnProperty('tl_method')) obj.tlMethod = _ApiClient.ApiClient.convertToType(data['tl_method'], 'String');
        if (data.hasOwnProperty('params')) obj.params = _PaymentParams.PaymentParams.constructFromObject(data['params']);
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('time')) obj.time = _Time.Time.constructFromObject(data['time']);
        if (data.hasOwnProperty('collected_by')) obj.collectedBy = _ApiClient.ApiClient.convertToType(data['collected_by'], 'String');
        if (data.hasOwnProperty('@ondc/org/collection_amount')) obj.ondcorgcollectionAmount = _ApiClient.ApiClient.convertToType(data['@ondc/org/collection_amount'], 'String');
        if (data.hasOwnProperty('@ondc/org/cod-settlement_window')) obj.ondcorgcodSettlementWindow = _ApiClient.ApiClient.convertToType(data['@ondc/org/cod-settlement_window'], 'String');
        if (data.hasOwnProperty('@ondc/org/cod-settlement_window_status')) obj.ondcorgcodSettlementWindowStatus = _ApiClient.ApiClient.convertToType(data['@ondc/org/cod-settlement_window_status'], 'String');
        if (data.hasOwnProperty('@ondc/org/cod-settlement_details')) obj.ondcorgcodSettlementDetails = _ApiClient.ApiClient.convertToType(data['@ondc/org/cod-settlement_details'], [_PaymentOndcorgcodsettlementDetails.PaymentOndcorgcodsettlementDetails]);
      }
      return obj;
    }
  }]);
  return Payment;
}();
/**
 * A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If ```tl_method``` = http/get, then the payment details will be sent as url params. Two url param values, ```$transaction_id``` and ```$amount``` are mandatory. And example url would be : https://www.example.com/pay?txid=$transaction_id&amount=$amount&vpa=upiid&payee=shopez&billno=1234
 * @member {String} uri
 */
exports.Payment = Payment;
Payment.prototype.uri = undefined;

/**
 * Allowed values for the <code>tlMethod</code> property.
 * @enum {String}
 * @readonly
 */
Payment.TlMethodEnum = {
  /**
   * value: "http/get"
   * @const
   */
  httpget: "http/get",
  /**
   * value: "http/post"
   * @const
   */
  httppost: "http/post",
  /**
   * value: "payto"
   * @const
   */
  payto: "payto",
  /**
   * value: "upi"
   * @const
   */
  upi: "upi"
};
/**
 * @member {module:model/Payment.TlMethodEnum} tlMethod
 */
Payment.prototype.tlMethod = undefined;

/**
 * @member {module:model/PaymentParams} params
 */
Payment.prototype.params = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Payment.TypeEnum = {
  /**
   * value: "ON-ORDER"
   * @const
   */
  ON_ORDER: "ON-ORDER",
  /**
   * value: "PRE-FULFILLMENT"
   * @const
   */
  PRE_FULFILLMENT: "PRE-FULFILLMENT",
  /**
   * value: "ON-FULFILLMENT"
   * @const
   */
  ON_FULFILLMENT: "ON-FULFILLMENT",
  /**
   * value: "POST-FULFILLMENT"
   * @const
   */
  POST_FULFILLMENT: "POST-FULFILLMENT"
};
/**
 * @member {module:model/Payment.TypeEnum} type
 */
Payment.prototype.type = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Payment.StatusEnum = {
  /**
   * value: "PAID"
   * @const
   */
  PAID: "PAID",
  /**
   * value: "NOT-PAID"
   * @const
   */
  NOT_PAID: "NOT-PAID",
  /**
   * value: "PENDING"
   * @const
   */
  PENDING: "PENDING"
};
/**
 * @member {module:model/Payment.StatusEnum} status
 */
Payment.prototype.status = undefined;

/**
 * @member {module:model/Time} time
 */
Payment.prototype.time = undefined;

/**
 * Allowed values for the <code>collectedBy</code> property.
 * @enum {String}
 * @readonly
 */
Payment.CollectedByEnum = {
  /**
   * value: "BAP"
   * @const
   */
  BAP: "BAP",
  /**
   * value: "BPP"
   * @const
   */
  BPP: "BPP"
};
/**
 * @member {module:model/Payment.CollectedByEnum} collectedBy
 */
Payment.prototype.collectedBy = undefined;

/**
 * CoD collection amount
 * @member {String} ondcorgcollectionAmount
 */
Payment.prototype.ondcorgcollectionAmount = undefined;

/**
 * settlement window in ISO8601 durations format e.g. 'PT48H' indicates T+2 settlement
 * @member {String} ondcorgcodSettlementWindow
 */
Payment.prototype.ondcorgcodSettlementWindow = undefined;

/**
 * Allowed values for the <code>ondcorgcodSettlementWindowStatus</code> property.
 * @enum {String}
 * @readonly
 */
Payment.OndcorgcodSettlementWindowStatusEnum = {
  /**
   * value: "Assert"
   * @const
   */
  assert: "Assert",
  /**
   * value: "Agree"
   * @const
   */
  agree: "Agree",
  /**
   * value: "Disagree"
   * @const
   */
  disagree: "Disagree",
  /**
   * value: "Terminate"
   * @const
   */
  terminate: "Terminate"
};
/**
 * @member {module:model/Payment.OndcorgcodSettlementWindowStatusEnum} ondcorgcodSettlementWindowStatus
 */
Payment.prototype.ondcorgcodSettlementWindowStatus = undefined;

/**
 * @member {Array.<module:model/PaymentOndcorgcodsettlementDetails>} ondcorgcodSettlementDetails
 */
Payment.prototype.ondcorgcodSettlementDetails = undefined;
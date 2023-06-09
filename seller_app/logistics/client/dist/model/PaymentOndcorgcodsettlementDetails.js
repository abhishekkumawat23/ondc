"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOndcorgcodsettlementDetails = void 0;
var _ApiClient = require("../ApiClient");
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
 * The PaymentOndcorgcodsettlementDetails model module.
 * @module model/PaymentOndcorgcodsettlementDetails
 * @version 1.0.9
 */
var PaymentOndcorgcodsettlementDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PaymentOndcorgcodsettlementDetails</code>.
   * @alias module:model/PaymentOndcorgcodsettlementDetails
   * @class
   */
  function PaymentOndcorgcodsettlementDetails() {
    _classCallCheck(this, PaymentOndcorgcodsettlementDetails);
  }

  /**
   * Constructs a <code>PaymentOndcorgcodsettlementDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentOndcorgcodsettlementDetails} obj Optional instance to populate.
   * @return {module:model/PaymentOndcorgcodsettlementDetails} The populated <code>PaymentOndcorgcodsettlementDetails</code> instance.
   */
  _createClass(PaymentOndcorgcodsettlementDetails, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PaymentOndcorgcodsettlementDetails();
        if (data.hasOwnProperty('settlement_counterparty')) obj.settlementCounterparty = _ApiClient.ApiClient.convertToType(data['settlement_counterparty'], 'String');
        if (data.hasOwnProperty('settlement_type')) obj.settlementType = _ApiClient.ApiClient.convertToType(data['settlement_type'], 'String');
        if (data.hasOwnProperty('settlement_bank_account_no')) obj.settlementBankAccountNo = _ApiClient.ApiClient.convertToType(data['settlement_bank_account_no'], 'String');
        if (data.hasOwnProperty('settlement_ifsc_code')) obj.settlementIfscCode = _ApiClient.ApiClient.convertToType(data['settlement_ifsc_code'], 'String');
        if (data.hasOwnProperty('upi_address')) obj.upiAddress = _ApiClient.ApiClient.convertToType(data['upi_address'], 'String');
        if (data.hasOwnProperty('settlement_status')) obj.settlementStatus = _ApiClient.ApiClient.convertToType(data['settlement_status'], 'String');
        if (data.hasOwnProperty('settlement_reference')) obj.settlementReference = _ApiClient.ApiClient.convertToType(data['settlement_reference'], 'String');
        if (data.hasOwnProperty('settlement_timestamp')) obj.settlementTimestamp = _ApiClient.ApiClient.convertToType(data['settlement_timestamp'], 'Date');
      }
      return obj;
    }
  }]);
  return PaymentOndcorgcodsettlementDetails;
}();
/**
 * Allowed values for the <code>settlementCounterparty</code> property.
 * @enum {String}
 * @readonly
 */
exports.PaymentOndcorgcodsettlementDetails = PaymentOndcorgcodsettlementDetails;
PaymentOndcorgcodsettlementDetails.SettlementCounterpartyEnum = {
  /**
   * value: "buyer-app"
   * @const
   */
  buyerApp: "buyer-app",
  /**
   * value: "seller-app"
   * @const
   */
  sellerApp: "seller-app"
};
/**
 * @member {module:model/PaymentOndcorgcodsettlementDetails.SettlementCounterpartyEnum} settlementCounterparty
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementCounterparty = undefined;

/**
 * Allowed values for the <code>settlementType</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgcodsettlementDetails.SettlementTypeEnum = {
  /**
   * value: "neft"
   * @const
   */
  neft: "neft",
  /**
   * value: "rtgs"
   * @const
   */
  rtgs: "rtgs",
  /**
   * value: "upi"
   * @const
   */
  upi: "upi"
};
/**
 * @member {module:model/PaymentOndcorgcodsettlementDetails.SettlementTypeEnum} settlementType
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementType = undefined;

/**
 * @member {String} settlementBankAccountNo
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementBankAccountNo = undefined;

/**
 * @member {String} settlementIfscCode
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementIfscCode = undefined;

/**
 * UPI payment address e.g. VPA
 * @member {String} upiAddress
 */
PaymentOndcorgcodsettlementDetails.prototype.upiAddress = undefined;

/**
 * Allowed values for the <code>settlementStatus</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgcodsettlementDetails.SettlementStatusEnum = {
  /**
   * value: "PAID"
   * @const
   */
  PAID: "PAID",
  /**
   * value: "NOT-PAID"
   * @const
   */
  NOT_PAID: "NOT-PAID"
};
/**
 * @member {module:model/PaymentOndcorgcodsettlementDetails.SettlementStatusEnum} settlementStatus
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementStatus = undefined;

/**
 * Settlement transaction reference number
 * @member {String} settlementReference
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementReference = undefined;

/**
 * Settlement transaction timestamp
 * @member {Date} settlementTimestamp
 */
PaymentOndcorgcodsettlementDetails.prototype.settlementTimestamp = undefined;
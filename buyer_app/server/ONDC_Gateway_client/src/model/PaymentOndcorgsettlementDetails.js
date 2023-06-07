/*
 * ONDC Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The PaymentOndcorgsettlementDetails model module.
 * @module model/PaymentOndcorgsettlementDetails
 * @version 1.0.0
 */
export class PaymentOndcorgsettlementDetails {
  /**
   * Constructs a new <code>PaymentOndcorgsettlementDetails</code>.
   * @alias module:model/PaymentOndcorgsettlementDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PaymentOndcorgsettlementDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentOndcorgsettlementDetails} obj Optional instance to populate.
   * @return {module:model/PaymentOndcorgsettlementDetails} The populated <code>PaymentOndcorgsettlementDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PaymentOndcorgsettlementDetails();
      if (data.hasOwnProperty('settlement_counterparty'))
        obj.settlementCounterparty = ApiClient.convertToType(data['settlement_counterparty'], 'String');
      if (data.hasOwnProperty('settlement_phase'))
        obj.settlementPhase = ApiClient.convertToType(data['settlement_phase'], 'String');
      if (data.hasOwnProperty('settlement_amount'))
        obj.settlementAmount = ApiClient.convertToType(data['settlement_amount'], 'Number');
      if (data.hasOwnProperty('settlement_type'))
        obj.settlementType = ApiClient.convertToType(data['settlement_type'], 'String');
      if (data.hasOwnProperty('settlement_bank_account_no'))
        obj.settlementBankAccountNo = ApiClient.convertToType(data['settlement_bank_account_no'], 'String');
      if (data.hasOwnProperty('settlement_ifsc_code'))
        obj.settlementIfscCode = ApiClient.convertToType(data['settlement_ifsc_code'], 'String');
      if (data.hasOwnProperty('upi_address'))
        obj.upiAddress = ApiClient.convertToType(data['upi_address'], 'String');
      if (data.hasOwnProperty('bank_name'))
        obj.bankName = ApiClient.convertToType(data['bank_name'], 'String');
      if (data.hasOwnProperty('branch_name'))
        obj.branchName = ApiClient.convertToType(data['branch_name'], 'String');
      if (data.hasOwnProperty('beneficiary_address'))
        obj.beneficiaryAddress = ApiClient.convertToType(data['beneficiary_address'], 'String');
      if (data.hasOwnProperty('settlement_status'))
        obj.settlementStatus = ApiClient.convertToType(data['settlement_status'], 'String');
      if (data.hasOwnProperty('settlement_reference'))
        obj.settlementReference = ApiClient.convertToType(data['settlement_reference'], 'String');
      if (data.hasOwnProperty('settlement_timestamp'))
        obj.settlementTimestamp = ApiClient.convertToType(data['settlement_timestamp'], 'Date');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>settlementCounterparty</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgsettlementDetails.SettlementCounterpartyEnum = {
  /**
   * value: "buyer"
   * @const
   */
  buyer: "buyer",

  /**
   * value: "buyer-app"
   * @const
   */
  buyerApp: "buyer-app",

  /**
   * value: "seller-app"
   * @const
   */
  sellerApp: "seller-app",

  /**
   * value: "logistics-provider"
   * @const
   */
  logisticsProvider: "logistics-provider"
};
/**
 * @member {module:model/PaymentOndcorgsettlementDetails.SettlementCounterpartyEnum} settlementCounterparty
 */
PaymentOndcorgsettlementDetails.prototype.settlementCounterparty = undefined;

/**
 * Allowed values for the <code>settlementPhase</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgsettlementDetails.SettlementPhaseEnum = {
  /**
   * value: "sale-amount"
   * @const
   */
  saleAmount: "sale-amount",

  /**
   * value: "withholding-amount"
   * @const
   */
  withholdingAmount: "withholding-amount",

  /**
   * value: "refund"
   * @const
   */
  refund: "refund"
};
/**
 * @member {module:model/PaymentOndcorgsettlementDetails.SettlementPhaseEnum} settlementPhase
 */
PaymentOndcorgsettlementDetails.prototype.settlementPhase = undefined;

/**
 * @member {Number} settlementAmount
 */
PaymentOndcorgsettlementDetails.prototype.settlementAmount = undefined;

/**
 * Allowed values for the <code>settlementType</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgsettlementDetails.SettlementTypeEnum = {
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
 * @member {module:model/PaymentOndcorgsettlementDetails.SettlementTypeEnum} settlementType
 */
PaymentOndcorgsettlementDetails.prototype.settlementType = undefined;

/**
 * @member {String} settlementBankAccountNo
 */
PaymentOndcorgsettlementDetails.prototype.settlementBankAccountNo = undefined;

/**
 * @member {String} settlementIfscCode
 */
PaymentOndcorgsettlementDetails.prototype.settlementIfscCode = undefined;

/**
 * UPI payment address e.g. VPA
 * @member {String} upiAddress
 */
PaymentOndcorgsettlementDetails.prototype.upiAddress = undefined;

/**
 * Bank name
 * @member {String} bankName
 */
PaymentOndcorgsettlementDetails.prototype.bankName = undefined;

/**
 * Branch name
 * @member {String} branchName
 */
PaymentOndcorgsettlementDetails.prototype.branchName = undefined;

/**
 * Beneficiary Address
 * @member {String} beneficiaryAddress
 */
PaymentOndcorgsettlementDetails.prototype.beneficiaryAddress = undefined;

/**
 * Allowed values for the <code>settlementStatus</code> property.
 * @enum {String}
 * @readonly
 */
PaymentOndcorgsettlementDetails.SettlementStatusEnum = {
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
 * @member {module:model/PaymentOndcorgsettlementDetails.SettlementStatusEnum} settlementStatus
 */
PaymentOndcorgsettlementDetails.prototype.settlementStatus = undefined;

/**
 * Settlement transaction reference number
 * @member {String} settlementReference
 */
PaymentOndcorgsettlementDetails.prototype.settlementReference = undefined;

/**
 * Settlement transaction timestamp
 * @member {Date} settlementTimestamp
 */
PaymentOndcorgsettlementDetails.prototype.settlementTimestamp = undefined;


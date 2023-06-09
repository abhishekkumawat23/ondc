/*
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
import {ApiClient} from '../ApiClient';

/**
 * The Params2 model module.
 * @module model/Params2
 * @version 1.0
 */
export class Params2 {
  /**
   * Constructs a new <code>Params2</code>.
   * @alias module:model/Params2
   * @class
   * @param amount {String} 
   */
  constructor(amount) {
    this.amount = amount;
  }

  /**
   * Constructs a <code>Params2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Params2} obj Optional instance to populate.
   * @return {module:model/Params2} The populated <code>Params2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Params2();
      if (data.hasOwnProperty('amount'))
        obj.amount = ApiClient.convertToType(data['amount'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('transaction_id'))
        obj.transactionId = ApiClient.convertToType(data['transaction_id'], 'String');
      if (data.hasOwnProperty('mode'))
        obj.mode = ApiClient.convertToType(data['mode'], 'String');
      if (data.hasOwnProperty('vpa'))
        obj.vpa = ApiClient.convertToType(data['vpa'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} amount
 */
Params2.prototype.amount = undefined;

/**
 * @member {String} currency
 */
Params2.prototype.currency = undefined;

/**
 * @member {String} transactionId
 */
Params2.prototype.transactionId = undefined;

/**
 * @member {String} mode
 */
Params2.prototype.mode = undefined;

/**
 * @member {String} vpa
 */
Params2.prototype.vpa = undefined;


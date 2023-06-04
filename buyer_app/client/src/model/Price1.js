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
 * The Price1 model module.
 * @module model/Price1
 * @version 1.0
 */
export class Price1 {
  /**
   * Constructs a new <code>Price1</code>.
   * @alias module:model/Price1
   * @class
   * @param currency {String} 
   * @param value {Number} 
   */
  constructor(currency, value) {
    this.currency = currency;
    this.value = value;
  }

  /**
   * Constructs a <code>Price1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price1} obj Optional instance to populate.
   * @return {module:model/Price1} The populated <code>Price1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Price1();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} currency
 */
Price1.prototype.currency = undefined;

/**
 * @member {Number} value
 */
Price1.prototype.value = undefined;


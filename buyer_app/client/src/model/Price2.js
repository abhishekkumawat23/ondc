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
 * The Price2 model module.
 * @module model/Price2
 * @version 1.0
 */
export class Price2 {
  /**
   * Constructs a new <code>Price2</code>.
   * @alias module:model/Price2
   * @class
   * @param currency {String} 
   * @param value {Number} 
   */
  constructor(currency, value) {
    this.currency = currency;
    this.value = value;
  }

  /**
   * Constructs a <code>Price2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price2} obj Optional instance to populate.
   * @return {module:model/Price2} The populated <code>Price2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Price2();
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
Price2.prototype.currency = undefined;

/**
 * @member {Number} value
 */
Price2.prototype.value = undefined;


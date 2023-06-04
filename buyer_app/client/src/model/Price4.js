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
 * The Price4 model module.
 * @module model/Price4
 * @version 1.0
 */
export class Price4 {
  /**
   * Constructs a new <code>Price4</code>.
   * @alias module:model/Price4
   * @class
   * @param value {String} 
   * @param currency {String} 
   */
  constructor(value, currency) {
    this.value = value;
    this.currency = currency;
  }

  /**
   * Constructs a <code>Price4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price4} obj Optional instance to populate.
   * @return {module:model/Price4} The populated <code>Price4</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Price4();
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} value
 */
Price4.prototype.value = undefined;

/**
 * @member {String} currency
 */
Price4.prototype.currency = undefined;


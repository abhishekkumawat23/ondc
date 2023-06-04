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
import {Payment1} from './Payment1';

/**
 * The Message13 model module.
 * @module model/Message13
 * @version 1.0
 */
export class Message13 {
  /**
   * Constructs a new <code>Message13</code>.
   * @alias module:model/Message13
   * @class
   * @param payment {module:model/Payment1} 
   */
  constructor(payment) {
    this.payment = payment;
  }

  /**
   * Constructs a <code>Message13</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message13} obj Optional instance to populate.
   * @return {module:model/Message13} The populated <code>Message13</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message13();
      if (data.hasOwnProperty('payment'))
        obj.payment = Payment1.constructFromObject(data['payment']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Payment1} payment
 */
Message13.prototype.payment = undefined;


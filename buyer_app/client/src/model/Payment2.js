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
import {Params1} from './Params1';

/**
 * The Payment2 model module.
 * @module model/Payment2
 * @version 1.0
 */
export class Payment2 {
  /**
   * Constructs a new <code>Payment2</code>.
   * @alias module:model/Payment2
   * @class
   * @param params {module:model/Params1} 
   * @param type {String} 
   * @param status {String} 
   */
  constructor(params, type, status) {
    this.params = params;
    this.type = type;
    this.status = status;
  }

  /**
   * Constructs a <code>Payment2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment2} obj Optional instance to populate.
   * @return {module:model/Payment2} The populated <code>Payment2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Payment2();
      if (data.hasOwnProperty('params'))
        obj.params = Params1.constructFromObject(data['params']);
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/Params1} params
 */
Payment2.prototype.params = undefined;

/**
 * @member {String} type
 */
Payment2.prototype.type = undefined;

/**
 * @member {String} status
 */
Payment2.prototype.status = undefined;


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
import {Tracking} from './Tracking';

/**
 * The Message19 model module.
 * @module model/Message19
 * @version 1.0
 */
export class Message19 {
  /**
   * Constructs a new <code>Message19</code>.
   * @alias module:model/Message19
   * @class
   * @param tracking {module:model/Tracking} 
   */
  constructor(tracking) {
    this.tracking = tracking;
  }

  /**
   * Constructs a <code>Message19</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message19} obj Optional instance to populate.
   * @return {module:model/Message19} The populated <code>Message19</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message19();
      if (data.hasOwnProperty('tracking'))
        obj.tracking = Tracking.constructFromObject(data['tracking']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Tracking} tracking
 */
Message19.prototype.tracking = undefined;


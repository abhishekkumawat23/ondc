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
import {Ack} from './Ack';

/**
 * The Message1 model module.
 * @module model/Message1
 * @version 1.0
 */
export class Message1 {
  /**
   * Constructs a new <code>Message1</code>.
   * @alias module:model/Message1
   * @class
   * @param ack {module:model/Ack} 
   */
  constructor(ack) {
    this.ack = ack;
  }

  /**
   * Constructs a <code>Message1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message1} obj Optional instance to populate.
   * @return {module:model/Message1} The populated <code>Message1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message1();
      if (data.hasOwnProperty('ack'))
        obj.ack = Ack.constructFromObject(data['ack']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Ack} ack
 */
Message1.prototype.ack = undefined;


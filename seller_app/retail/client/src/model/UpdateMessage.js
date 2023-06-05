/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
import {Order} from './Order';

/**
 * The UpdateMessage model module.
 * @module model/UpdateMessage
 * @version 1.0.13
 */
export class UpdateMessage {
  /**
   * Constructs a new <code>UpdateMessage</code>.
   * @alias module:model/UpdateMessage
   * @class
   * @param updateTarget {String} Comma separated values of order objects being updated. For example: ```\"update_target\":\"item,billing,fulfillment\"```
   * @param order {module:model/Order} 
   */
  constructor(updateTarget, order) {
    this.updateTarget = updateTarget;
    this.order = order;
  }

  /**
   * Constructs a <code>UpdateMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UpdateMessage} obj Optional instance to populate.
   * @return {module:model/UpdateMessage} The populated <code>UpdateMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UpdateMessage();
      if (data.hasOwnProperty('update_target'))
        obj.updateTarget = ApiClient.convertToType(data['update_target'], 'String');
      if (data.hasOwnProperty('order'))
        obj.order = Order.constructFromObject(data['order']);
    }
    return obj;
  }
}

/**
 * Comma separated values of order objects being updated. For example: ```\"update_target\":\"item,billing,fulfillment\"```
 * @member {String} updateTarget
 */
UpdateMessage.prototype.updateTarget = undefined;

/**
 * @member {module:model/Order} order
 */
UpdateMessage.prototype.order = undefined;

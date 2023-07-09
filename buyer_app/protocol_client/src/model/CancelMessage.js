/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Descriptor} from './Descriptor';
import {OptionId} from './OptionId';
import {OrderId} from './OrderId';

/**
 * The CancelMessage model module.
 * @module model/CancelMessage
 * @version 1.0.13
 */
export class CancelMessage {
  /**
   * Constructs a new <code>CancelMessage</code>.
   * @alias module:model/CancelMessage
   * @class
   * @param orderId {module:model/OrderId} 
   */
  constructor(orderId) {
    this.orderId = orderId;
  }

  /**
   * Constructs a <code>CancelMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CancelMessage} obj Optional instance to populate.
   * @return {module:model/CancelMessage} The populated <code>CancelMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CancelMessage();
      if (data.hasOwnProperty('order_id'))
        obj.orderId = OrderId.constructFromObject(data['order_id']);
      if (data.hasOwnProperty('cancellation_reason_id'))
        obj.cancellationReasonId = OptionId.constructFromObject(data['cancellation_reason_id']);
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OrderId} orderId
 */
CancelMessage.prototype.orderId = undefined;

/**
 * @member {module:model/OptionId} cancellationReasonId
 */
CancelMessage.prototype.cancellationReasonId = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
CancelMessage.prototype.descriptor = undefined;


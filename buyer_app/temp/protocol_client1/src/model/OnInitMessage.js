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
import {OnInitMessageOrder} from './OnInitMessageOrder';

/**
 * The OnInitMessage model module.
 * @module model/OnInitMessage
 * @version 1.0.13
 */
export class OnInitMessage {
  /**
   * Constructs a new <code>OnInitMessage</code>.
   * @alias module:model/OnInitMessage
   * @class
   * @param order {module:model/OnInitMessageOrder} 
   */
  constructor(order) {
    this.order = order;
  }

  /**
   * Constructs a <code>OnInitMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnInitMessage} obj Optional instance to populate.
   * @return {module:model/OnInitMessage} The populated <code>OnInitMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnInitMessage();
      if (data.hasOwnProperty('order'))
        obj.order = OnInitMessageOrder.constructFromObject(data['order']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OnInitMessageOrder} order
 */
OnInitMessage.prototype.order = undefined;


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
import {Ack} from './Ack';

/**
 * The InlineResponse200Message model module.
 * @module model/InlineResponse200Message
 * @version 1.0.13
 */
export class InlineResponse200Message {
  /**
   * Constructs a new <code>InlineResponse200Message</code>.
   * @alias module:model/InlineResponse200Message
   * @class
   * @param ack {module:model/Ack} 
   */
  constructor(ack) {
    this.ack = ack;
  }

  /**
   * Constructs a <code>InlineResponse200Message</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse200Message} obj Optional instance to populate.
   * @return {module:model/InlineResponse200Message} The populated <code>InlineResponse200Message</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse200Message();
      if (data.hasOwnProperty('ack'))
        obj.ack = Ack.constructFromObject(data['ack']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Ack} ack
 */
InlineResponse200Message.prototype.ack = undefined;


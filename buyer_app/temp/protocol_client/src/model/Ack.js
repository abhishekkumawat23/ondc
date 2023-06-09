/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
 * The Ack model module.
 * @module model/Ack
 * @version 1.0.29
 */
export class Ack {
  /**
   * Constructs a new <code>Ack</code>.
   * Describes the ACK response
   * @alias module:model/Ack
   * @class
   * @param status {module:model/Ack.StatusEnum} Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK
   */
  constructor(status) {
    this.status = status;
  }

  /**
   * Constructs a <code>Ack</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ack} obj Optional instance to populate.
   * @return {module:model/Ack} The populated <code>Ack</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Ack();
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Ack.StatusEnum = {
  /**
   * value: "ACK"
   * @const
   */
  ACK: "ACK",

  /**
   * value: "NACK"
   * @const
   */
  NACK: "NACK"
};
/**
 * Describe the status of the ACK response. If schema validation passes, status is ACK else it is NACK
 * @member {module:model/Ack.StatusEnum} status
 */
Ack.prototype.status = undefined;


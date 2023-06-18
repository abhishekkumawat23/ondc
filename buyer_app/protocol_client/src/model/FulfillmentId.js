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

/**
 * The FulfillmentId model module.
 * @module model/FulfillmentId
 * @version 1.0.13
 */
export class FulfillmentId {
  /**
   * Constructs a new <code>FulfillmentId</code>.
   * Unique reference ID to the fulfillment of an order
   * @alias module:model/FulfillmentId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FulfillmentId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentId} obj Optional instance to populate.
   * @return {module:model/FulfillmentId} The populated <code>FulfillmentId</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FulfillmentId();
    }
    return obj;
  }
}

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
 * The TrackingData model module.
 * @module model/TrackingData
 * @version 1.0.29
 */
export class TrackingData {
  /**
   * Constructs a new <code>TrackingData</code>.
   * @alias module:model/TrackingData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TrackingData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackingData} obj Optional instance to populate.
   * @return {module:model/TrackingData} The populated <code>TrackingData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackingData();
    }
    return obj;
  }
}
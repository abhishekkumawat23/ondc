/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
 * The TimeRange model module.
 * @module model/TimeRange
 * @version 1.0.0
 */
export class TimeRange {
  /**
   * Constructs a new <code>TimeRange</code>.
   * @alias module:model/TimeRange
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TimeRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeRange} obj Optional instance to populate.
   * @return {module:model/TimeRange} The populated <code>TimeRange</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TimeRange();
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'Date');
      if (data.hasOwnProperty('end'))
        obj.end = ApiClient.convertToType(data['end'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Date} start
 */
TimeRange.prototype.start = undefined;

/**
 * @member {Date} end
 */
TimeRange.prototype.end = undefined;


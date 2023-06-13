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
 * The Tracking model module.
 * @module model/Tracking
 * @version 1.0.13
 */
export class Tracking {
  /**
   * Constructs a new <code>Tracking</code>.
   * Describes the tracking info of an object
   * @alias module:model/Tracking
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Tracking</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tracking} obj Optional instance to populate.
   * @return {module:model/Tracking} The populated <code>Tracking</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tracking();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} url
 */
Tracking.prototype.url = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Tracking.StatusEnum = {
  /**
   * value: "active"
   * @const
   */
  active: "active",

  /**
   * value: "inactive"
   * @const
   */
  inactive: "inactive"
};
/**
 * @member {module:model/Tracking.StatusEnum} status
 */
Tracking.prototype.status = undefined;


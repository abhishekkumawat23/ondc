/*
 * ONDC Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Gps model module.
 * @module model/Gps
 * @version 1.0.0
 */
export class Gps {
  /**
   * Constructs a new <code>Gps</code>.
   * Describes a gps coordinate
   * @alias module:model/Gps
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Gps</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Gps} obj Optional instance to populate.
   * @return {module:model/Gps} The populated <code>Gps</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Gps();
    }
    return obj;
  }
}

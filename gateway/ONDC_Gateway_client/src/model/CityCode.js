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
 * The CityCode model module.
 * @module model/CityCode
 * @version 1.0.0
 */
export class CityCode {
  /**
   * Constructs a new <code>CityCode</code>.
   * Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is &#x27;std:080&#x27;
   * @alias module:model/CityCode
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CityCode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CityCode} obj Optional instance to populate.
   * @return {module:model/CityCode} The populated <code>CityCode</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CityCode();
    }
    return obj;
  }
}

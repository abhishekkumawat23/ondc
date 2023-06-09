/*
 * sandbox-client-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
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
 * The Country model module.
 * @module model/Country
 * @version 1.0
 */
export class Country {
  /**
   * Constructs a new <code>Country</code>.
   * @alias module:model/Country
   * @class
   * @param name {String} 
   * @param code {String} 
   */
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  /**
   * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Country} obj Optional instance to populate.
   * @return {module:model/Country} The populated <code>Country</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Country();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Country.prototype.name = undefined;

/**
 * @member {String} code
 */
Country.prototype.code = undefined;


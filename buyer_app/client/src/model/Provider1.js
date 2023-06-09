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
 * The Provider1 model module.
 * @module model/Provider1
 * @version 1.0
 */
export class Provider1 {
  /**
   * Constructs a new <code>Provider1</code>.
   * @alias module:model/Provider1
   * @class
   * @param id {String} 
   * @param locations {Array.<String>} 
   */
  constructor(id, locations) {
    this.id = id;
    this.locations = locations;
  }

  /**
   * Constructs a <code>Provider1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Provider1} obj Optional instance to populate.
   * @return {module:model/Provider1} The populated <code>Provider1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Provider1();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('locations'))
        obj.locations = ApiClient.convertToType(data['locations'], ['String']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Provider1.prototype.id = undefined;

/**
 * @member {Array.<String>} locations
 */
Provider1.prototype.locations = undefined;


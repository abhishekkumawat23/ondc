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
import {Location3} from './Location3';

/**
 * The Provider5 model module.
 * @module model/Provider5
 * @version 1.0
 */
export class Provider5 {
  /**
   * Constructs a new <code>Provider5</code>.
   * @alias module:model/Provider5
   * @class
   * @param locations {Array.<module:model/Location3>} 
   * @param id {String} 
   */
  constructor(locations, id) {
    this.locations = locations;
    this.id = id;
  }

  /**
   * Constructs a <code>Provider5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Provider5} obj Optional instance to populate.
   * @return {module:model/Provider5} The populated <code>Provider5</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Provider5();
      if (data.hasOwnProperty('locations'))
        obj.locations = ApiClient.convertToType(data['locations'], [Location3]);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/Location3>} locations
 */
Provider5.prototype.locations = undefined;

/**
 * @member {String} id
 */
Provider5.prototype.id = undefined;


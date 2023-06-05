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
import {Address9} from './Address9';

/**
 * The Location4 model module.
 * @module model/Location4
 * @version 1.0
 */
export class Location4 {
  /**
   * Constructs a new <code>Location4</code>.
   * @alias module:model/Location4
   * @class
   * @param address {module:model/Address9} 
   */
  constructor(address) {
    this.address = address;
  }

  /**
   * Constructs a <code>Location4</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Location4} obj Optional instance to populate.
   * @return {module:model/Location4} The populated <code>Location4</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Location4();
      if (data.hasOwnProperty('address'))
        obj.address = Address9.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Address9} address
 */
Location4.prototype.address = undefined;

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
 * The Descriptor8 model module.
 * @module model/Descriptor8
 * @version 1.0
 */
export class Descriptor8 {
  /**
   * Constructs a new <code>Descriptor8</code>.
   * @alias module:model/Descriptor8
   * @class
   * @param name {String} 
   * @param shortDesc {String} 
   */
  constructor(name, shortDesc) {
    this.name = name;
    this.shortDesc = shortDesc;
  }

  /**
   * Constructs a <code>Descriptor8</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descriptor8} obj Optional instance to populate.
   * @return {module:model/Descriptor8} The populated <code>Descriptor8</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Descriptor8();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('shortDesc'))
        obj.shortDesc = ApiClient.convertToType(data['shortDesc'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Descriptor8.prototype.name = undefined;

/**
 * @member {String} shortDesc
 */
Descriptor8.prototype.shortDesc = undefined;


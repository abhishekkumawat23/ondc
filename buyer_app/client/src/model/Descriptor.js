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
 * The Descriptor model module.
 * @module model/Descriptor
 * @version 1.0
 */
export class Descriptor {
  /**
   * Constructs a new <code>Descriptor</code>.
   * @alias module:model/Descriptor
   * @class
   * @param name {String} 
   * @param images {Array.<String>} 
   */
  constructor(name, images) {
    this.name = name;
    this.images = images;
  }

  /**
   * Constructs a <code>Descriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descriptor} obj Optional instance to populate.
   * @return {module:model/Descriptor} The populated <code>Descriptor</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Descriptor();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], ['String']);
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('long_desc'))
        obj.longDesc = ApiClient.convertToType(data['long_desc'], 'String');
      if (data.hasOwnProperty('short_desc'))
        obj.shortDesc = ApiClient.convertToType(data['short_desc'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Descriptor.prototype.name = undefined;

/**
 * @member {Array.<String>} images
 */
Descriptor.prototype.images = undefined;

/**
 * @member {String} symbol
 */
Descriptor.prototype.symbol = undefined;

/**
 * @member {String} longDesc
 */
Descriptor.prototype.longDesc = undefined;

/**
 * @member {String} shortDesc
 */
Descriptor.prototype.shortDesc = undefined;

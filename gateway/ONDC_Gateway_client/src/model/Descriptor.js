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
import {Image} from './Image';

/**
 * The Descriptor model module.
 * @module model/Descriptor
 * @version 1.0.0
 */
export class Descriptor {
  /**
   * Constructs a new <code>Descriptor</code>.
   * Describes the description of a real-world object.
   * @alias module:model/Descriptor
   * @class
   */
  constructor() {
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
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('short_desc'))
        obj.shortDesc = ApiClient.convertToType(data['short_desc'], 'String');
      if (data.hasOwnProperty('long_desc'))
        obj.longDesc = ApiClient.convertToType(data['long_desc'], 'String');
      if (data.hasOwnProperty('images'))
        obj.images = ApiClient.convertToType(data['images'], [Image]);
      if (data.hasOwnProperty('audio'))
        obj.audio = ApiClient.convertToType(data['audio'], 'String');
      if (data.hasOwnProperty('3d_render'))
        obj._3dRender = ApiClient.convertToType(data['3d_render'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Descriptor.prototype.name = undefined;

/**
 * @member {String} code
 */
Descriptor.prototype.code = undefined;

/**
 * @member {String} symbol
 */
Descriptor.prototype.symbol = undefined;

/**
 * @member {String} shortDesc
 */
Descriptor.prototype.shortDesc = undefined;

/**
 * @member {String} longDesc
 */
Descriptor.prototype.longDesc = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Descriptor.prototype.images = undefined;

/**
 * @member {String} audio
 */
Descriptor.prototype.audio = undefined;

/**
 * @member {String} _3dRender
 */
Descriptor.prototype._3dRender = undefined;


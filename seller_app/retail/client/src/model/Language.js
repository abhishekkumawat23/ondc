/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
 * The Language model module.
 * @module model/Language
 * @version 1.0.13
 */
export class Language {
  /**
   * Constructs a new <code>Language</code>.
   * indicates language code. ONDC supports language codes as per ISO 639.2 standard
   * @alias module:model/Language
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Language</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Language} obj Optional instance to populate.
   * @return {module:model/Language} The populated <code>Language</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Language();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} code
 */
Language.prototype.code = undefined;


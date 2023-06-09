/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {CountryCode} from './CountryCode';

/**
 * The Country model module.
 * @module model/Country
 * @version 1.0.13
 */
export class Country {
  /**
   * Constructs a new <code>Country</code>.
   * Describes a country.
   * @alias module:model/Country
   * @class
   */
  constructor() {
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
        obj.code = CountryCode.constructFromObject(data['code']);
    }
    return obj;
  }
}

/**
 * Name of the country
 * @member {String} name
 */
Country.prototype.name = undefined;

/**
 * @member {module:model/CountryCode} code
 */
Country.prototype.code = undefined;


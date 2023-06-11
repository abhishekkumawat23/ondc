/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
 * The City model module.
 * @module model/City
 * @version 1.0.9
 */
export class City {
  /**
   * Constructs a new <code>City</code>.
   * Describes a city
   * @alias module:model/City
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>City</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/City} obj Optional instance to populate.
   * @return {module:model/City} The populated <code>City</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new City();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * Name of the city
 * @member {String} name
 */
City.prototype.name = undefined;

/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
City.CodeEnum = {
  /**
   * value: "std:080 (Bengaluru)"
   * @const
   */
  _080Bengaluru: "std:080",

  /**
   * value: "std:011 (New Delhi)"
   * @const
   */
  _011NewDelhi: "std:011",

  /**
   * value: "std:0422 (Coimbatore)"
   * @const
   */
  _0422Coimbatore: "std:0422",

  /**
   * value: "std:0364 (Shillong)"
   * @const
   */
  _0364Shillong: "std:0364",

  /**
   * value: "std:0522 (Lucknow)"
   * @const
   */
  _0522Lucknow: "std:0522",

  /**
   * value: "std:0755 (Bhopal)"
   * @const
   */
  _0755Bhopal: "std:0755",

  /**
   * value: "std:044 (Chennai)"
   * @const
   */
  _044Chennai: "std:044",

  /**
   * value: "std:022 (Mumbai)"
   * @const
   */
  _022Mumbai: "std:022",

  /**
   * value: "std:020 (Pune)"
   * @const
   */
  _020Pune: "std:020",

  /**
   * value: "std:040 (Hyderabad)"
   * @const
   */
  _040Hyderabad: "std:040",

  /**
   * value: "std:0145 (Ajmer)"
   * @const
   */
  _0145Ajmer: "std:0145"
};
/**
 * Codification of city code will be using the std code of the city e.g. for Bengaluru, city code is 'std:080'
 * @member {module:model/City.CodeEnum} code
 */
City.prototype.code = undefined;


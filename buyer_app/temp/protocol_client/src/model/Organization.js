/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
 * The Organization model module.
 * @module model/Organization
 * @version 1.0.29
 */
export class Organization {
  /**
   * Constructs a new <code>Organization</code>.
   * Describes an organization
   * @alias module:model/Organization
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Organization</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Organization} obj Optional instance to populate.
   * @return {module:model/Organization} The populated <code>Organization</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Organization();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('cred'))
        obj.cred = ApiClient.convertToType(data['cred'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
Organization.prototype.name = undefined;

/**
 * @member {String} cred
 */
Organization.prototype.cred = undefined;

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

/**
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
export class Address {
  /**
   * Constructs a new <code>Address</code>.
   * Describes an address
   * @alias module:model/Address
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address();
      if (data.hasOwnProperty('door'))
        obj.door = ApiClient.convertToType(data['door'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('building'))
        obj.building = ApiClient.convertToType(data['building'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
      if (data.hasOwnProperty('locality'))
        obj.locality = ApiClient.convertToType(data['locality'], 'String');
      if (data.hasOwnProperty('ward'))
        obj.ward = ApiClient.convertToType(data['ward'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('area_code'))
        obj.areaCode = ApiClient.convertToType(data['area_code'], 'String');
    }
    return obj;
  }
}

/**
 * Door / Shop number of the address
 * @member {String} door
 */
Address.prototype.door = undefined;

/**
 * Name of address if applicable. Example, shop name
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * Name of the building or block
 * @member {String} building
 */
Address.prototype.building = undefined;

/**
 * Street name or number
 * @member {String} street
 */
Address.prototype.street = undefined;

/**
 * Name of the locality, apartments
 * @member {String} locality
 */
Address.prototype.locality = undefined;

/**
 * Name or number of the ward if applicable
 * @member {String} ward
 */
Address.prototype.ward = undefined;

/**
 * City name
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * State name
 * @member {String} state
 */
Address.prototype.state = undefined;

/**
 * Country name
 * @member {String} country
 */
Address.prototype.country = undefined;

/**
 * Area code. This can be Pincode, ZIP code or any equivalent
 * @member {String} areaCode
 */
Address.prototype.areaCode = undefined;


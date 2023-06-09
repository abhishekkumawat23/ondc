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
 * The Address14 model module.
 * @module model/Address14
 * @version 1.0
 */
export class Address14 {
  /**
   * Constructs a new <code>Address14</code>.
   * @alias module:model/Address14
   * @class
   * @param areaCode {String} 
   * @param building {String} 
   * @param city {String} 
   * @param country {String} 
   * @param door {String} 
   * @param state {String} 
   * @param street {String} 
   */
  constructor(areaCode, building, city, country, door, state, street) {
    this.areaCode = areaCode;
    this.building = building;
    this.city = city;
    this.country = country;
    this.door = door;
    this.state = state;
    this.street = street;
  }

  /**
   * Constructs a <code>Address14</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address14} obj Optional instance to populate.
   * @return {module:model/Address14} The populated <code>Address14</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Address14();
      if (data.hasOwnProperty('areaCode'))
        obj.areaCode = ApiClient.convertToType(data['areaCode'], 'String');
      if (data.hasOwnProperty('building'))
        obj.building = ApiClient.convertToType(data['building'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('door'))
        obj.door = ApiClient.convertToType(data['door'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('street'))
        obj.street = ApiClient.convertToType(data['street'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} areaCode
 */
Address14.prototype.areaCode = undefined;

/**
 * @member {String} building
 */
Address14.prototype.building = undefined;

/**
 * @member {String} city
 */
Address14.prototype.city = undefined;

/**
 * @member {String} country
 */
Address14.prototype.country = undefined;

/**
 * @member {String} door
 */
Address14.prototype.door = undefined;

/**
 * @member {String} state
 */
Address14.prototype.state = undefined;

/**
 * @member {String} street
 */
Address14.prototype.street = undefined;


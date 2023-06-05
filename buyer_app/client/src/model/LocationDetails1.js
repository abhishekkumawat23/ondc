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
import {Address1} from './Address1';
import {City} from './City';
import {Country} from './Country';

/**
 * The LocationDetails1 model module.
 * @module model/LocationDetails1
 * @version 1.0
 */
export class LocationDetails1 {
  /**
   * Constructs a new <code>LocationDetails1</code>.
   * @alias module:model/LocationDetails1
   * @class
   * @param id {String} 
   * @param gps {String} 
   * @param address {module:model/Address1} 
   * @param city {module:model/City} 
   * @param country {module:model/Country} 
   */
  constructor(id, gps, address, city, country) {
    this.id = id;
    this.gps = gps;
    this.address = address;
    this.city = city;
    this.country = country;
  }

  /**
   * Constructs a <code>LocationDetails1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LocationDetails1} obj Optional instance to populate.
   * @return {module:model/LocationDetails1} The populated <code>LocationDetails1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LocationDetails1();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('gps'))
        obj.gps = ApiClient.convertToType(data['gps'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address1.constructFromObject(data['address']);
      if (data.hasOwnProperty('city'))
        obj.city = City.constructFromObject(data['city']);
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
LocationDetails1.prototype.id = undefined;

/**
 * @member {String} gps
 */
LocationDetails1.prototype.gps = undefined;

/**
 * @member {module:model/Address1} address
 */
LocationDetails1.prototype.address = undefined;

/**
 * @member {module:model/City} city
 */
LocationDetails1.prototype.city = undefined;

/**
 * @member {module:model/Country} country
 */
LocationDetails1.prototype.country = undefined;

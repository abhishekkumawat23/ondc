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
import {Address2} from './Address2';
import {City} from './City';
import {Country} from './Country';

/**
 * The ProviderLocation model module.
 * @module model/ProviderLocation
 * @version 1.0
 */
export class ProviderLocation {
  /**
   * Constructs a new <code>ProviderLocation</code>.
   * @alias module:model/ProviderLocation
   * @class
   * @param country {module:model/Country} 
   * @param stationCode {String} 
   * @param address {module:model/Address2} 
   * @param id {String} 
   * @param gps {String} 
   * @param city {module:model/City} 
   */
  constructor(country, stationCode, address, id, gps, city) {
    this.country = country;
    this.stationCode = stationCode;
    this.address = address;
    this.id = id;
    this.gps = gps;
    this.city = city;
  }

  /**
   * Constructs a <code>ProviderLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderLocation} obj Optional instance to populate.
   * @return {module:model/ProviderLocation} The populated <code>ProviderLocation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProviderLocation();
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('station_code'))
        obj.stationCode = ApiClient.convertToType(data['station_code'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address2.constructFromObject(data['address']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('gps'))
        obj.gps = ApiClient.convertToType(data['gps'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = City.constructFromObject(data['city']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Country} country
 */
ProviderLocation.prototype.country = undefined;

/**
 * @member {String} stationCode
 */
ProviderLocation.prototype.stationCode = undefined;

/**
 * @member {module:model/Address2} address
 */
ProviderLocation.prototype.address = undefined;

/**
 * @member {String} id
 */
ProviderLocation.prototype.id = undefined;

/**
 * @member {String} gps
 */
ProviderLocation.prototype.gps = undefined;

/**
 * @member {module:model/City} city
 */
ProviderLocation.prototype.city = undefined;


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
import {Address} from './Address';
import {Circle} from './Circle';
import {City} from './City';
import {Country} from './Country';
import {Gps} from './Gps';
import {Location} from './Location';
import {LocationId} from './LocationId';
import {Rateable} from './Rateable';
import {Time} from './Time';

/**
 * The AllOfProviderLocationsItems model module.
 * @module model/AllOfProviderLocationsItems
 * @version 1.0.0
 */
export class AllOfProviderLocationsItems extends Location {
  /**
   * Constructs a new <code>AllOfProviderLocationsItems</code>.
   * @alias module:model/AllOfProviderLocationsItems
   * @class
   * @extends module:model/Location
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>AllOfProviderLocationsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfProviderLocationsItems} obj Optional instance to populate.
   * @return {module:model/AllOfProviderLocationsItems} The populated <code>AllOfProviderLocationsItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AllOfProviderLocationsItems();
      Location.constructFromObject(data, obj);
      if (data.hasOwnProperty('rateable'))
        obj.rateable = Rateable.constructFromObject(data['rateable']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Rateable} rateable
 */
AllOfProviderLocationsItems.prototype.rateable = undefined;


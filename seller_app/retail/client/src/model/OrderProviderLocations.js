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
import {Locationpropertiesid} from './Locationpropertiesid';

/**
 * The OrderProviderLocations model module.
 * @module model/OrderProviderLocations
 * @version 1.0.13
 */
export class OrderProviderLocations {
  /**
   * Constructs a new <code>OrderProviderLocations</code>.
   * @alias module:model/OrderProviderLocations
   * @class
   * @param id {module:model/Locationpropertiesid} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>OrderProviderLocations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderProviderLocations} obj Optional instance to populate.
   * @return {module:model/OrderProviderLocations} The populated <code>OrderProviderLocations</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderProviderLocations();
      if (data.hasOwnProperty('id'))
        obj.id = Locationpropertiesid.constructFromObject(data['id']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Locationpropertiesid} id
 */
OrderProviderLocations.prototype.id = undefined;


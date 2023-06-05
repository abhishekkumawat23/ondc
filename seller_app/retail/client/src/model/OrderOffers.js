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
import {Offerpropertiesid} from './Offerpropertiesid';

/**
 * The OrderOffers model module.
 * @module model/OrderOffers
 * @version 1.0.13
 */
export class OrderOffers {
  /**
   * Constructs a new <code>OrderOffers</code>.
   * @alias module:model/OrderOffers
   * @class
   * @param id {module:model/Offerpropertiesid} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>OrderOffers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderOffers} obj Optional instance to populate.
   * @return {module:model/OrderOffers} The populated <code>OrderOffers</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderOffers();
      if (data.hasOwnProperty('id'))
        obj.id = Offerpropertiesid.constructFromObject(data['id']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Offerpropertiesid} id
 */
OrderOffers.prototype.id = undefined;


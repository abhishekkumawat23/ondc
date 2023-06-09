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

/**
 * The OrderOndcorglinkedOrders model module.
 * @module model/OrderOndcorglinkedOrders
 * @version 1.0.13
 */
export class OrderOndcorglinkedOrders {
  /**
   * Constructs a new <code>OrderOndcorglinkedOrders</code>.
   * @alias module:model/OrderOndcorglinkedOrders
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderOndcorglinkedOrders</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderOndcorglinkedOrders} obj Optional instance to populate.
   * @return {module:model/OrderOndcorglinkedOrders} The populated <code>OrderOndcorglinkedOrders</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderOndcorglinkedOrders();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
OrderOndcorglinkedOrders.prototype.id = undefined;


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
import {ItemQuantitypropertiesselected} from './ItemQuantitypropertiesselected';
import {Itempropertiesid} from './Itempropertiesid';

/**
 * The OrderItems model module.
 * @module model/OrderItems
 * @version 1.0.13
 */
export class OrderItems {
  /**
   * Constructs a new <code>OrderItems</code>.
   * @alias module:model/OrderItems
   * @class
   * @param id {module:model/Itempropertiesid} 
   */
  constructor(id) {
    this.id = id;
  }

  /**
   * Constructs a <code>OrderItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderItems} obj Optional instance to populate.
   * @return {module:model/OrderItems} The populated <code>OrderItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderItems();
      if (data.hasOwnProperty('id'))
        obj.id = Itempropertiesid.constructFromObject(data['id']);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ItemQuantitypropertiesselected.constructFromObject(data['quantity']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Itempropertiesid} id
 */
OrderItems.prototype.id = undefined;

/**
 * @member {module:model/ItemQuantitypropertiesselected} quantity
 */
OrderItems.prototype.quantity = undefined;


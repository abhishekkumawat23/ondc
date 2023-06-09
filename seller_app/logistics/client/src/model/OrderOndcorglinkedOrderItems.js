/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
import {Categorypropertiesid} from './Categorypropertiesid';
import {Descriptorpropertiesname} from './Descriptorpropertiesname';
import {ItemQuantitypropertiesselected} from './ItemQuantitypropertiesselected';
import {Price} from './Price';

/**
 * The OrderOndcorglinkedOrderItems model module.
 * @module model/OrderOndcorglinkedOrderItems
 * @version 1.0.9
 */
export class OrderOndcorglinkedOrderItems {
  /**
   * Constructs a new <code>OrderOndcorglinkedOrderItems</code>.
   * @alias module:model/OrderOndcorglinkedOrderItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderOndcorglinkedOrderItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderOndcorglinkedOrderItems} obj Optional instance to populate.
   * @return {module:model/OrderOndcorglinkedOrderItems} The populated <code>OrderOndcorglinkedOrderItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderOndcorglinkedOrderItems();
      if (data.hasOwnProperty('category_id'))
        obj.categoryId = Categorypropertiesid.constructFromObject(data['category_id']);
      if (data.hasOwnProperty('name'))
        obj.name = Descriptorpropertiesname.constructFromObject(data['name']);
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ItemQuantitypropertiesselected.constructFromObject(data['quantity']);
      if (data.hasOwnProperty('price'))
        obj.price = Price.constructFromObject(data['price']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Categorypropertiesid} categoryId
 */
OrderOndcorglinkedOrderItems.prototype.categoryId = undefined;

/**
 * @member {module:model/Descriptorpropertiesname} name
 */
OrderOndcorglinkedOrderItems.prototype.name = undefined;

/**
 * @member {module:model/ItemQuantitypropertiesselected} quantity
 */
OrderOndcorglinkedOrderItems.prototype.quantity = undefined;

/**
 * @member {module:model/Price} price
 */
OrderOndcorglinkedOrderItems.prototype.price = undefined;


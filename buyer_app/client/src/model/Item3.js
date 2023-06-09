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
import {Quantity} from './Quantity';

/**
 * The Item3 model module.
 * @module model/Item3
 * @version 1.0
 */
export class Item3 {
  /**
   * Constructs a new <code>Item3</code>.
   * @alias module:model/Item3
   * @class
   * @param quantity {module:model/Quantity} 
   * @param id {String} 
   */
  constructor(quantity, id) {
    this.quantity = quantity;
    this.id = id;
  }

  /**
   * Constructs a <code>Item3</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item3} obj Optional instance to populate.
   * @return {module:model/Item3} The populated <code>Item3</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Item3();
      if (data.hasOwnProperty('quantity'))
        obj.quantity = Quantity.constructFromObject(data['quantity']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/Quantity} quantity
 */
Item3.prototype.quantity = undefined;

/**
 * @member {String} id
 */
Item3.prototype.id = undefined;


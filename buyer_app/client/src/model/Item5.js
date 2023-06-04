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
import {Quantity5} from './Quantity5';

/**
 * The Item5 model module.
 * @module model/Item5
 * @version 1.0
 */
export class Item5 {
  /**
   * Constructs a new <code>Item5</code>.
   * @alias module:model/Item5
   * @class
   * @param id {String} 
   * @param quantity {module:model/Quantity5} 
   */
  constructor(id, quantity) {
    this.id = id;
    this.quantity = quantity;
  }

  /**
   * Constructs a <code>Item5</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item5} obj Optional instance to populate.
   * @return {module:model/Item5} The populated <code>Item5</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Item5();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = Quantity5.constructFromObject(data['quantity']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Item5.prototype.id = undefined;

/**
 * @member {module:model/Quantity5} quantity
 */
Item5.prototype.quantity = undefined;


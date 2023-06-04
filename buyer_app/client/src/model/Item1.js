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
import {Price4} from './Price4';
import {Quantity1} from './Quantity1';

/**
 * The Item1 model module.
 * @module model/Item1
 * @version 1.0
 */
export class Item1 {
  /**
   * Constructs a new <code>Item1</code>.
   * @alias module:model/Item1
   * @class
   * @param ondcorgcancellable {Boolean} 
   * @param ondcorgreturnable {Boolean} 
   * @param quantity {module:model/Quantity1} 
   * @param price {module:model/Price4} 
   * @param ondcorgsellerPickupReturn {Boolean} 
   * @param id {Number} 
   */
  constructor(ondcorgcancellable, ondcorgreturnable, quantity, price, ondcorgsellerPickupReturn, id) {
    this.ondcorgcancellable = ondcorgcancellable;
    this.ondcorgreturnable = ondcorgreturnable;
    this.quantity = quantity;
    this.price = price;
    this.ondcorgsellerPickupReturn = ondcorgsellerPickupReturn;
    this.id = id;
  }

  /**
   * Constructs a <code>Item1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item1} obj Optional instance to populate.
   * @return {module:model/Item1} The populated <code>Item1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Item1();
      if (data.hasOwnProperty('@ondc/org/cancellable'))
        obj.ondcorgcancellable = ApiClient.convertToType(data['@ondc/org/cancellable'], 'Boolean');
      if (data.hasOwnProperty('@ondc/org/returnable'))
        obj.ondcorgreturnable = ApiClient.convertToType(data['@ondc/org/returnable'], 'Boolean');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = Quantity1.constructFromObject(data['quantity']);
      if (data.hasOwnProperty('price'))
        obj.price = Price4.constructFromObject(data['price']);
      if (data.hasOwnProperty('@ondc/org/seller_pickup_return'))
        obj.ondcorgsellerPickupReturn = ApiClient.convertToType(data['@ondc/org/seller_pickup_return'], 'Boolean');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Boolean} ondcorgcancellable
 */
Item1.prototype.ondcorgcancellable = undefined;

/**
 * @member {Boolean} ondcorgreturnable
 */
Item1.prototype.ondcorgreturnable = undefined;

/**
 * @member {module:model/Quantity1} quantity
 */
Item1.prototype.quantity = undefined;

/**
 * @member {module:model/Price4} price
 */
Item1.prototype.price = undefined;

/**
 * @member {Boolean} ondcorgsellerPickupReturn
 */
Item1.prototype.ondcorgsellerPickupReturn = undefined;

/**
 * @member {Number} id
 */
Item1.prototype.id = undefined;


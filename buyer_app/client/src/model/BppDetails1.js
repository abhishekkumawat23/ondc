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

/**
 * The BppDetails1 model module.
 * @module model/BppDetails1
 * @version 1.0
 */
export class BppDetails1 {
  /**
   * Constructs a new <code>BppDetails1</code>.
   * @alias module:model/BppDetails1
   * @class
   * @param name {String} 
   * @param bppId {String} 
   */
  constructor(name, bppId) {
    this.name = name;
    this.bppId = bppId;
  }

  /**
   * Constructs a <code>BppDetails1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BppDetails1} obj Optional instance to populate.
   * @return {module:model/BppDetails1} The populated <code>BppDetails1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BppDetails1();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('bpp_id'))
        obj.bppId = ApiClient.convertToType(data['bpp_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
BppDetails1.prototype.name = undefined;

/**
 * @member {String} bppId
 */
BppDetails1.prototype.bppId = undefined;


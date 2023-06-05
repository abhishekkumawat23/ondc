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
import {Descriptor3} from './Descriptor3';

/**
 * The ProviderDetails1 model module.
 * @module model/ProviderDetails1
 * @version 1.0
 */
export class ProviderDetails1 {
  /**
   * Constructs a new <code>ProviderDetails1</code>.
   * @alias module:model/ProviderDetails1
   * @class
   * @param id {String} 
   * @param descriptor {module:model/Descriptor3} 
   */
  constructor(id, descriptor) {
    this.id = id;
    this.descriptor = descriptor;
  }

  /**
   * Constructs a <code>ProviderDetails1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderDetails1} obj Optional instance to populate.
   * @return {module:model/ProviderDetails1} The populated <code>ProviderDetails1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProviderDetails1();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor3.constructFromObject(data['descriptor']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
ProviderDetails1.prototype.id = undefined;

/**
 * @member {module:model/Descriptor3} descriptor
 */
ProviderDetails1.prototype.descriptor = undefined;

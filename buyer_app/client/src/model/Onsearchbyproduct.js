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
import {Context} from './Context';
import {Message5} from './Message5';

/**
 * The Onsearchbyproduct model module.
 * @module model/Onsearchbyproduct
 * @version 1.0
 */
export class Onsearchbyproduct {
  /**
   * Constructs a new <code>Onsearchbyproduct</code>.
   * @alias module:model/Onsearchbyproduct
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/Message5} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Onsearchbyproduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Onsearchbyproduct} obj Optional instance to populate.
   * @return {module:model/Onsearchbyproduct} The populated <code>Onsearchbyproduct</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Onsearchbyproduct();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = Message5.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
Onsearchbyproduct.prototype.context = undefined;

/**
 * @member {module:model/Message5} message
 */
Onsearchbyproduct.prototype.message = undefined;

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
import {Message6} from './Message6';

/**
 * The Onsearchprovider model module.
 * @module model/Onsearchprovider
 * @version 1.0
 */
export class Onsearchprovider {
  /**
   * Constructs a new <code>Onsearchprovider</code>.
   * @alias module:model/Onsearchprovider
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/Message6} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Onsearchprovider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Onsearchprovider} obj Optional instance to populate.
   * @return {module:model/Onsearchprovider} The populated <code>Onsearchprovider</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Onsearchprovider();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = Message6.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
Onsearchprovider.prototype.context = undefined;

/**
 * @member {module:model/Message6} message
 */
Onsearchprovider.prototype.message = undefined;


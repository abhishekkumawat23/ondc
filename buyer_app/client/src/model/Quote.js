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
import {Message1} from './Message1';

/**
 * The Quote model module.
 * @module model/Quote
 * @version 1.0
 */
export class Quote {
  /**
   * Constructs a new <code>Quote</code>.
   * @alias module:model/Quote
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/Message1} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Quote</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Quote} obj Optional instance to populate.
   * @return {module:model/Quote} The populated <code>Quote</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Quote();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = Message1.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
Quote.prototype.context = undefined;

/**
 * @member {module:model/Message1} message
 */
Quote.prototype.message = undefined;

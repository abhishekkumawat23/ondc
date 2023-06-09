/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';
import {SubscribeContext} from './SubscribeContext';
import {SubscribeMessage} from './SubscribeMessage';

/**
 * The SubscribeBody model module.
 * @module model/SubscribeBody
 * @version 2.0.5
 */
export class SubscribeBody {
  /**
   * Constructs a new <code>SubscribeBody</code>.
   * @alias module:model/SubscribeBody
   * @class
   * @param context {module:model/SubscribeContext} 
   * @param message {module:model/SubscribeMessage} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>SubscribeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscribeBody} obj Optional instance to populate.
   * @return {module:model/SubscribeBody} The populated <code>SubscribeBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SubscribeBody();
      if (data.hasOwnProperty('context'))
        obj.context = SubscribeContext.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = SubscribeMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/SubscribeContext} context
 */
SubscribeBody.prototype.context = undefined;

/**
 * @member {module:model/SubscribeMessage} message
 */
SubscribeBody.prototype.message = undefined;


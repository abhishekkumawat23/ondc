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
import {Context10} from './Context10';
import {Message13} from './Message13';

/**
 * The Confirmorderrequest model module.
 * @module model/Confirmorderrequest
 * @version 1.0
 */
export class Confirmorderrequest {
  /**
   * Constructs a new <code>Confirmorderrequest</code>.
   * @alias module:model/Confirmorderrequest
   * @class
   * @param context {module:model/Context10} 
   * @param message {module:model/Message13} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Confirmorderrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Confirmorderrequest} obj Optional instance to populate.
   * @return {module:model/Confirmorderrequest} The populated <code>Confirmorderrequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Confirmorderrequest();
      if (data.hasOwnProperty('context'))
        obj.context = Context10.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = Message13.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context10} context
 */
Confirmorderrequest.prototype.context = undefined;

/**
 * @member {module:model/Message13} message
 */
Confirmorderrequest.prototype.message = undefined;


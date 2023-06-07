/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
import {SelectMessage} from './SelectMessage';

/**
 * The SelectBody model module.
 * @module model/SelectBody
 * @version 1.0.0
 */
export class SelectBody {
  /**
   * Constructs a new <code>SelectBody</code>.
   * @alias module:model/SelectBody
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/SelectMessage} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>SelectBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SelectBody} obj Optional instance to populate.
   * @return {module:model/SelectBody} The populated <code>SelectBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SelectBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = SelectMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
SelectBody.prototype.context = undefined;

/**
 * @member {module:model/SelectMessage} message
 */
SelectBody.prototype.message = undefined;

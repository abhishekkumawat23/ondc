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
import {Error} from './Error';
import {SelectMessage} from './SelectMessage';

/**
 * The OnStatusBody model module.
 * @module model/OnStatusBody
 * @version 1.0.0
 */
export class OnStatusBody {
  /**
   * Constructs a new <code>OnStatusBody</code>.
   * @alias module:model/OnStatusBody
   * @class
   * @param context {module:model/Context} 
   */
  constructor(context) {
    this.context = context;
  }

  /**
   * Constructs a <code>OnStatusBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnStatusBody} obj Optional instance to populate.
   * @return {module:model/OnStatusBody} The populated <code>OnStatusBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnStatusBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = SelectMessage.constructFromObject(data['message']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
OnStatusBody.prototype.context = undefined;

/**
 * @member {module:model/SelectMessage} message
 */
OnStatusBody.prototype.message = undefined;

/**
 * @member {module:model/Error} error
 */
OnStatusBody.prototype.error = undefined;

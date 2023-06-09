/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Context} from './Context';
import {Error} from './Error';
import {OnTrackMessage} from './OnTrackMessage';

/**
 * The OnTrackBody model module.
 * @module model/OnTrackBody
 * @version 1.0.13
 */
export class OnTrackBody {
  /**
   * Constructs a new <code>OnTrackBody</code>.
   * @alias module:model/OnTrackBody
   * @class
   * @param context {module:model/Context} 
   */
  constructor(context) {
    this.context = context;
  }

  /**
   * Constructs a <code>OnTrackBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnTrackBody} obj Optional instance to populate.
   * @return {module:model/OnTrackBody} The populated <code>OnTrackBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnTrackBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = OnTrackMessage.constructFromObject(data['message']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
OnTrackBody.prototype.context = undefined;

/**
 * @member {module:model/OnTrackMessage} message
 */
OnTrackBody.prototype.message = undefined;

/**
 * @member {module:model/Error} error
 */
OnTrackBody.prototype.error = undefined;


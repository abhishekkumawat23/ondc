/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
import {TrackMessage} from './TrackMessage';

/**
 * The TrackBody model module.
 * @module model/TrackBody
 * @version 1.0.13
 */
export class TrackBody {
  /**
   * Constructs a new <code>TrackBody</code>.
   * @alias module:model/TrackBody
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/TrackMessage} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>TrackBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackBody} obj Optional instance to populate.
   * @return {module:model/TrackBody} The populated <code>TrackBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TrackBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = TrackMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
TrackBody.prototype.context = undefined;

/**
 * @member {module:model/TrackMessage} message
 */
TrackBody.prototype.message = undefined;


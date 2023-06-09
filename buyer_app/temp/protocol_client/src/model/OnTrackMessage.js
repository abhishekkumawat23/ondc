/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
import {Tracking} from './Tracking';

/**
 * The OnTrackMessage model module.
 * @module model/OnTrackMessage
 * @version 1.0.29
 */
export class OnTrackMessage {
  /**
   * Constructs a new <code>OnTrackMessage</code>.
   * @alias module:model/OnTrackMessage
   * @class
   * @param tracking {module:model/Tracking} 
   */
  constructor(tracking) {
    this.tracking = tracking;
  }

  /**
   * Constructs a <code>OnTrackMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnTrackMessage} obj Optional instance to populate.
   * @return {module:model/OnTrackMessage} The populated <code>OnTrackMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnTrackMessage();
      if (data.hasOwnProperty('tracking'))
        obj.tracking = Tracking.constructFromObject(data['tracking']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Tracking} tracking
 */
OnTrackMessage.prototype.tracking = undefined;


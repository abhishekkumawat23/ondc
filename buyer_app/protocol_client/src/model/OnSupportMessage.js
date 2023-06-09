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

/**
 * The OnSupportMessage model module.
 * @module model/OnSupportMessage
 * @version 1.0.13
 */
export class OnSupportMessage {
  /**
   * Constructs a new <code>OnSupportMessage</code>.
   * @alias module:model/OnSupportMessage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OnSupportMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnSupportMessage} obj Optional instance to populate.
   * @return {module:model/OnSupportMessage} The populated <code>OnSupportMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnSupportMessage();
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('uri'))
        obj.uri = ApiClient.convertToType(data['uri'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} phone
 */
OnSupportMessage.prototype.phone = undefined;

/**
 * @member {String} email
 */
OnSupportMessage.prototype.email = undefined;

/**
 * @member {String} uri
 */
OnSupportMessage.prototype.uri = undefined;


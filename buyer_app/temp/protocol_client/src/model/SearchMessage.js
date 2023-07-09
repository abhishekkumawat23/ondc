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
import {Intent} from './Intent';

/**
 * The SearchMessage model module.
 * @module model/SearchMessage
 * @version 1.0.29
 */
export class SearchMessage {
  /**
   * Constructs a new <code>SearchMessage</code>.
   * @alias module:model/SearchMessage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>SearchMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SearchMessage} obj Optional instance to populate.
   * @return {module:model/SearchMessage} The populated <code>SearchMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SearchMessage();
      if (data.hasOwnProperty('intent'))
        obj.intent = Intent.constructFromObject(data['intent']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Intent} intent
 */
SearchMessage.prototype.intent = undefined;


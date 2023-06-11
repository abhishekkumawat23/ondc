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
import {Error} from './Error';
import {InlineResponse200Message} from './InlineResponse200Message';

/**
 * The InlineResponse2001 model module.
 * @module model/InlineResponse2001
 * @version 1.0.13
 */
export class InlineResponse2001 {
  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2001();
      if (data.hasOwnProperty('message'))
        obj.message = InlineResponse200Message.constructFromObject(data['message']);
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/InlineResponse200Message} message
 */
InlineResponse2001.prototype.message = undefined;

/**
 * @member {module:model/Error} error
 */
InlineResponse2001.prototype.error = undefined;


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
import {GetFeedbackFormMessage} from './GetFeedbackFormMessage';

/**
 * The GetFeedbackFormBody model module.
 * @module model/GetFeedbackFormBody
 * @version 1.0.13
 */
export class GetFeedbackFormBody {
  /**
   * Constructs a new <code>GetFeedbackFormBody</code>.
   * @alias module:model/GetFeedbackFormBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetFeedbackFormBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFeedbackFormBody} obj Optional instance to populate.
   * @return {module:model/GetFeedbackFormBody} The populated <code>GetFeedbackFormBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetFeedbackFormBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = GetFeedbackFormMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
GetFeedbackFormBody.prototype.context = undefined;

/**
 * @member {module:model/GetFeedbackFormMessage} message
 */
GetFeedbackFormBody.prototype.message = undefined;

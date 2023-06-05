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

/**
 * The FeedbackUrlParams model module.
 * @module model/FeedbackUrlParams
 * @version 1.0.13
 */
export class FeedbackUrlParams {
  /**
   * Constructs a new <code>FeedbackUrlParams</code>.
   * @alias module:model/FeedbackUrlParams
   * @class
   * @param feedbackId {String} This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests
   */
  constructor(feedbackId) {
    this.feedbackId = feedbackId;
  }

  /**
   * Constructs a <code>FeedbackUrlParams</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeedbackUrlParams} obj Optional instance to populate.
   * @return {module:model/FeedbackUrlParams} The populated <code>FeedbackUrlParams</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FeedbackUrlParams();
      if (data.hasOwnProperty('feedback_id'))
        obj.feedbackId = ApiClient.convertToType(data['feedback_id'], 'String');
    }
    return obj;
  }
}

/**
 * This value will be placed in the the $feedback_id url param in case of http/get and in the requestBody http/post requests
 * @member {String} feedbackId
 */
FeedbackUrlParams.prototype.feedbackId = undefined;


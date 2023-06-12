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
import {FeedbackForm} from './FeedbackForm';
import {FeedbackUrl} from './FeedbackUrl';

/**
 * The Feedback model module.
 * @module model/Feedback
 * @version 1.0.13
 */
export class Feedback {
  /**
   * Constructs a new <code>Feedback</code>.
   * Feedback for a service
   * @alias module:model/Feedback
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Feedback</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Feedback} obj Optional instance to populate.
   * @return {module:model/Feedback} The populated <code>Feedback</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Feedback();
      if (data.hasOwnProperty('feedback_form'))
        obj.feedbackForm = FeedbackForm.constructFromObject(data['feedback_form']);
      if (data.hasOwnProperty('feedback_url'))
        obj.feedbackUrl = FeedbackUrl.constructFromObject(data['feedback_url']);
    }
    return obj;
  }
}

/**
 * @member {module:model/FeedbackForm} feedbackForm
 */
Feedback.prototype.feedbackForm = undefined;

/**
 * @member {module:model/FeedbackUrl} feedbackUrl
 */
Feedback.prototype.feedbackUrl = undefined;


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
import {RatingCategory} from './RatingCategory';
import {RatingValue} from './RatingValue';

/**
 * The GetFeedbackFormMessage model module.
 * @module model/GetFeedbackFormMessage
 * @version 1.0.13
 */
export class GetFeedbackFormMessage {
  /**
   * Constructs a new <code>GetFeedbackFormMessage</code>.
   * @alias module:model/GetFeedbackFormMessage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetFeedbackFormMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFeedbackFormMessage} obj Optional instance to populate.
   * @return {module:model/GetFeedbackFormMessage} The populated <code>GetFeedbackFormMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetFeedbackFormMessage();
      if (data.hasOwnProperty('rating_value'))
        obj.ratingValue = RatingValue.constructFromObject(data['rating_value']);
      if (data.hasOwnProperty('rating_category'))
        obj.ratingCategory = RatingCategory.constructFromObject(data['rating_category']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RatingValue} ratingValue
 */
GetFeedbackFormMessage.prototype.ratingValue = undefined;

/**
 * @member {module:model/RatingCategory} ratingCategory
 */
GetFeedbackFormMessage.prototype.ratingCategory = undefined;


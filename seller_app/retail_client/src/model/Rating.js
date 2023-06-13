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
import {FeedbackUrlFeedbackId} from './FeedbackUrlFeedbackId';
import {RatingCategory} from './RatingCategory';
import {RatingValue} from './RatingValue';

/**
 * The Rating model module.
 * @module model/Rating
 * @version 1.0.13
 */
export class Rating {
  /**
   * Constructs a new <code>Rating</code>.
   * Describes the rating of a person or an object.
   * @alias module:model/Rating
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Rating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rating} obj Optional instance to populate.
   * @return {module:model/Rating} The populated <code>Rating</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Rating();
      if (data.hasOwnProperty('rating_category'))
        obj.ratingCategory = RatingCategory.constructFromObject(data['rating_category']);
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = RatingValue.constructFromObject(data['value']);
      if (data.hasOwnProperty('feedback_form'))
        obj.feedbackForm = FeedbackForm.constructFromObject(data['feedback_form']);
      if (data.hasOwnProperty('feedback_id'))
        obj.feedbackId = FeedbackUrlFeedbackId.constructFromObject(data['feedback_id']);
    }
    return obj;
  }
}

/**
 * @member {module:model/RatingCategory} ratingCategory
 */
Rating.prototype.ratingCategory = undefined;

/**
 * Id of the object being rated
 * @member {String} id
 */
Rating.prototype.id = undefined;

/**
 * @member {module:model/RatingValue} value
 */
Rating.prototype.value = undefined;

/**
 * @member {module:model/FeedbackForm} feedbackForm
 */
Rating.prototype.feedbackForm = undefined;

/**
 * @member {module:model/FeedbackUrlFeedbackId} feedbackId
 */
Rating.prototype.feedbackId = undefined;

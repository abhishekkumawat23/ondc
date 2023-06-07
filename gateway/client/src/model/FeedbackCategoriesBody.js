/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
import {RatingpropertiesratingCategory} from './RatingpropertiesratingCategory';

/**
 * The FeedbackCategoriesBody model module.
 * @module model/FeedbackCategoriesBody
 * @version 1.0.0
 */
export class FeedbackCategoriesBody {
  /**
   * Constructs a new <code>FeedbackCategoriesBody</code>.
   * @alias module:model/FeedbackCategoriesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FeedbackCategoriesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeedbackCategoriesBody} obj Optional instance to populate.
   * @return {module:model/FeedbackCategoriesBody} The populated <code>FeedbackCategoriesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FeedbackCategoriesBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('feedback_categories'))
        obj.feedbackCategories = ApiClient.convertToType(data['feedback_categories'], [RatingpropertiesratingCategory]);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
FeedbackCategoriesBody.prototype.context = undefined;

/**
 * @member {Array.<module:model/RatingpropertiesratingCategory>} feedbackCategories
 */
FeedbackCategoriesBody.prototype.feedbackCategories = undefined;

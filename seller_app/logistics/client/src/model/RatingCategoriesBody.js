/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
 * The RatingCategoriesBody model module.
 * @module model/RatingCategoriesBody
 * @version 1.0.9
 */
export class RatingCategoriesBody {
  /**
   * Constructs a new <code>RatingCategoriesBody</code>.
   * @alias module:model/RatingCategoriesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RatingCategoriesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingCategoriesBody} obj Optional instance to populate.
   * @return {module:model/RatingCategoriesBody} The populated <code>RatingCategoriesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RatingCategoriesBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('rating_categories'))
        obj.ratingCategories = ApiClient.convertToType(data['rating_categories'], [RatingpropertiesratingCategory]);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
RatingCategoriesBody.prototype.context = undefined;

/**
 * @member {Array.<module:model/RatingpropertiesratingCategory>} ratingCategories
 */
RatingCategoriesBody.prototype.ratingCategories = undefined;


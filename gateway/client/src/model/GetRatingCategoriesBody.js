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

/**
 * The GetRatingCategoriesBody model module.
 * @module model/GetRatingCategoriesBody
 * @version 1.0.0
 */
export class GetRatingCategoriesBody {
  /**
   * Constructs a new <code>GetRatingCategoriesBody</code>.
   * @alias module:model/GetRatingCategoriesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetRatingCategoriesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetRatingCategoriesBody} obj Optional instance to populate.
   * @return {module:model/GetRatingCategoriesBody} The populated <code>GetRatingCategoriesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetRatingCategoriesBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
GetRatingCategoriesBody.prototype.context = undefined;


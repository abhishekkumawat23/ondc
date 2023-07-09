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
import {Context} from './Context';

/**
 * The GetFeedbackCategoriesBody model module.
 * @module model/GetFeedbackCategoriesBody
 * @version 1.0.29
 */
export class GetFeedbackCategoriesBody {
  /**
   * Constructs a new <code>GetFeedbackCategoriesBody</code>.
   * @alias module:model/GetFeedbackCategoriesBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>GetFeedbackCategoriesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetFeedbackCategoriesBody} obj Optional instance to populate.
   * @return {module:model/GetFeedbackCategoriesBody} The populated <code>GetFeedbackCategoriesBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new GetFeedbackCategoriesBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
GetFeedbackCategoriesBody.prototype.context = undefined;

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

/**
 * The RatingValue model module.
 * @module model/RatingValue
 * @version 1.0.13
 */
export class RatingValue {
  /**
   * Constructs a new <code>RatingValue</code>.
   * Rating value given to the object (1 - Poor; 2 - Needs improvement; 3 - Satisfactory; 4 - Good; 5 - Excellent)
   * @alias module:model/RatingValue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RatingValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingValue} obj Optional instance to populate.
   * @return {module:model/RatingValue} The populated <code>RatingValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RatingValue();
    }
    return obj;
  }
}

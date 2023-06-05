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
import {Rating} from './Rating';

/**
 * The RatingBody model module.
 * @module model/RatingBody
 * @version 1.0.0
 */
export class RatingBody {
  /**
   * Constructs a new <code>RatingBody</code>.
   * @alias module:model/RatingBody
   * @class
   * @param context {module:model/Context} 
   * @param message {module:model/Rating} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>RatingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingBody} obj Optional instance to populate.
   * @return {module:model/RatingBody} The populated <code>RatingBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RatingBody();
      if (data.hasOwnProperty('context'))
        obj.context = Context.constructFromObject(data['context']);
      if (data.hasOwnProperty('message'))
        obj.message = Rating.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Context} context
 */
RatingBody.prototype.context = undefined;

/**
 * @member {module:model/Rating} message
 */
RatingBody.prototype.message = undefined;


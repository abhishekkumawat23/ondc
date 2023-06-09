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

/**
 * The RatingAck model module.
 * @module model/RatingAck
 * @version 1.0.29
 */
export class RatingAck {
  /**
   * Constructs a new <code>RatingAck</code>.
   * @alias module:model/RatingAck
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RatingAck</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingAck} obj Optional instance to populate.
   * @return {module:model/RatingAck} The populated <code>RatingAck</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RatingAck();
      if (data.hasOwnProperty('feedback_ack'))
        obj.feedbackAck = ApiClient.convertToType(data['feedback_ack'], 'Boolean');
      if (data.hasOwnProperty('rating_ack'))
        obj.ratingAck = ApiClient.convertToType(data['rating_ack'], 'Boolean');
    }
    return obj;
  }
}

/**
 * If feedback has been recorded or not
 * @member {Boolean} feedbackAck
 */
RatingAck.prototype.feedbackAck = undefined;

/**
 * If rating has been recorded or not
 * @member {Boolean} ratingAck
 */
RatingAck.prototype.ratingAck = undefined;


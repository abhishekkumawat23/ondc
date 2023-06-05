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

/**
 * The OperatorExperience model module.
 * @module model/OperatorExperience
 * @version 1.0.0
 */
export class OperatorExperience {
  /**
   * Constructs a new <code>OperatorExperience</code>.
   * @alias module:model/OperatorExperience
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OperatorExperience</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OperatorExperience} obj Optional instance to populate.
   * @return {module:model/OperatorExperience} The populated <code>OperatorExperience</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OperatorExperience();
      if (data.hasOwnProperty('label'))
        obj.label = ApiClient.convertToType(data['label'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} label
 */
OperatorExperience.prototype.label = undefined;

/**
 * @member {String} value
 */
OperatorExperience.prototype.value = undefined;

/**
 * @member {String} unit
 */
OperatorExperience.prototype.unit = undefined;


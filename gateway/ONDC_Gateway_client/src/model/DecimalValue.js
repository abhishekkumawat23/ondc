/*
 * ONDC Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The DecimalValue model module.
 * @module model/DecimalValue
 * @version 1.0.0
 */
export class DecimalValue {
  /**
   * Constructs a new <code>DecimalValue</code>.
   * Describes a decimal value
   * @alias module:model/DecimalValue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DecimalValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DecimalValue} obj Optional instance to populate.
   * @return {module:model/DecimalValue} The populated <code>DecimalValue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DecimalValue();
    }
    return obj;
  }
}
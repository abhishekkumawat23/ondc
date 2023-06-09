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
 * The Name model module.
 * @module model/Name
 * @version 1.0.0
 */
export class Name {
  /**
   * Constructs a new <code>Name</code>.
   * Describes the name of a person in format: ./{given_name}/{honorific_prefix}/{first_name}/{middle_name}/{last_name}/{honorific_suffix}
   * @alias module:model/Name
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Name</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Name} obj Optional instance to populate.
   * @return {module:model/Name} The populated <code>Name</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Name();
    }
    return obj;
  }
}

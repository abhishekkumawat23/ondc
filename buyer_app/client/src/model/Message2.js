/*
 * sandbox-client-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
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
import {Criteria1} from './Criteria1';

/**
 * The Message2 model module.
 * @module model/Message2
 * @version 1.0
 */
export class Message2 {
  /**
   * Constructs a new <code>Message2</code>.
   * @alias module:model/Message2
   * @class
   * @param criteria {module:model/Criteria1} 
   */
  constructor(criteria) {
    this.criteria = criteria;
  }

  /**
   * Constructs a <code>Message2</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message2} obj Optional instance to populate.
   * @return {module:model/Message2} The populated <code>Message2</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message2();
      if (data.hasOwnProperty('criteria'))
        obj.criteria = Criteria1.constructFromObject(data['criteria']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Criteria1} criteria
 */
Message2.prototype.criteria = undefined;


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

/**
 * The Message20 model module.
 * @module model/Message20
 * @version 1.0
 */
export class Message20 {
  /**
   * Constructs a new <code>Message20</code>.
   * @alias module:model/Message20
   * @class
   * @param refId {String} 
   */
  constructor(refId) {
    this.refId = refId;
  }

  /**
   * Constructs a <code>Message20</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message20} obj Optional instance to populate.
   * @return {module:model/Message20} The populated <code>Message20</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message20();
      if (data.hasOwnProperty('ref_id'))
        obj.refId = ApiClient.convertToType(data['ref_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} refId
 */
Message20.prototype.refId = undefined;


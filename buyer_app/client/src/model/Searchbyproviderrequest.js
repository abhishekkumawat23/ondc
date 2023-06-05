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
import {Message3} from './Message3';

/**
 * The Searchbyproviderrequest model module.
 * @module model/Searchbyproviderrequest
 * @version 1.0
 */
export class Searchbyproviderrequest {
  /**
   * Constructs a new <code>Searchbyproviderrequest</code>.
   * @alias module:model/Searchbyproviderrequest
   * @class
   * @param context {Object} 
   * @param message {module:model/Message3} 
   */
  constructor(context, message) {
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Searchbyproviderrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Searchbyproviderrequest} obj Optional instance to populate.
   * @return {module:model/Searchbyproviderrequest} The populated <code>Searchbyproviderrequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Searchbyproviderrequest();
      if (data.hasOwnProperty('context'))
        obj.context = ApiClient.convertToType(data['context'], Object);
      if (data.hasOwnProperty('message'))
        obj.message = Message3.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * @member {Object} context
 */
Searchbyproviderrequest.prototype.context = undefined;

/**
 * @member {module:model/Message3} message
 */
Searchbyproviderrequest.prototype.message = undefined;

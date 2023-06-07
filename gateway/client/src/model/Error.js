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
 * The Error model module.
 * @module model/Error
 * @version 1.0.0
 */
export class Error {
  /**
   * Constructs a new <code>Error</code>.
   * Describes an error object
   * @alias module:model/Error
   * @class
   * @param type {module:model/Error.TypeEnum} 
   * @param code {String} ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo
   */
  constructor(type, code) {
    this.type = type;
    this.code = code;
  }

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Error} obj Optional instance to populate.
   * @return {module:model/Error} The populated <code>Error</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Error();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('path'))
        obj.path = ApiClient.convertToType(data['path'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Error.TypeEnum = {
  /**
   * value: "CONTEXT-ERROR"
   * @const
   */
  CONTEXT_ERROR: "CONTEXT-ERROR",

  /**
   * value: "CORE-ERROR"
   * @const
   */
  CORE_ERROR: "CORE-ERROR",

  /**
   * value: "DOMAIN-ERROR"
   * @const
   */
  DOMAIN_ERROR: "DOMAIN-ERROR",

  /**
   * value: "POLICY-ERROR"
   * @const
   */
  POLICY_ERROR: "POLICY-ERROR",

  /**
   * value: "JSON-SCHEMA-ERROR"
   * @const
   */
  JSON_SCHEMA_ERROR: "JSON-SCHEMA-ERROR"
};
/**
 * @member {module:model/Error.TypeEnum} type
 */
Error.prototype.type = undefined;

/**
 * ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo
 * @member {String} code
 */
Error.prototype.code = undefined;

/**
 * Path to json schema generating the error. Used only during json schema validation errors
 * @member {String} path
 */
Error.prototype.path = undefined;

/**
 * Human readable message describing the error
 * @member {String} message
 */
Error.prototype.message = undefined;

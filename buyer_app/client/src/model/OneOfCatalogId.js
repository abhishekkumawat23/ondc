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
 * The OneOfCatalogId model module.
 * @module model/OneOfCatalogId
 * @version 1.0
 */
export class OneOfCatalogId {
  /**
   * Constructs a new <code>OneOfCatalogId</code>.
   * @alias module:model/OneOfCatalogId
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfCatalogId</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfCatalogId} obj Optional instance to populate.
   * @return {module:model/OneOfCatalogId} The populated <code>OneOfCatalogId</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfCatalogId();
    }
    return obj;
  }
}

/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
 * The Page model module.
 * @module model/Page
 * @version 1.0.13
 */
export class Page {
  /**
   * Constructs a new <code>Page</code>.
   * Describes a page in a search result
   * @alias module:model/Page
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Page} obj Optional instance to populate.
   * @return {module:model/Page} The populated <code>Page</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Page();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('next_id'))
        obj.nextId = ApiClient.convertToType(data['next_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Page.prototype.id = undefined;

/**
 * @member {String} nextId
 */
Page.prototype.nextId = undefined;

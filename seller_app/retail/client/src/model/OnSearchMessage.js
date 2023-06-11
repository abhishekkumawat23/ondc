/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Catalog} from './Catalog';

/**
 * The OnSearchMessage model module.
 * @module model/OnSearchMessage
 * @version 1.0.13
 */
export class OnSearchMessage {
  /**
   * Constructs a new <code>OnSearchMessage</code>.
   * @alias module:model/OnSearchMessage
   * @class
   * @param catalog {module:model/Catalog} 
   */
  constructor(catalog) {
    this.catalog = catalog;
  }

  /**
   * Constructs a <code>OnSearchMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnSearchMessage} obj Optional instance to populate.
   * @return {module:model/OnSearchMessage} The populated <code>OnSearchMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnSearchMessage();
      if (data.hasOwnProperty('catalog'))
        obj.catalog = Catalog.constructFromObject(data['catalog']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Catalog} catalog
 */
OnSearchMessage.prototype.catalog = undefined;


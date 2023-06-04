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
import {Item1} from './Item1';
import {Provider2} from './Provider2';
import {ProviderLocation} from './ProviderLocation';
import {Quote2} from './Quote2';

/**
 * The Quote1 model module.
 * @module model/Quote1
 * @version 1.0
 */
export class Quote1 {
  /**
   * Constructs a new <code>Quote1</code>.
   * @alias module:model/Quote1
   * @class
   * @param quote {module:model/Quote2} 
   * @param provider {module:model/Provider2} 
   * @param providerLocation {module:model/ProviderLocation} 
   * @param items {Array.<module:model/Item1>} 
   */
  constructor(quote, provider, providerLocation, items) {
    this.quote = quote;
    this.provider = provider;
    this.providerLocation = providerLocation;
    this.items = items;
  }

  /**
   * Constructs a <code>Quote1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Quote1} obj Optional instance to populate.
   * @return {module:model/Quote1} The populated <code>Quote1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Quote1();
      if (data.hasOwnProperty('quote'))
        obj.quote = Quote2.constructFromObject(data['quote']);
      if (data.hasOwnProperty('provider'))
        obj.provider = Provider2.constructFromObject(data['provider']);
      if (data.hasOwnProperty('provider_location'))
        obj.providerLocation = ProviderLocation.constructFromObject(data['provider_location']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item1]);
    }
    return obj;
  }
}

/**
 * @member {module:model/Quote2} quote
 */
Quote1.prototype.quote = undefined;

/**
 * @member {module:model/Provider2} provider
 */
Quote1.prototype.provider = undefined;

/**
 * @member {module:model/ProviderLocation} providerLocation
 */
Quote1.prototype.providerLocation = undefined;

/**
 * @member {Array.<module:model/Item1>} items
 */
Quote1.prototype.items = undefined;


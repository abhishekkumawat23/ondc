/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
import {Category} from './Category';
import {Descriptor} from './Descriptor';
import {Fulfillment} from './Fulfillment';
import {Item} from './Item';
import {Offer} from './Offer';
import {Payment} from './Payment';
import {Rateable} from './Rateable';
import {Ratingpropertiesvalue} from './Ratingpropertiesvalue';
import {Tags} from './Tags';
import {Time} from './Time';

/**
 * The Provider model module.
 * @module model/Provider
 * @version 1.0.29
 */
export class Provider {
  /**
   * Constructs a new <code>Provider</code>.
   * Describes a service provider. This can be a restaurant, a hospital, a Store etc
   * @alias module:model/Provider
   * @class
   * @param id {String} Id of the provider
   * @param descriptor {module:model/Descriptor} 
   * @param ondcorgfssaiLicenseNo {String} FSSAI license no. Mandatory for category_id \"F&B\"
   * @param ttl {String} Validity of catalog in ISO8601 durations format after which it has to be refreshed e.g. 'P7D' indicates validity of 7 days; value of 0 indicates catalog is not cacheable
   */
  constructor(id, descriptor, ondcorgfssaiLicenseNo, ttl) {
    this.id = id;
    this.descriptor = descriptor;
    this.ondcorgfssaiLicenseNo = ondcorgfssaiLicenseNo;
    this.ttl = ttl;
  }

  /**
   * Constructs a <code>Provider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Provider} obj Optional instance to populate.
   * @return {module:model/Provider} The populated <code>Provider</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Provider();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('category_id'))
        obj.categoryId = ApiClient.convertToType(data['category_id'], 'String');
      if (data.hasOwnProperty('@ondc/org/fssai_license_no'))
        obj.ondcorgfssaiLicenseNo = ApiClient.convertToType(data['@ondc/org/fssai_license_no'], 'String');
      if (data.hasOwnProperty('rating'))
        obj.rating = Ratingpropertiesvalue.constructFromObject(data['rating']);
      if (data.hasOwnProperty('time'))
        obj.time = Time.constructFromObject(data['time']);
      if (data.hasOwnProperty('categories'))
        obj.categories = ApiClient.convertToType(data['categories'], [Category]);
      if (data.hasOwnProperty('fulfillments'))
        obj.fulfillments = ApiClient.convertToType(data['fulfillments'], [Fulfillment]);
      if (data.hasOwnProperty('payments'))
        obj.payments = ApiClient.convertToType(data['payments'], [Payment]);
      if (data.hasOwnProperty('locations'))
        obj.locations = ApiClient.convertToType(data['locations'], [AllOfProviderLocationsItems]);
      if (data.hasOwnProperty('offers'))
        obj.offers = ApiClient.convertToType(data['offers'], [Offer]);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [Item]);
      if (data.hasOwnProperty('ttl'))
        obj.ttl = ApiClient.convertToType(data['ttl'], 'String');
      if (data.hasOwnProperty('exp'))
        obj.exp = ApiClient.convertToType(data['exp'], 'Date');
      if (data.hasOwnProperty('rateable'))
        obj.rateable = Rateable.constructFromObject(data['rateable']);
      if (data.hasOwnProperty('tags'))
        obj.tags = Tags.constructFromObject(data['tags']);
    }
    return obj;
  }
}

/**
 * Id of the provider
 * @member {String} id
 */
Provider.prototype.id = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Provider.prototype.descriptor = undefined;

/**
 * Category Id of the provider
 * @member {String} categoryId
 */
Provider.prototype.categoryId = undefined;

/**
 * FSSAI license no. Mandatory for category_id \"F&B\"
 * @member {String} ondcorgfssaiLicenseNo
 */
Provider.prototype.ondcorgfssaiLicenseNo = undefined;

/**
 * @member {module:model/Ratingpropertiesvalue} rating
 */
Provider.prototype.rating = undefined;

/**
 * @member {module:model/Time} time
 */
Provider.prototype.time = undefined;

/**
 * @member {Array.<module:model/Category>} categories
 */
Provider.prototype.categories = undefined;

/**
 * @member {Array.<module:model/Fulfillment>} fulfillments
 */
Provider.prototype.fulfillments = undefined;

/**
 * @member {Array.<module:model/Payment>} payments
 */
Provider.prototype.payments = undefined;

/**
 * @member {Array.<Object>} locations
 */
Provider.prototype.locations = undefined;

/**
 * @member {Array.<module:model/Offer>} offers
 */
Provider.prototype.offers = undefined;

/**
 * @member {Array.<module:model/Item>} items
 */
Provider.prototype.items = undefined;

/**
 * Validity of catalog in ISO8601 durations format after which it has to be refreshed e.g. 'P7D' indicates validity of 7 days; value of 0 indicates catalog is not cacheable
 * @member {String} ttl
 */
Provider.prototype.ttl = undefined;

/**
 * Time after which catalog has to be refreshed
 * @member {Date} exp
 */
Provider.prototype.exp = undefined;

/**
 * @member {module:model/Rateable} rateable
 */
Provider.prototype.rateable = undefined;

/**
 * @member {module:model/Tags} tags
 */
Provider.prototype.tags = undefined;


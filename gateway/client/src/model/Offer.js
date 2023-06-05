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
import {Categorypropertiesid} from './Categorypropertiesid';
import {Descriptor} from './Descriptor';
import {Itempropertiesid} from './Itempropertiesid';
import {Locationpropertiesid} from './Locationpropertiesid';
import {Time} from './Time';

/**
 * The Offer model module.
 * @module model/Offer
 * @version 1.0.0
 */
export class Offer {
  /**
   * Constructs a new <code>Offer</code>.
   * Describes an offer
   * @alias module:model/Offer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offer} obj Optional instance to populate.
   * @return {module:model/Offer} The populated <code>Offer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Offer();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('location_ids'))
        obj.locationIds = ApiClient.convertToType(data['location_ids'], [Locationpropertiesid]);
      if (data.hasOwnProperty('category_ids'))
        obj.categoryIds = ApiClient.convertToType(data['category_ids'], [Categorypropertiesid]);
      if (data.hasOwnProperty('item_ids'))
        obj.itemIds = ApiClient.convertToType(data['item_ids'], [Itempropertiesid]);
      if (data.hasOwnProperty('time'))
        obj.time = Time.constructFromObject(data['time']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Offer.prototype.id = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Offer.prototype.descriptor = undefined;

/**
 * @member {Array.<module:model/Locationpropertiesid>} locationIds
 */
Offer.prototype.locationIds = undefined;

/**
 * @member {Array.<module:model/Categorypropertiesid>} categoryIds
 */
Offer.prototype.categoryIds = undefined;

/**
 * @member {Array.<module:model/Itempropertiesid>} itemIds
 */
Offer.prototype.itemIds = undefined;

/**
 * @member {module:model/Time} time
 */
Offer.prototype.time = undefined;


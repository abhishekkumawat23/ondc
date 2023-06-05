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
import {AddOn} from './AddOn';
import {Location} from './Location';
import {Offer} from './Offer';
import {Provider} from './Provider';
import {Quotation} from './Quotation';

/**
 * The OnSelectMessageOrder model module.
 * @module model/OnSelectMessageOrder
 * @version 1.0.0
 */
export class OnSelectMessageOrder {
  /**
   * Constructs a new <code>OnSelectMessageOrder</code>.
   * @alias module:model/OnSelectMessageOrder
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OnSelectMessageOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnSelectMessageOrder} obj Optional instance to populate.
   * @return {module:model/OnSelectMessageOrder} The populated <code>OnSelectMessageOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnSelectMessageOrder();
      if (data.hasOwnProperty('provider'))
        obj.provider = Provider.constructFromObject(data['provider']);
      if (data.hasOwnProperty('provider_location'))
        obj.providerLocation = Location.constructFromObject(data['provider_location']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [AllOfonSelectMessageOrderItemsItems]);
      if (data.hasOwnProperty('add_ons'))
        obj.addOns = ApiClient.convertToType(data['add_ons'], [AddOn]);
      if (data.hasOwnProperty('offers'))
        obj.offers = ApiClient.convertToType(data['offers'], [Offer]);
      if (data.hasOwnProperty('quote'))
        obj.quote = Quotation.constructFromObject(data['quote']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Provider} provider
 */
OnSelectMessageOrder.prototype.provider = undefined;

/**
 * @member {module:model/Location} providerLocation
 */
OnSelectMessageOrder.prototype.providerLocation = undefined;

/**
 * @member {Array.<Object>} items
 */
OnSelectMessageOrder.prototype.items = undefined;

/**
 * @member {Array.<module:model/AddOn>} addOns
 */
OnSelectMessageOrder.prototype.addOns = undefined;

/**
 * @member {Array.<module:model/Offer>} offers
 */
OnSelectMessageOrder.prototype.offers = undefined;

/**
 * @member {module:model/Quotation} quote
 */
OnSelectMessageOrder.prototype.quote = undefined;


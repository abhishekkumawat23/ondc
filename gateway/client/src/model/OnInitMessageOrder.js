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
import {Billing} from './Billing';
import {Fulfillment} from './Fulfillment';
import {OnInitMessageOrderAddOns} from './OnInitMessageOrderAddOns';
import {OnInitMessageOrderItems} from './OnInitMessageOrderItems';
import {OnInitMessageOrderOffers} from './OnInitMessageOrderOffers';
import {OnInitMessageOrderProvider} from './OnInitMessageOrderProvider';
import {OnInitMessageOrderProviderLocation} from './OnInitMessageOrderProviderLocation';
import {Payment} from './Payment';
import {Quotation} from './Quotation';

/**
 * The OnInitMessageOrder model module.
 * @module model/OnInitMessageOrder
 * @version 1.0.0
 */
export class OnInitMessageOrder {
  /**
   * Constructs a new <code>OnInitMessageOrder</code>.
   * @alias module:model/OnInitMessageOrder
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OnInitMessageOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnInitMessageOrder} obj Optional instance to populate.
   * @return {module:model/OnInitMessageOrder} The populated <code>OnInitMessageOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OnInitMessageOrder();
      if (data.hasOwnProperty('provider'))
        obj.provider = OnInitMessageOrderProvider.constructFromObject(data['provider']);
      if (data.hasOwnProperty('provider_location'))
        obj.providerLocation = OnInitMessageOrderProviderLocation.constructFromObject(data['provider_location']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [OnInitMessageOrderItems]);
      if (data.hasOwnProperty('add_ons'))
        obj.addOns = ApiClient.convertToType(data['add_ons'], [OnInitMessageOrderAddOns]);
      if (data.hasOwnProperty('offers'))
        obj.offers = ApiClient.convertToType(data['offers'], [OnInitMessageOrderOffers]);
      if (data.hasOwnProperty('billing'))
        obj.billing = Billing.constructFromObject(data['billing']);
      if (data.hasOwnProperty('fulfillment'))
        obj.fulfillment = Fulfillment.constructFromObject(data['fulfillment']);
      if (data.hasOwnProperty('quote'))
        obj.quote = Quotation.constructFromObject(data['quote']);
      if (data.hasOwnProperty('payment'))
        obj.payment = Payment.constructFromObject(data['payment']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OnInitMessageOrderProvider} provider
 */
OnInitMessageOrder.prototype.provider = undefined;

/**
 * @member {module:model/OnInitMessageOrderProviderLocation} providerLocation
 */
OnInitMessageOrder.prototype.providerLocation = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderItems>} items
 */
OnInitMessageOrder.prototype.items = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderAddOns>} addOns
 */
OnInitMessageOrder.prototype.addOns = undefined;

/**
 * @member {Array.<module:model/OnInitMessageOrderOffers>} offers
 */
OnInitMessageOrder.prototype.offers = undefined;

/**
 * @member {module:model/Billing} billing
 */
OnInitMessageOrder.prototype.billing = undefined;

/**
 * @member {module:model/Fulfillment} fulfillment
 */
OnInitMessageOrder.prototype.fulfillment = undefined;

/**
 * @member {module:model/Quotation} quote
 */
OnInitMessageOrder.prototype.quote = undefined;

/**
 * @member {module:model/Payment} payment
 */
OnInitMessageOrder.prototype.payment = undefined;


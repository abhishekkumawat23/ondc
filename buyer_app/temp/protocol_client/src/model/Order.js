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
import {Billing} from './Billing';
import {Cancellation} from './Cancellation';
import {Document} from './Document';
import {Fulfillment} from './Fulfillment';
import {OrderAddOns} from './OrderAddOns';
import {OrderItems} from './OrderItems';
import {OrderOffers} from './OrderOffers';
import {OrderOndcorglinkedOrders} from './OrderOndcorglinkedOrders';
import {OrderProvider} from './OrderProvider';
import {Payment} from './Payment';
import {Quotation} from './Quotation';

/**
 * The Order model module.
 * @module model/Order
 * @version 1.0.29
 */
export class Order {
  /**
   * Constructs a new <code>Order</code>.
   * Describes the details of an order - For \&quot;@ondc/org/cancellation.cancelled_by\&quot; use following values - buyer-app, seller-app, logistics-provider;
   * @alias module:model/Order
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Order</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Order} obj Optional instance to populate.
   * @return {module:model/Order} The populated <code>Order</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Order();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('provider'))
        obj.provider = OrderProvider.constructFromObject(data['provider']);
      if (data.hasOwnProperty('items'))
        obj.items = ApiClient.convertToType(data['items'], [OrderItems]);
      if (data.hasOwnProperty('add_ons'))
        obj.addOns = ApiClient.convertToType(data['add_ons'], [OrderAddOns]);
      if (data.hasOwnProperty('offers'))
        obj.offers = ApiClient.convertToType(data['offers'], [OrderOffers]);
      if (data.hasOwnProperty('documents'))
        obj.documents = ApiClient.convertToType(data['documents'], [Document]);
      if (data.hasOwnProperty('billing'))
        obj.billing = Billing.constructFromObject(data['billing']);
      if (data.hasOwnProperty('fulfillments'))
        obj.fulfillments = ApiClient.convertToType(data['fulfillments'], [Fulfillment]);
      if (data.hasOwnProperty('quote'))
        obj.quote = Quotation.constructFromObject(data['quote']);
      if (data.hasOwnProperty('payment'))
        obj.payment = Payment.constructFromObject(data['payment']);
      if (data.hasOwnProperty('@ondc/org/cancellation'))
        obj.ondcorgcancellation = Cancellation.constructFromObject(data['@ondc/org/cancellation']);
      if (data.hasOwnProperty('@ondc/org/linked_orders'))
        obj.ondcorglinkedOrders = ApiClient.convertToType(data['@ondc/org/linked_orders'], [OrderOndcorglinkedOrders]);
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
    }
    return obj;
  }
}

/**
 * Unique identifier for Order across the network, Will be created by buyer app in confirm API
 * @member {String} id
 */
Order.prototype.id = undefined;

/**
 * @member {String} state
 */
Order.prototype.state = undefined;

/**
 * @member {module:model/OrderProvider} provider
 */
Order.prototype.provider = undefined;

/**
 * @member {Array.<module:model/OrderItems>} items
 */
Order.prototype.items = undefined;

/**
 * @member {Array.<module:model/OrderAddOns>} addOns
 */
Order.prototype.addOns = undefined;

/**
 * @member {Array.<module:model/OrderOffers>} offers
 */
Order.prototype.offers = undefined;

/**
 * @member {Array.<module:model/Document>} documents
 */
Order.prototype.documents = undefined;

/**
 * @member {module:model/Billing} billing
 */
Order.prototype.billing = undefined;

/**
 * @member {Array.<module:model/Fulfillment>} fulfillments
 */
Order.prototype.fulfillments = undefined;

/**
 * @member {module:model/Quotation} quote
 */
Order.prototype.quote = undefined;

/**
 * @member {module:model/Payment} payment
 */
Order.prototype.payment = undefined;

/**
 * @member {module:model/Cancellation} ondcorgcancellation
 */
Order.prototype.ondcorgcancellation = undefined;

/**
 * payload for cascaded orders e.g. order for logistics services linked to a retail order
 * @member {Array.<module:model/OrderOndcorglinkedOrders>} ondcorglinkedOrders
 */
Order.prototype.ondcorglinkedOrders = undefined;

/**
 * @member {Date} createdAt
 */
Order.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Order.prototype.updatedAt = undefined;


/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
import {IntentOndcorgpayloadDetails} from './IntentOndcorgpayloadDetails';
import {Item} from './Item';
import {Offer} from './Offer';
import {Payment} from './Payment';
import {Provider} from './Provider';
import {Tags} from './Tags';

/**
 * The Intent model module.
 * @module model/Intent
 * @version 1.0.9
 */
export class Intent {
  /**
   * Constructs a new <code>Intent</code>.
   * Intent of a user. Used for searching for services
   * @alias module:model/Intent
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Intent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Intent} obj Optional instance to populate.
   * @return {module:model/Intent} The populated <code>Intent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Intent();
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('provider'))
        obj.provider = Provider.constructFromObject(data['provider']);
      if (data.hasOwnProperty('fulfillment'))
        obj.fulfillment = Fulfillment.constructFromObject(data['fulfillment']);
      if (data.hasOwnProperty('payment'))
        obj.payment = Payment.constructFromObject(data['payment']);
      if (data.hasOwnProperty('category'))
        obj.category = Category.constructFromObject(data['category']);
      if (data.hasOwnProperty('offer'))
        obj.offer = Offer.constructFromObject(data['offer']);
      if (data.hasOwnProperty('item'))
        obj.item = Item.constructFromObject(data['item']);
      if (data.hasOwnProperty('@ondc/org/payload_details'))
        obj.ondcorgpayloadDetails = IntentOndcorgpayloadDetails.constructFromObject(data['@ondc/org/payload_details']);
      if (data.hasOwnProperty('tags'))
        obj.tags = Tags.constructFromObject(data['tags']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Descriptor} descriptor
 */
Intent.prototype.descriptor = undefined;

/**
 * @member {module:model/Provider} provider
 */
Intent.prototype.provider = undefined;

/**
 * @member {module:model/Fulfillment} fulfillment
 */
Intent.prototype.fulfillment = undefined;

/**
 * @member {module:model/Payment} payment
 */
Intent.prototype.payment = undefined;

/**
 * @member {module:model/Category} category
 */
Intent.prototype.category = undefined;

/**
 * @member {module:model/Offer} offer
 */
Intent.prototype.offer = undefined;

/**
 * @member {module:model/Item} item
 */
Intent.prototype.item = undefined;

/**
 * @member {module:model/IntentOndcorgpayloadDetails} ondcorgpayloadDetails
 */
Intent.prototype.ondcorgpayloadDetails = undefined;

/**
 * @member {module:model/Tags} tags
 */
Intent.prototype.tags = undefined;

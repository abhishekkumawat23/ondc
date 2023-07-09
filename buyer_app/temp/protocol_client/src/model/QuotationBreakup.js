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
import {Item} from './Item';
import {ItemQuantitypropertiesselected} from './ItemQuantitypropertiesselected';
import {Itempropertiesid} from './Itempropertiesid';
import {Price} from './Price';

/**
 * The QuotationBreakup model module.
 * @module model/QuotationBreakup
 * @version 1.0.29
 */
export class QuotationBreakup {
  /**
   * Constructs a new <code>QuotationBreakup</code>.
   * @alias module:model/QuotationBreakup
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>QuotationBreakup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/QuotationBreakup} obj Optional instance to populate.
   * @return {module:model/QuotationBreakup} The populated <code>QuotationBreakup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new QuotationBreakup();
      if (data.hasOwnProperty('@ondc/org/item_id'))
        obj.ondcorgitemId = Itempropertiesid.constructFromObject(data['@ondc/org/item_id']);
      if (data.hasOwnProperty('@ondc/org/item_quantity'))
        obj.ondcorgitemQuantity = ItemQuantitypropertiesselected.constructFromObject(data['@ondc/org/item_quantity']);
      if (data.hasOwnProperty('@ondc/org/title_type'))
        obj.ondcorgtitleType = ApiClient.convertToType(data['@ondc/org/title_type'], 'String');
      if (data.hasOwnProperty('item'))
        obj.item = Item.constructFromObject(data['item']);
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('price'))
        obj.price = Price.constructFromObject(data['price']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Itempropertiesid} ondcorgitemId
 */
QuotationBreakup.prototype.ondcorgitemId = undefined;

/**
 * @member {module:model/ItemQuantitypropertiesselected} ondcorgitemQuantity
 */
QuotationBreakup.prototype.ondcorgitemQuantity = undefined;

/**
 * Allowed values for the <code>ondcorgtitleType</code> property.
 * @enum {String}
 * @readonly
 */
QuotationBreakup.OndcorgtitleTypeEnum = {
  /**
   * value: "item"
   * @const
   */
  item: "item",

  /**
   * value: "delivery"
   * @const
   */
  delivery: "delivery",

  /**
   * value: "packing"
   * @const
   */
  packing: "packing",

  /**
   * value: "tax"
   * @const
   */
  tax: "tax",

  /**
   * value: "misc"
   * @const
   */
  misc: "misc",

  /**
   * value: "discount"
   * @const
   */
  discount: "discount"
};
/**
 * @member {module:model/QuotationBreakup.OndcorgtitleTypeEnum} ondcorgtitleType
 */
QuotationBreakup.prototype.ondcorgtitleType = undefined;

/**
 * @member {module:model/Item} item
 */
QuotationBreakup.prototype.item = undefined;

/**
 * @member {String} title
 */
QuotationBreakup.prototype.title = undefined;

/**
 * @member {module:model/Price} price
 */
QuotationBreakup.prototype.price = undefined;

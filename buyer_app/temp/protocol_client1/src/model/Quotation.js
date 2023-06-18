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
import {Duration} from './Duration';
import {Price} from './Price';
import {QuotationBreakup} from './QuotationBreakup';

/**
 * The Quotation model module.
 * @module model/Quotation
 * @version 1.0.13
 */
export class Quotation {
  /**
   * Constructs a new <code>Quotation</code>.
   * Describes a quote
   * @alias module:model/Quotation
   * @class
   * @param price {module:model/Price} 
   */
  constructor(price) {
    this.price = price;
  }

  /**
   * Constructs a <code>Quotation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Quotation} obj Optional instance to populate.
   * @return {module:model/Quotation} The populated <code>Quotation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Quotation();
      if (data.hasOwnProperty('price'))
        obj.price = Price.constructFromObject(data['price']);
      if (data.hasOwnProperty('breakup'))
        obj.breakup = ApiClient.convertToType(data['breakup'], [QuotationBreakup]);
      if (data.hasOwnProperty('ttl'))
        obj.ttl = Duration.constructFromObject(data['ttl']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Price} price
 */
Quotation.prototype.price = undefined;

/**
 * @member {Array.<module:model/QuotationBreakup>} breakup
 */
Quotation.prototype.breakup = undefined;

/**
 * @member {module:model/Duration} ttl
 */
Quotation.prototype.ttl = undefined;


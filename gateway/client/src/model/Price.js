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
import {DecimalValue} from './DecimalValue';

/**
 * The Price model module.
 * @module model/Price
 * @version 1.0.0
 */
export class Price {
  /**
   * Constructs a new <code>Price</code>.
   * Describes the price of an item. Allows for domain extension.
   * @alias module:model/Price
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Price</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Price} obj Optional instance to populate.
   * @return {module:model/Price} The populated <code>Price</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Price();
      if (data.hasOwnProperty('currency'))
        obj.currency = ApiClient.convertToType(data['currency'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = DecimalValue.constructFromObject(data['value']);
      if (data.hasOwnProperty('estimated_value'))
        obj.estimatedValue = DecimalValue.constructFromObject(data['estimated_value']);
      if (data.hasOwnProperty('computed_value'))
        obj.computedValue = DecimalValue.constructFromObject(data['computed_value']);
      if (data.hasOwnProperty('listed_value'))
        obj.listedValue = DecimalValue.constructFromObject(data['listed_value']);
      if (data.hasOwnProperty('offered_value'))
        obj.offeredValue = DecimalValue.constructFromObject(data['offered_value']);
      if (data.hasOwnProperty('minimum_value'))
        obj.minimumValue = DecimalValue.constructFromObject(data['minimum_value']);
      if (data.hasOwnProperty('maximum_value'))
        obj.maximumValue = DecimalValue.constructFromObject(data['maximum_value']);
    }
    return obj;
  }
}

/**
 * ISO 4217 alphabetic currency code e.g. 'INR'
 * @member {String} currency
 */
Price.prototype.currency = undefined;

/**
 * @member {module:model/DecimalValue} value
 */
Price.prototype.value = undefined;

/**
 * @member {module:model/DecimalValue} estimatedValue
 */
Price.prototype.estimatedValue = undefined;

/**
 * @member {module:model/DecimalValue} computedValue
 */
Price.prototype.computedValue = undefined;

/**
 * @member {module:model/DecimalValue} listedValue
 */
Price.prototype.listedValue = undefined;

/**
 * @member {module:model/DecimalValue} offeredValue
 */
Price.prototype.offeredValue = undefined;

/**
 * @member {module:model/DecimalValue} minimumValue
 */
Price.prototype.minimumValue = undefined;

/**
 * @member {module:model/DecimalValue} maximumValue
 */
Price.prototype.maximumValue = undefined;


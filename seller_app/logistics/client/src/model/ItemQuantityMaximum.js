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
import {Scalar} from './Scalar';

/**
 * The ItemQuantityMaximum model module.
 * @module model/ItemQuantityMaximum
 * @version 1.0.9
 */
export class ItemQuantityMaximum {
  /**
   * Constructs a new <code>ItemQuantityMaximum</code>.
   * @alias module:model/ItemQuantityMaximum
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemQuantityMaximum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemQuantityMaximum} obj Optional instance to populate.
   * @return {module:model/ItemQuantityMaximum} The populated <code>ItemQuantityMaximum</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ItemQuantityMaximum();
      if (data.hasOwnProperty('count'))
        obj.count = ApiClient.convertToType(data['count'], 'Number');
      if (data.hasOwnProperty('measure'))
        obj.measure = Scalar.constructFromObject(data['measure']);
    }
    return obj;
  }
}

/**
 * @member {Number} count
 */
ItemQuantityMaximum.prototype.count = undefined;

/**
 * @member {module:model/Scalar} measure
 */
ItemQuantityMaximum.prototype.measure = undefined;


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
import {Scalar} from './Scalar';

/**
 * The ItemQuantityAllocated model module.
 * @module model/ItemQuantityAllocated
 * @version 1.0.29
 */
export class ItemQuantityAllocated {
  /**
   * Constructs a new <code>ItemQuantityAllocated</code>.
   * @alias module:model/ItemQuantityAllocated
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemQuantityAllocated</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemQuantityAllocated} obj Optional instance to populate.
   * @return {module:model/ItemQuantityAllocated} The populated <code>ItemQuantityAllocated</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ItemQuantityAllocated();
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
ItemQuantityAllocated.prototype.count = undefined;

/**
 * @member {module:model/Scalar} measure
 */
ItemQuantityAllocated.prototype.measure = undefined;


/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
 * The Dimensions model module.
 * @module model/Dimensions
 * @version 1.0.13
 */
export class Dimensions {
  /**
   * Constructs a new <code>Dimensions</code>.
   * Describes the dimensions of a real-world object
   * @alias module:model/Dimensions
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Dimensions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Dimensions} obj Optional instance to populate.
   * @return {module:model/Dimensions} The populated <code>Dimensions</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Dimensions();
      if (data.hasOwnProperty('length'))
        obj.length = Scalar.constructFromObject(data['length']);
      if (data.hasOwnProperty('breadth'))
        obj.breadth = Scalar.constructFromObject(data['breadth']);
      if (data.hasOwnProperty('height'))
        obj.height = Scalar.constructFromObject(data['height']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Scalar} length
 */
Dimensions.prototype.length = undefined;

/**
 * @member {module:model/Scalar} breadth
 */
Dimensions.prototype.breadth = undefined;

/**
 * @member {module:model/Scalar} height
 */
Dimensions.prototype.height = undefined;

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
import {ScalarRange} from './ScalarRange';

/**
 * The Scalar model module.
 * @module model/Scalar
 * @version 1.0.13
 */
export class Scalar {
  /**
   * Constructs a new <code>Scalar</code>.
   * An object representing a scalar quantity.
   * @alias module:model/Scalar
   * @class
   * @param value {Number} 
   * @param unit {String} 
   */
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  /**
   * Constructs a <code>Scalar</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Scalar} obj Optional instance to populate.
   * @return {module:model/Scalar} The populated <code>Scalar</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Scalar();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'Number');
      if (data.hasOwnProperty('estimated_value'))
        obj.estimatedValue = ApiClient.convertToType(data['estimated_value'], 'Number');
      if (data.hasOwnProperty('computed_value'))
        obj.computedValue = ApiClient.convertToType(data['computed_value'], 'Number');
      if (data.hasOwnProperty('range'))
        obj.range = ScalarRange.constructFromObject(data['range']);
      if (data.hasOwnProperty('unit'))
        obj.unit = ApiClient.convertToType(data['unit'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Scalar.TypeEnum = {
  /**
   * value: "CONSTANT"
   * @const
   */
  CONSTANT: "CONSTANT",

  /**
   * value: "VARIABLE"
   * @const
   */
  VARIABLE: "VARIABLE"
};
/**
 * @member {module:model/Scalar.TypeEnum} type
 */
Scalar.prototype.type = undefined;

/**
 * @member {Number} value
 */
Scalar.prototype.value = undefined;

/**
 * @member {Number} estimatedValue
 */
Scalar.prototype.estimatedValue = undefined;

/**
 * @member {Number} computedValue
 */
Scalar.prototype.computedValue = undefined;

/**
 * @member {module:model/ScalarRange} range
 */
Scalar.prototype.range = undefined;

/**
 * @member {String} unit
 */
Scalar.prototype.unit = undefined;


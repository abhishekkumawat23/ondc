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
import {Dimensions} from './Dimensions';
import {Price} from './Price';
import {Scalar} from './Scalar';

/**
 * The IntentOndcorgpayloadDetails model module.
 * @module model/IntentOndcorgpayloadDetails
 * @version 1.0.9
 */
export class IntentOndcorgpayloadDetails {
  /**
   * Constructs a new <code>IntentOndcorgpayloadDetails</code>.
   * payload details that will allow logistics provider to determine serviceability. For weight, enums for unit are - \&quot;Kilogram\&quot;, \&quot;Gram\&quot; For dimensions, enums for length.unit, breadth.unit and height.unit are - \&quot;meter\&quot;, \&quot;centimeter\&quot;
   * @alias module:model/IntentOndcorgpayloadDetails
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>IntentOndcorgpayloadDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IntentOndcorgpayloadDetails} obj Optional instance to populate.
   * @return {module:model/IntentOndcorgpayloadDetails} The populated <code>IntentOndcorgpayloadDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new IntentOndcorgpayloadDetails();
      if (data.hasOwnProperty('weight'))
        obj.weight = Scalar.constructFromObject(data['weight']);
      if (data.hasOwnProperty('dimensions'))
        obj.dimensions = Dimensions.constructFromObject(data['dimensions']);
      if (data.hasOwnProperty('category'))
        obj.category = ApiClient.convertToType(data['category'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = Price.constructFromObject(data['value']);
      if (data.hasOwnProperty('dangerous_goods'))
        obj.dangerousGoods = ApiClient.convertToType(data['dangerous_goods'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {module:model/Scalar} weight
 */
IntentOndcorgpayloadDetails.prototype.weight = undefined;

/**
 * @member {module:model/Dimensions} dimensions
 */
IntentOndcorgpayloadDetails.prototype.dimensions = undefined;

/**
 * @member {String} category
 */
IntentOndcorgpayloadDetails.prototype.category = undefined;

/**
 * @member {module:model/Price} value
 */
IntentOndcorgpayloadDetails.prototype.value = undefined;

/**
 * @member {Boolean} dangerousGoods
 */
IntentOndcorgpayloadDetails.prototype.dangerousGoods = undefined;


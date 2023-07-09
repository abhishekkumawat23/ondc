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
import {Descriptor} from './Descriptor';
import {OptionId} from './OptionId';

/**
 * The Option model module.
 * @module model/Option
 * @version 1.0.13
 */
export class Option {
  /**
   * Constructs a new <code>Option</code>.
   * Describes a selectable option
   * @alias module:model/Option
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Option</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Option} obj Optional instance to populate.
   * @return {module:model/Option} The populated <code>Option</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Option();
      if (data.hasOwnProperty('id'))
        obj.id = OptionId.constructFromObject(data['id']);
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
    }
    return obj;
  }
}

/**
 * @member {module:model/OptionId} id
 */
Option.prototype.id = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Option.prototype.descriptor = undefined;


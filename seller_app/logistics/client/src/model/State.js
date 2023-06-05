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
import {Descriptor} from './Descriptor';

/**
 * The State model module.
 * @module model/State
 * @version 1.0.9
 */
export class State {
  /**
   * Constructs a new <code>State</code>.
   * Describes a state
   * @alias module:model/State
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>State</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/State} obj Optional instance to populate.
   * @return {module:model/State} The populated <code>State</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new State();
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
      if (data.hasOwnProperty('updated_by'))
        obj.updatedBy = ApiClient.convertToType(data['updated_by'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/Descriptor} descriptor
 */
State.prototype.descriptor = undefined;

/**
 * @member {Date} updatedAt
 */
State.prototype.updatedAt = undefined;

/**
 * ID of entity which changed the state
 * @member {String} updatedBy
 */
State.prototype.updatedBy = undefined;


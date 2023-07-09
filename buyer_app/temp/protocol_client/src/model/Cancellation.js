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
import {CancellationSelectedReason} from './CancellationSelectedReason';
import {Descriptor} from './Descriptor';
import {Option} from './Option';
import {Policy} from './Policy';

/**
 * The Cancellation model module.
 * @module model/Cancellation
 * @version 1.0.29
 */
export class Cancellation {
  /**
   * Constructs a new <code>Cancellation</code>.
   * Describes a cancellation event
   * @alias module:model/Cancellation
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Cancellation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cancellation} obj Optional instance to populate.
   * @return {module:model/Cancellation} The populated <code>Cancellation</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Cancellation();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('ref_id'))
        obj.refId = ApiClient.convertToType(data['ref_id'], 'String');
      if (data.hasOwnProperty('policies'))
        obj.policies = ApiClient.convertToType(data['policies'], [Policy]);
      if (data.hasOwnProperty('time'))
        obj.time = ApiClient.convertToType(data['time'], 'Date');
      if (data.hasOwnProperty('cancelled_by'))
        obj.cancelledBy = ApiClient.convertToType(data['cancelled_by'], 'String');
      if (data.hasOwnProperty('reasons'))
        obj.reasons = Option.constructFromObject(data['reasons']);
      if (data.hasOwnProperty('selected_reason'))
        obj.selectedReason = CancellationSelectedReason.constructFromObject(data['selected_reason']);
      if (data.hasOwnProperty('additional_description'))
        obj.additionalDescription = Descriptor.constructFromObject(data['additional_description']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Cancellation.TypeEnum = {
  /**
   * value: "full"
   * @const
   */
  full: "full",

  /**
   * value: "partial"
   * @const
   */
  partial: "partial"
};
/**
 * @member {module:model/Cancellation.TypeEnum} type
 */
Cancellation.prototype.type = undefined;

/**
 * @member {String} refId
 */
Cancellation.prototype.refId = undefined;

/**
 * @member {Array.<module:model/Policy>} policies
 */
Cancellation.prototype.policies = undefined;

/**
 * @member {Date} time
 */
Cancellation.prototype.time = undefined;

/**
 * @member {String} cancelledBy
 */
Cancellation.prototype.cancelledBy = undefined;

/**
 * @member {module:model/Option} reasons
 */
Cancellation.prototype.reasons = undefined;

/**
 * @member {module:model/CancellationSelectedReason} selectedReason
 */
Cancellation.prototype.selectedReason = undefined;

/**
 * @member {module:model/Descriptor} additionalDescription
 */
Cancellation.prototype.additionalDescription = undefined;


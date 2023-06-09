/*
 * sandbox-client-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
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
import {Address16} from './Address16';
import {Descriptor8} from './Descriptor8';

/**
 * The Adddeliveryaddressrequest model module.
 * @module model/Adddeliveryaddressrequest
 * @version 1.0
 */
export class Adddeliveryaddressrequest {
  /**
   * Constructs a new <code>Adddeliveryaddressrequest</code>.
   * @alias module:model/Adddeliveryaddressrequest
   * @class
   * @param descriptor {module:model/Descriptor8} 
   * @param gps {String} 
   * @param defaultAddress {Boolean} 
   * @param address {module:model/Address16} 
   */
  constructor(descriptor, gps, defaultAddress, address) {
    this.descriptor = descriptor;
    this.gps = gps;
    this.defaultAddress = defaultAddress;
    this.address = address;
  }

  /**
   * Constructs a <code>Adddeliveryaddressrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Adddeliveryaddressrequest} obj Optional instance to populate.
   * @return {module:model/Adddeliveryaddressrequest} The populated <code>Adddeliveryaddressrequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Adddeliveryaddressrequest();
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor8.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('gps'))
        obj.gps = ApiClient.convertToType(data['gps'], 'String');
      if (data.hasOwnProperty('defaultAddress'))
        obj.defaultAddress = ApiClient.convertToType(data['defaultAddress'], 'Boolean');
      if (data.hasOwnProperty('address'))
        obj.address = Address16.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Descriptor8} descriptor
 */
Adddeliveryaddressrequest.prototype.descriptor = undefined;

/**
 * @member {String} gps
 */
Adddeliveryaddressrequest.prototype.gps = undefined;

/**
 * @member {Boolean} defaultAddress
 */
Adddeliveryaddressrequest.prototype.defaultAddress = undefined;

/**
 * @member {module:model/Address16} address
 */
Adddeliveryaddressrequest.prototype.address = undefined;


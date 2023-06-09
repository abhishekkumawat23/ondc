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
import {Address14} from './Address14';
import {Descriptor11} from './Descriptor11';

/**
 * The Updatedeliveryaddressrequest model module.
 * @module model/Updatedeliveryaddressrequest
 * @version 1.0
 */
export class Updatedeliveryaddressrequest {
  /**
   * Constructs a new <code>Updatedeliveryaddressrequest</code>.
   * @alias module:model/Updatedeliveryaddressrequest
   * @class
   * @param descriptor {module:model/Descriptor11} 
   * @param address {module:model/Address14} 
   */
  constructor(descriptor, address) {
    this.descriptor = descriptor;
    this.address = address;
  }

  /**
   * Constructs a <code>Updatedeliveryaddressrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Updatedeliveryaddressrequest} obj Optional instance to populate.
   * @return {module:model/Updatedeliveryaddressrequest} The populated <code>Updatedeliveryaddressrequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Updatedeliveryaddressrequest();
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor11.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('address'))
        obj.address = Address14.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Descriptor11} descriptor
 */
Updatedeliveryaddressrequest.prototype.descriptor = undefined;

/**
 * @member {module:model/Address14} address
 */
Updatedeliveryaddressrequest.prototype.address = undefined;


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
import {Address17} from './Address17';
import {Descriptor9} from './Descriptor9';

/**
 * The Adddeliveryaddress model module.
 * @module model/Adddeliveryaddress
 * @version 1.0
 */
export class Adddeliveryaddress {
  /**
   * Constructs a new <code>Adddeliveryaddress</code>.
   * @alias module:model/Adddeliveryaddress
   * @class
   * @param id {String} 
   * @param descriptor {module:model/Descriptor9} 
   * @param gps {String} 
   * @param defaultAddress {Boolean} 
   * @param address {module:model/Address17} 
   */
  constructor(id, descriptor, gps, defaultAddress, address) {
    this.id = id;
    this.descriptor = descriptor;
    this.gps = gps;
    this.defaultAddress = defaultAddress;
    this.address = address;
  }

  /**
   * Constructs a <code>Adddeliveryaddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Adddeliveryaddress} obj Optional instance to populate.
   * @return {module:model/Adddeliveryaddress} The populated <code>Adddeliveryaddress</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Adddeliveryaddress();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor9.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('gps'))
        obj.gps = ApiClient.convertToType(data['gps'], 'String');
      if (data.hasOwnProperty('defaultAddress'))
        obj.defaultAddress = ApiClient.convertToType(data['defaultAddress'], 'Boolean');
      if (data.hasOwnProperty('address'))
        obj.address = Address17.constructFromObject(data['address']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Adddeliveryaddress.prototype.id = undefined;

/**
 * @member {module:model/Descriptor9} descriptor
 */
Adddeliveryaddress.prototype.descriptor = undefined;

/**
 * @member {String} gps
 */
Adddeliveryaddress.prototype.gps = undefined;

/**
 * @member {Boolean} defaultAddress
 */
Adddeliveryaddress.prototype.defaultAddress = undefined;

/**
 * @member {module:model/Address17} address
 */
Adddeliveryaddress.prototype.address = undefined;


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
import {Address4} from './Address4';
import {Descriptor10} from './Descriptor10';

// TODO(7): Id was  oming 2 times causing duplicity and thus babel was failing to transpile. We have removed it temporarily.

/**
 * The Ondeliveryaddress model module.
 * @module model/Ondeliveryaddress
 * @version 1.0
 */
export class Ondeliveryaddress {
  /**
   * Constructs a new <code>Ondeliveryaddress</code>.
   * @alias module:model/Ondeliveryaddress
   * @class
   * @param userId {String} 
   * @param id {String} 
   * @param descriptor {module:model/Descriptor10} 
   * @param gps {String} 
   * @param defaultAddress {Boolean} 
   * @param address {module:model/Address4} 
   * @param updatedAt {String} 
   */
  constructor(userId, id, descriptor, gps, defaultAddress, address, updatedAt) {
    this.userId = userId;
    this.id = id;
    this.descriptor = descriptor;
    this.gps = gps;
    this.defaultAddress = defaultAddress;
    this.address = address;
    this.updatedAt = updatedAt;
  }

  /**
   * Constructs a <code>Ondeliveryaddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ondeliveryaddress} obj Optional instance to populate.
   * @return {module:model/Ondeliveryaddress} The populated <code>Ondeliveryaddress</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Ondeliveryaddress();
      if (data.hasOwnProperty('_id'))
        obj.id = ApiClient.convertToType(data['_id'], 'String');
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('descriptor'))
        obj.descriptor = Descriptor10.constructFromObject(data['descriptor']);
      if (data.hasOwnProperty('gps'))
        obj.gps = ApiClient.convertToType(data['gps'], 'String');
      if (data.hasOwnProperty('defaultAddress'))
        obj.defaultAddress = ApiClient.convertToType(data['defaultAddress'], 'Boolean');
      if (data.hasOwnProperty('address'))
        obj.address = Address4.constructFromObject(data['address']);
      if (data.hasOwnProperty('updatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['updatedAt'], 'String');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('__v'))
        obj.v = ApiClient.convertToType(data['__v'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} userId
 */
Ondeliveryaddress.prototype.userId = undefined;

/**
 * @member {String} id
 */
Ondeliveryaddress.prototype.id = undefined;

/**
 * @member {module:model/Descriptor10} descriptor
 */
Ondeliveryaddress.prototype.descriptor = undefined;

/**
 * @member {String} gps
 */
Ondeliveryaddress.prototype.gps = undefined;

/**
 * @member {Boolean} defaultAddress
 */
Ondeliveryaddress.prototype.defaultAddress = undefined;

/**
 * @member {module:model/Address4} address
 */
Ondeliveryaddress.prototype.address = undefined;

/**
 * @member {String} updatedAt
 */
Ondeliveryaddress.prototype.updatedAt = undefined;

/**
 * @member {String} createdAt
 */
Ondeliveryaddress.prototype.createdAt = undefined;

/**
 * @member {Number} v
 */
Ondeliveryaddress.prototype.v = undefined;

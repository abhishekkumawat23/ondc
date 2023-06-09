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
import {Location1} from './Location1';

/**
 * The DeliveryInfo model module.
 * @module model/DeliveryInfo
 * @version 1.0
 */
export class DeliveryInfo {
  /**
   * Constructs a new <code>DeliveryInfo</code>.
   * @alias module:model/DeliveryInfo
   * @class
   * @param type {String} 
   * @param name {String} 
   * @param email {String} 
   * @param phone {String} 
   * @param location {module:model/Location1} 
   */
  constructor(type, name, email, phone, location) {
    this.type = type;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
  }

  /**
   * Constructs a <code>DeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryInfo} obj Optional instance to populate.
   * @return {module:model/DeliveryInfo} The populated <code>DeliveryInfo</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeliveryInfo();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('location'))
        obj.location = Location1.constructFromObject(data['location']);
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
DeliveryInfo.prototype.type = undefined;

/**
 * @member {String} name
 */
DeliveryInfo.prototype.name = undefined;

/**
 * @member {String} email
 */
DeliveryInfo.prototype.email = undefined;

/**
 * @member {String} phone
 */
DeliveryInfo.prototype.phone = undefined;

/**
 * @member {module:model/Location1} location
 */
DeliveryInfo.prototype.location = undefined;


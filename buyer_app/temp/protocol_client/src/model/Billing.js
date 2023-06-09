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
import {Address} from './Address';
import {Organization} from './Organization';
import {Time} from './Time';

/**
 * The Billing model module.
 * @module model/Billing
 * @version 1.0.29
 */
export class Billing {
  /**
   * Constructs a new <code>Billing</code>.
   * Describes a billing event
   * @alias module:model/Billing
   * @class
   * @param name {String} Personal details of the customer needed for billing.
   * @param phone {String} 
   * @param taxNumber {String} GST number
   */
  constructor(name, phone, taxNumber) {
    this.name = name;
    this.phone = phone;
    this.taxNumber = taxNumber;
  }

  /**
   * Constructs a <code>Billing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Billing} obj Optional instance to populate.
   * @return {module:model/Billing} The populated <code>Billing</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Billing();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = Organization.constructFromObject(data['organization']);
      if (data.hasOwnProperty('address'))
        obj.address = Address.constructFromObject(data['address']);
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('time'))
        obj.time = Time.constructFromObject(data['time']);
      if (data.hasOwnProperty('tax_number'))
        obj.taxNumber = ApiClient.convertToType(data['tax_number'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Date');
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Date');
    }
    return obj;
  }
}

/**
 * Personal details of the customer needed for billing.
 * @member {String} name
 */
Billing.prototype.name = undefined;

/**
 * @member {module:model/Organization} organization
 */
Billing.prototype.organization = undefined;

/**
 * @member {module:model/Address} address
 */
Billing.prototype.address = undefined;

/**
 * @member {String} email
 */
Billing.prototype.email = undefined;

/**
 * @member {String} phone
 */
Billing.prototype.phone = undefined;

/**
 * @member {module:model/Time} time
 */
Billing.prototype.time = undefined;

/**
 * GST number
 * @member {String} taxNumber
 */
Billing.prototype.taxNumber = undefined;

/**
 * @member {Date} createdAt
 */
Billing.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Billing.prototype.updatedAt = undefined;


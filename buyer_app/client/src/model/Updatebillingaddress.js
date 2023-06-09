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
import {Organization} from './Organization';

/**
 * The Updatebillingaddress model module.
 * @module model/Updatebillingaddress
 * @version 1.0
 */
export class Updatebillingaddress {
  /**
   * Constructs a new <code>Updatebillingaddress</code>.
   * @alias module:model/Updatebillingaddress
   * @class
   * @param id {String} 
   * @param address {module:model/Address4} 
   * @param organization {module:model/Organization} 
   * @param locationId {String} 
   * @param email {String} 
   * @param phone {String} 
   * @param taxNumber {String} 
   * @param name {String} 
   */
  constructor(id, address, organization, locationId, email, phone, taxNumber, name) {
    this.id = id;
    this.address = address;
    this.organization = organization;
    this.locationId = locationId;
    this.email = email;
    this.phone = phone;
    this.taxNumber = taxNumber;
    this.name = name;
  }

  /**
   * Constructs a <code>Updatebillingaddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Updatebillingaddress} obj Optional instance to populate.
   * @return {module:model/Updatebillingaddress} The populated <code>Updatebillingaddress</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Updatebillingaddress();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('address'))
        obj.address = Address4.constructFromObject(data['address']);
      if (data.hasOwnProperty('organization'))
        obj.organization = Organization.constructFromObject(data['organization']);
      if (data.hasOwnProperty('locationId'))
        obj.locationId = ApiClient.convertToType(data['locationId'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('taxNumber'))
        obj.taxNumber = ApiClient.convertToType(data['taxNumber'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Updatebillingaddress.prototype.id = undefined;

/**
 * @member {module:model/Address4} address
 */
Updatebillingaddress.prototype.address = undefined;

/**
 * @member {module:model/Organization} organization
 */
Updatebillingaddress.prototype.organization = undefined;

/**
 * @member {String} locationId
 */
Updatebillingaddress.prototype.locationId = undefined;

/**
 * @member {String} email
 */
Updatebillingaddress.prototype.email = undefined;

/**
 * @member {String} phone
 */
Updatebillingaddress.prototype.phone = undefined;

/**
 * @member {String} taxNumber
 */
Updatebillingaddress.prototype.taxNumber = undefined;

/**
 * @member {String} name
 */
Updatebillingaddress.prototype.name = undefined;


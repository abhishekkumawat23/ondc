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
import {Person1} from './Person1';

/**
 * The Customer1 model module.
 * @module model/Customer1
 * @version 1.0
 */
export class Customer1 {
  /**
   * Constructs a new <code>Customer1</code>.
   * @alias module:model/Customer1
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Customer1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Customer1} obj Optional instance to populate.
   * @return {module:model/Customer1} The populated <code>Customer1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Customer1();
      if (data.hasOwnProperty('person'))
        obj.person = Person1.constructFromObject(data['person']);
      if (data.hasOwnProperty('contact'))
        obj.contact = ApiClient.convertToType(data['contact'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/Person1} person
 */
Customer1.prototype.person = undefined;

/**
 * @member {String} contact
 */
Customer1.prototype.contact = undefined;

// Implement OneOfFulfillment1Customer interface:

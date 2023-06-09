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
import {Contact} from './Contact';
import {Person} from './Person';

/**
 * The FulfillmentCustomer model module.
 * @module model/FulfillmentCustomer
 * @version 1.0.29
 */
export class FulfillmentCustomer {
  /**
   * Constructs a new <code>FulfillmentCustomer</code>.
   * @alias module:model/FulfillmentCustomer
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FulfillmentCustomer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentCustomer} obj Optional instance to populate.
   * @return {module:model/FulfillmentCustomer} The populated <code>FulfillmentCustomer</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FulfillmentCustomer();
      if (data.hasOwnProperty('person'))
        obj.person = Person.constructFromObject(data['person']);
      if (data.hasOwnProperty('contact'))
        obj.contact = Contact.constructFromObject(data['contact']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Person} person
 */
FulfillmentCustomer.prototype.person = undefined;

/**
 * @member {module:model/Contact} contact
 */
FulfillmentCustomer.prototype.contact = undefined;


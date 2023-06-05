/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
import {Authorization} from './Authorization';
import {Contact} from './Contact';
import {Descriptor} from './Descriptor';
import {Location} from './Location';
import {Person} from './Person';
import {Time} from './Time';

/**
 * The FulfillmentStart model module.
 * @module model/FulfillmentStart
 * @version 1.0.0
 */
export class FulfillmentStart {
  /**
   * Constructs a new <code>FulfillmentStart</code>.
   * Details on the start of fulfillment
   * @alias module:model/FulfillmentStart
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>FulfillmentStart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentStart} obj Optional instance to populate.
   * @return {module:model/FulfillmentStart} The populated <code>FulfillmentStart</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FulfillmentStart();
      if (data.hasOwnProperty('location'))
        obj.location = Location.constructFromObject(data['location']);
      if (data.hasOwnProperty('time'))
        obj.time = Time.constructFromObject(data['time']);
      if (data.hasOwnProperty('instructions'))
        obj.instructions = Descriptor.constructFromObject(data['instructions']);
      if (data.hasOwnProperty('contact'))
        obj.contact = Contact.constructFromObject(data['contact']);
      if (data.hasOwnProperty('person'))
        obj.person = Person.constructFromObject(data['person']);
      if (data.hasOwnProperty('authorization'))
        obj.authorization = Authorization.constructFromObject(data['authorization']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Location} location
 */
FulfillmentStart.prototype.location = undefined;

/**
 * @member {module:model/Time} time
 */
FulfillmentStart.prototype.time = undefined;

/**
 * @member {module:model/Descriptor} instructions
 */
FulfillmentStart.prototype.instructions = undefined;

/**
 * @member {module:model/Contact} contact
 */
FulfillmentStart.prototype.contact = undefined;

/**
 * @member {module:model/Person} person
 */
FulfillmentStart.prototype.person = undefined;

/**
 * @member {module:model/Authorization} authorization
 */
FulfillmentStart.prototype.authorization = undefined;


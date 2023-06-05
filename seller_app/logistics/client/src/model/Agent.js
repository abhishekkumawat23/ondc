/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
import {Image} from './Image';
import {Name} from './Name';
import {Person} from './Person';
import {Rateable} from './Rateable';
import {Tags} from './Tags';

/**
 * The Agent model module.
 * @module model/Agent
 * @version 1.0.9
 */
export class Agent extends Person {
  /**
   * Constructs a new <code>Agent</code>.
   * Describes an order executor
   * @alias module:model/Agent
   * @class
   * @extends module:model/Person
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Agent} obj Optional instance to populate.
   * @return {module:model/Agent} The populated <code>Agent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Agent();
      Person.constructFromObject(data, obj);
      if (data.hasOwnProperty('phone'))
        obj.phone = ApiClient.convertToType(data['phone'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = Tags.constructFromObject(data['tags']);
      if (data.hasOwnProperty('rateable'))
        obj.rateable = Rateable.constructFromObject(data['rateable']);
    }
    return obj;
  }
}

/**
 * @member {String} phone
 */
Agent.prototype.phone = undefined;

/**
 * @member {String} email
 */
Agent.prototype.email = undefined;

/**
 * @member {module:model/Tags} tags
 */
Agent.prototype.tags = undefined;

/**
 * @member {module:model/Rateable} rateable
 */
Agent.prototype.rateable = undefined;


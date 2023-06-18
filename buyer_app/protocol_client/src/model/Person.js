/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Image} from './Image';
import {Name} from './Name';
import {Tags} from './Tags';

/**
 * The Person model module.
 * @module model/Person
 * @version 1.0.13
 */
export class Person {
  /**
   * Constructs a new <code>Person</code>.
   * Describes a person.
   * @alias module:model/Person
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person} obj Optional instance to populate.
   * @return {module:model/Person} The populated <code>Person</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Person();
      if (data.hasOwnProperty('name'))
        obj.name = Name.constructFromObject(data['name']);
      if (data.hasOwnProperty('image'))
        obj.image = Image.constructFromObject(data['image']);
      if (data.hasOwnProperty('dob'))
        obj.dob = ApiClient.convertToType(data['dob'], 'Date');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('cred'))
        obj.cred = ApiClient.convertToType(data['cred'], 'String');
      if (data.hasOwnProperty('tags'))
        obj.tags = Tags.constructFromObject(data['tags']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Name} name
 */
Person.prototype.name = undefined;

/**
 * @member {module:model/Image} image
 */
Person.prototype.image = undefined;

/**
 * @member {Date} dob
 */
Person.prototype.dob = undefined;

/**
 * Gender of something, typically a Person, but possibly also fictional characters, animals, etc. While Male and Female may be used, text strings are also acceptable for people who do not identify as a binary gender
 * @member {String} gender
 */
Person.prototype.gender = undefined;

/**
 * @member {String} cred
 */
Person.prototype.cred = undefined;

/**
 * @member {module:model/Tags} tags
 */
Person.prototype.tags = undefined;


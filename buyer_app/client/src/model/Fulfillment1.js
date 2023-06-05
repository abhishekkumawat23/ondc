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
import {End1} from './End1';

/**
 * The Fulfillment1 model module.
 * @module model/Fulfillment1
 * @version 1.0
 */
export class Fulfillment1 {
  /**
   * Constructs a new <code>Fulfillment1</code>.
   * @alias module:model/Fulfillment1
   * @class
   * @param id {String} 
   * @param type {String} 
   * @param state {String} 
   * @param tracking {String} 
   * @param agent {String} 
   * @param vehicle {String} 
   * @param start {String} 
   * @param end {module:model/End1} 
   * @param purpose {String} 
   * @param customer {Object} 
   * @param tags {String} 
   */
  constructor(id, type, state, tracking, agent, vehicle, start, end, purpose, customer, tags) {
    this.id = id;
    this.type = type;
    this.state = state;
    this.tracking = tracking;
    this.agent = agent;
    this.vehicle = vehicle;
    this.start = start;
    this.end = end;
    this.purpose = purpose;
    this.customer = customer;
    this.tags = tags;
  }

  /**
   * Constructs a <code>Fulfillment1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fulfillment1} obj Optional instance to populate.
   * @return {module:model/Fulfillment1} The populated <code>Fulfillment1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Fulfillment1();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('state'))
        obj.state = ApiClient.convertToType(data['state'], 'String');
      if (data.hasOwnProperty('tracking'))
        obj.tracking = ApiClient.convertToType(data['tracking'], 'String');
      if (data.hasOwnProperty('agent'))
        obj.agent = ApiClient.convertToType(data['agent'], 'String');
      if (data.hasOwnProperty('vehicle'))
        obj.vehicle = ApiClient.convertToType(data['vehicle'], 'String');
      if (data.hasOwnProperty('start'))
        obj.start = ApiClient.convertToType(data['start'], 'String');
      if (data.hasOwnProperty('end'))
        obj.end = End1.constructFromObject(data['end']);
      if (data.hasOwnProperty('purpose'))
        obj.purpose = ApiClient.convertToType(data['purpose'], 'String');
      if (data.hasOwnProperty('customer'))
        obj.customer = ApiClient.convertToType(data['customer'], Object);
      if (data.hasOwnProperty('tags'))
        obj.tags = ApiClient.convertToType(data['tags'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
Fulfillment1.prototype.id = undefined;

/**
 * @member {String} type
 */
Fulfillment1.prototype.type = undefined;

/**
 * @member {String} state
 */
Fulfillment1.prototype.state = undefined;

/**
 * @member {String} tracking
 */
Fulfillment1.prototype.tracking = undefined;

/**
 * @member {String} agent
 */
Fulfillment1.prototype.agent = undefined;

/**
 * @member {String} vehicle
 */
Fulfillment1.prototype.vehicle = undefined;

/**
 * @member {String} start
 */
Fulfillment1.prototype.start = undefined;

/**
 * @member {module:model/End1} end
 */
Fulfillment1.prototype.end = undefined;

/**
 * @member {String} purpose
 */
Fulfillment1.prototype.purpose = undefined;

/**
 * @member {Object} customer
 */
Fulfillment1.prototype.customer = undefined;

/**
 * @member {String} tags
 */
Fulfillment1.prototype.tags = undefined;

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

/**
 * The Context11 model module.
 * @module model/Context11
 * @version 1.0
 */
export class Context11 {
  /**
   * Constructs a new <code>Context11</code>.
   * @alias module:model/Context11
   * @class
   * @param domain {String} 
   * @param country {String} 
   * @param city {String} 
   * @param action {String} 
   * @param coreVersion {String} 
   * @param bapId {String} 
   * @param bapUri {String} 
   * @param bppId {String} 
   * @param transactionId {String} 
   * @param messageId {String} 
   * @param timestamp {String} 
   */
  constructor(domain, country, city, action, coreVersion, bapId, bapUri, bppId, transactionId, messageId, timestamp) {
    this.domain = domain;
    this.country = country;
    this.city = city;
    this.action = action;
    this.coreVersion = coreVersion;
    this.bapId = bapId;
    this.bapUri = bapUri;
    this.bppId = bppId;
    this.transactionId = transactionId;
    this.messageId = messageId;
    this.timestamp = timestamp;
  }

  /**
   * Constructs a <code>Context11</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context11} obj Optional instance to populate.
   * @return {module:model/Context11} The populated <code>Context11</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Context11();
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('core_version'))
        obj.coreVersion = ApiClient.convertToType(data['core_version'], 'String');
      if (data.hasOwnProperty('bap_id'))
        obj.bapId = ApiClient.convertToType(data['bap_id'], 'String');
      if (data.hasOwnProperty('bap_uri'))
        obj.bapUri = ApiClient.convertToType(data['bap_uri'], 'String');
      if (data.hasOwnProperty('bpp_id'))
        obj.bppId = ApiClient.convertToType(data['bpp_id'], 'String');
      if (data.hasOwnProperty('transaction_id'))
        obj.transactionId = ApiClient.convertToType(data['transaction_id'], 'String');
      if (data.hasOwnProperty('message_id'))
        obj.messageId = ApiClient.convertToType(data['message_id'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} domain
 */
Context11.prototype.domain = undefined;

/**
 * @member {String} country
 */
Context11.prototype.country = undefined;

/**
 * @member {String} city
 */
Context11.prototype.city = undefined;

/**
 * @member {String} action
 */
Context11.prototype.action = undefined;

/**
 * @member {String} coreVersion
 */
Context11.prototype.coreVersion = undefined;

/**
 * @member {String} bapId
 */
Context11.prototype.bapId = undefined;

/**
 * @member {String} bapUri
 */
Context11.prototype.bapUri = undefined;

/**
 * @member {String} bppId
 */
Context11.prototype.bppId = undefined;

/**
 * @member {String} transactionId
 */
Context11.prototype.transactionId = undefined;

/**
 * @member {String} messageId
 */
Context11.prototype.messageId = undefined;

/**
 * @member {String} timestamp
 */
Context11.prototype.timestamp = undefined;


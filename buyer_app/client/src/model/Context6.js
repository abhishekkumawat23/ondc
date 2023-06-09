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
 * The Context6 model module.
 * @module model/Context6
 * @version 1.0
 */
export class Context6 {
  /**
   * Constructs a new <code>Context6</code>.
   * @alias module:model/Context6
   * @class
   * @param transactionId {String} 
   * @param country {String} 
   * @param bppId {String} 
   * @param city {String} 
   * @param messageId {String} 
   * @param coreVersion {String} 
   * @param bapId {String} 
   * @param domain {String} 
   * @param bppUri {String} 
   * @param action {String} 
   * @param bapUri {String} 
   * @param key {String} 
   * @param timestamp {String} 
   */
  constructor(transactionId, country, bppId, city, messageId, coreVersion, bapId, domain, bppUri, action, bapUri, key, timestamp) {
    this.transactionId = transactionId;
    this.country = country;
    this.bppId = bppId;
    this.city = city;
    this.messageId = messageId;
    this.coreVersion = coreVersion;
    this.bapId = bapId;
    this.domain = domain;
    this.bppUri = bppUri;
    this.action = action;
    this.bapUri = bapUri;
    this.key = key;
    this.timestamp = timestamp;
  }

  /**
   * Constructs a <code>Context6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context6} obj Optional instance to populate.
   * @return {module:model/Context6} The populated <code>Context6</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Context6();
      if (data.hasOwnProperty('transaction_id'))
        obj.transactionId = ApiClient.convertToType(data['transaction_id'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('bpp_id'))
        obj.bppId = ApiClient.convertToType(data['bpp_id'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('message_id'))
        obj.messageId = ApiClient.convertToType(data['message_id'], 'String');
      if (data.hasOwnProperty('core_version'))
        obj.coreVersion = ApiClient.convertToType(data['core_version'], 'String');
      if (data.hasOwnProperty('bap_id'))
        obj.bapId = ApiClient.convertToType(data['bap_id'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('bpp_uri'))
        obj.bppUri = ApiClient.convertToType(data['bpp_uri'], 'String');
      if (data.hasOwnProperty('action'))
        obj.action = ApiClient.convertToType(data['action'], 'String');
      if (data.hasOwnProperty('bap_uri'))
        obj.bapUri = ApiClient.convertToType(data['bap_uri'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} transactionId
 */
Context6.prototype.transactionId = undefined;

/**
 * @member {String} country
 */
Context6.prototype.country = undefined;

/**
 * @member {String} bppId
 */
Context6.prototype.bppId = undefined;

/**
 * @member {String} city
 */
Context6.prototype.city = undefined;

/**
 * @member {String} messageId
 */
Context6.prototype.messageId = undefined;

/**
 * @member {String} coreVersion
 */
Context6.prototype.coreVersion = undefined;

/**
 * @member {String} bapId
 */
Context6.prototype.bapId = undefined;

/**
 * @member {String} domain
 */
Context6.prototype.domain = undefined;

/**
 * @member {String} bppUri
 */
Context6.prototype.bppUri = undefined;

/**
 * @member {String} action
 */
Context6.prototype.action = undefined;

/**
 * @member {String} bapUri
 */
Context6.prototype.bapUri = undefined;

/**
 * @member {String} key
 */
Context6.prototype.key = undefined;

/**
 * @member {String} timestamp
 */
Context6.prototype.timestamp = undefined;


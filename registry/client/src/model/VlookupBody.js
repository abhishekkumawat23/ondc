/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {VlookupSearchParameters} from './VlookupSearchParameters';

/**
 * The VlookupBody model module.
 * @module model/VlookupBody
 * @version 2.0.5
 */
export class VlookupBody {
  /**
   * Constructs a new <code>VlookupBody</code>.
   * @alias module:model/VlookupBody
   * @class
   * @param senderSubscriberId {String} A unique ID describing a subscriber on a network.
   * @param requestId {String} Country code as per ISO 3166-1 and ISO 3166-2 format
   * @param timestamp {Date} request timestamp to avoid replay attack
   * @param searchParameters {module:model/VlookupSearchParameters} 
   * @param signature {String} signature
   */
  constructor(senderSubscriberId, requestId, timestamp, searchParameters, signature) {
    this.senderSubscriberId = senderSubscriberId;
    this.requestId = requestId;
    this.timestamp = timestamp;
    this.searchParameters = searchParameters;
    this.signature = signature;
  }

  /**
   * Constructs a <code>VlookupBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VlookupBody} obj Optional instance to populate.
   * @return {module:model/VlookupBody} The populated <code>VlookupBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new VlookupBody();
      if (data.hasOwnProperty('sender_subscriber_id'))
        obj.senderSubscriberId = ApiClient.convertToType(data['sender_subscriber_id'], 'String');
      if (data.hasOwnProperty('request_id'))
        obj.requestId = ApiClient.convertToType(data['request_id'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Date');
      if (data.hasOwnProperty('search_parameters'))
        obj.searchParameters = VlookupSearchParameters.constructFromObject(data['search_parameters']);
      if (data.hasOwnProperty('signature'))
        obj.signature = ApiClient.convertToType(data['signature'], 'String');
    }
    return obj;
  }
}

/**
 * A unique ID describing a subscriber on a network.
 * @member {String} senderSubscriberId
 */
VlookupBody.prototype.senderSubscriberId = undefined;

/**
 * Country code as per ISO 3166-1 and ISO 3166-2 format
 * @member {String} requestId
 */
VlookupBody.prototype.requestId = undefined;

/**
 * request timestamp to avoid replay attack
 * @member {Date} timestamp
 */
VlookupBody.prototype.timestamp = undefined;

/**
 * @member {module:model/VlookupSearchParameters} searchParameters
 */
VlookupBody.prototype.searchParameters = undefined;

/**
 * signature
 * @member {String} signature
 */
VlookupBody.prototype.signature = undefined;

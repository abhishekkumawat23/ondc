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

/**
 * The InlineResponse2002 model module.
 * @module model/InlineResponse2002
 * @version 2.0.5
 */
export class InlineResponse2002 {
  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2002();
      if (data.hasOwnProperty('subscriber_id'))
        obj.subscriberId = ApiClient.convertToType(data['subscriber_id'], 'String');
      if (data.hasOwnProperty('ukId'))
        obj.ukId = ApiClient.convertToType(data['ukId'], 'String');
      if (data.hasOwnProperty('br_id'))
        obj.brId = ApiClient.convertToType(data['br_id'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('city'))
        obj.city = ApiClient.convertToType(data['city'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = ApiClient.convertToType(data['domain'], 'String');
      if (data.hasOwnProperty('signing_public_key'))
        obj.signingPublicKey = ApiClient.convertToType(data['signing_public_key'], 'String');
      if (data.hasOwnProperty('encr_public_key'))
        obj.encrPublicKey = ApiClient.convertToType(data['encr_public_key'], 'String');
      if (data.hasOwnProperty('valid_from'))
        obj.validFrom = ApiClient.convertToType(data['valid_from'], 'String');
      if (data.hasOwnProperty('valid_until'))
        obj.validUntil = ApiClient.convertToType(data['valid_until'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'String');
    }
    return obj;
  }
}

/**
 * A unique ID describing a subscriber on a network.
 * @member {String} subscriberId
 */
InlineResponse2002.prototype.subscriberId = undefined;

/**
 * UUID.
 * @member {String} ukId
 */
InlineResponse2002.prototype.ukId = undefined;

/**
 * UUID.
 * @member {String} brId
 */
InlineResponse2002.prototype.brId = undefined;

/**
 * Country code
 * @member {String} country
 */
InlineResponse2002.prototype.country = undefined;

/**
 * City code
 * @member {String} city
 */
InlineResponse2002.prototype.city = undefined;

/**
 * Industry domain of the subscriber.
 * @member {String} domain
 */
InlineResponse2002.prototype.domain = undefined;

/**
 * Signing Public Key
 * @member {String} signingPublicKey
 */
InlineResponse2002.prototype.signingPublicKey = undefined;

/**
 * Encryption Public Key
 * @member {String} encrPublicKey
 */
InlineResponse2002.prototype.encrPublicKey = undefined;

/**
 * Keys valid from
 * @member {String} validFrom
 */
InlineResponse2002.prototype.validFrom = undefined;

/**
 * Keys valid until
 * @member {String} validUntil
 */
InlineResponse2002.prototype.validUntil = undefined;

/**
 * Created timestamp
 * @member {String} created
 */
InlineResponse2002.prototype.created = undefined;

/**
 * Updated timestamp
 * @member {String} updated
 */
InlineResponse2002.prototype.updated = undefined;


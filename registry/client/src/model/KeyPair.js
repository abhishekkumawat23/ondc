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
import {ApiClient} from '../ApiClient.js';

/**
 * The KeyPair model module.
 * @module model/KeyPair
 * @version 2.0.5
 */
export class KeyPair {
  /**
   * Constructs a new <code>KeyPair</code>.
   * @alias module:model/KeyPair
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>KeyPair</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KeyPair} obj Optional instance to populate.
   * @return {module:model/KeyPair} The populated <code>KeyPair</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new KeyPair();
      if (data.hasOwnProperty('signing_public_key'))
        obj.signingPublicKey = ApiClient.convertToType(data['signing_public_key'], 'Blob');
      if (data.hasOwnProperty('encryption_public_key'))
        obj.encryptionPublicKey = ApiClient.convertToType(data['encryption_public_key'], 'Blob');
      if (data.hasOwnProperty('valid_from'))
        obj.validFrom = ApiClient.convertToType(data['valid_from'], 'Date');
      if (data.hasOwnProperty('valid_until'))
        obj.validUntil = ApiClient.convertToType(data['valid_until'], 'Date');
    }
    return obj;
  }
}

/**
 * @member {Blob} signingPublicKey
 */
KeyPair.prototype.signingPublicKey = undefined;

/**
 * @member {Blob} encryptionPublicKey
 */
KeyPair.prototype.encryptionPublicKey = undefined;

/**
 * use IST time zone
 * @member {Date} validFrom
 */
KeyPair.prototype.validFrom = undefined;

/**
 * use IST time zone
 * @member {Date} validUntil
 */
KeyPair.prototype.validUntil = undefined;


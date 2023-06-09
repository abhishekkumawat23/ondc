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
import {Citypropertiescode} from './Citypropertiescode';
import {Countrypropertiescode} from './Countrypropertiescode';
import {Domain} from './Domain';

/**
 * The Subscriber model module.
 * @module model/Subscriber
 * @version 1.0.29
 */
export class Subscriber {
  /**
   * Constructs a new <code>Subscriber</code>.
   * Any entity which wants to authenticate itself on a network. This can be a Buyer App, Seller App or Gateway.
   * @alias module:model/Subscriber
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Subscriber</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscriber} obj Optional instance to populate.
   * @return {module:model/Subscriber} The populated <code>Subscriber</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Subscriber();
      if (data.hasOwnProperty('subscriber_id'))
        obj.subscriberId = ApiClient.convertToType(data['subscriber_id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('cb_url'))
        obj.cbUrl = ApiClient.convertToType(data['cb_url'], 'String');
      if (data.hasOwnProperty('domain'))
        obj.domain = Domain.constructFromObject(data['domain']);
      if (data.hasOwnProperty('city'))
        obj.city = Citypropertiescode.constructFromObject(data['city']);
      if (data.hasOwnProperty('country'))
        obj.country = Countrypropertiescode.constructFromObject(data['country']);
      if (data.hasOwnProperty('signing_public_key'))
        obj.signingPublicKey = ApiClient.convertToType(data['signing_public_key'], 'String');
      if (data.hasOwnProperty('encryption_public_key'))
        obj.encryptionPublicKey = ApiClient.convertToType(data['encryption_public_key'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Date');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'Date');
      if (data.hasOwnProperty('expires'))
        obj.expires = ApiClient.convertToType(data['expires'], 'Date');
    }
    return obj;
  }
}

/**
 * Registered domain name of the subscriber. Must have a valid SSL certificate issued by a Certificate Authority of the operating region
 * @member {String} subscriberId
 */
Subscriber.prototype.subscriberId = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Subscriber.TypeEnum = {
  /**
   * value: "bap"
   * @const
   */
  bap: "bap",

  /**
   * value: "bpp"
   * @const
   */
  bpp: "bpp",

  /**
   * value: "bg"
   * @const
   */
  bg: "bg"
};
/**
 * @member {module:model/Subscriber.TypeEnum} type
 */
Subscriber.prototype.type = undefined;

/**
 * Callback URL of the subscriber. The Registry will call this URL's on_subscribe API to validate the subscriber\\'s credentials
 * @member {String} cbUrl
 */
Subscriber.prototype.cbUrl = undefined;

/**
 * @member {module:model/Domain} domain
 */
Subscriber.prototype.domain = undefined;

/**
 * @member {module:model/Citypropertiescode} city
 */
Subscriber.prototype.city = undefined;

/**
 * @member {module:model/Countrypropertiescode} country
 */
Subscriber.prototype.country = undefined;

/**
 * Signing Public key of the subscriber. <br/><br/>Any subscriber platform (Buyer App, Seller App, Gateway) who wants to transact on the network must digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the transport layer header. In case of ```HTTP``` it is the ```Authorization``` header. <br><br/>The ```Authorization``` will be used to validate the signature of a Buyer App or Seller App.<br/><br/>Furthermore, if an API call is being proxied or multicast by a ONDC Gateway, the Gateway must use it\\'s signing key to digitally sign the ```requestBody``` using the corresponding private key of this public key and send it in the ```X-Gateway-Authorization``` header.
 * @member {String} signingPublicKey
 */
Subscriber.prototype.signingPublicKey = undefined;

/**
 * Encryption public key of the Buyer App. Any Seller App must encrypt the ```requestBody.message``` value of the ```on_search``` API using this public key.
 * @member {String} encryptionPublicKey
 */
Subscriber.prototype.encryptionPublicKey = undefined;

/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
Subscriber.StatusEnum = {
  /**
   * value: "INITIATED"
   * @const
   */
  INITIATED: "INITIATED",

  /**
   * value: "UNDER_SUBSCRIPTION"
   * @const
   */
  UNDER_SUBSCRIPTION: "UNDER_SUBSCRIPTION",

  /**
   * value: "SUBSCRIBED"
   * @const
   */
  SUBSCRIBED: "SUBSCRIBED",

  /**
   * value: "INVALID_SSL"
   * @const
   */
  INVALID_SSL: "INVALID_SSL",

  /**
   * value: "UNSUBSCRIBED"
   * @const
   */
  UNSUBSCRIBED: "UNSUBSCRIBED"
};
/**
 * @member {module:model/Subscriber.StatusEnum} status
 */
Subscriber.prototype.status = undefined;

/**
 * Timestamp when a subscriber was added to the registry with status = INITIATED
 * @member {Date} created
 */
Subscriber.prototype.created = undefined;

/**
 * @member {Date} updated
 */
Subscriber.prototype.updated = undefined;

/**
 * Expiry timestamp in UTC derived from the ```lease_time``` of the subscriber
 * @member {Date} expires
 */
Subscriber.prototype.expires = undefined;


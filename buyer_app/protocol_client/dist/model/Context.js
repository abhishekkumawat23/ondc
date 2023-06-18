"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;
var _ApiClient = require("../ApiClient");
var _CityCode = require("./CityCode");
var _CountryCode = require("./CountryCode");
var _Domain = require("./Domain");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
/**
 * The Context model module.
 * @module model/Context
 * @version 1.0.13
 */
var Context = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Context</code>.
   * Describes a ONDC message context
   * @alias module:model/Context
   * @class
   * @param domain {module:model/Domain} 
   * @param country {module:model/CountryCode} 
   * @param city {module:model/CityCode} 
   * @param action {module:model/Context.ActionEnum} Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol
   * @param coreVersion {String} Version of ONDC core API specification being used
   * @param bapId {String} Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App
   * @param bapUri {String} URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id
   * @param transactionId {String} This is a unique value which persists across all API calls from search through confirm
   * @param messageId {String} This is a unique value which persists during a request / callback cycle
   * @param timestamp {Date} Time of request generation in RFC3339 format
   */
  function Context(domain, country, city, action, coreVersion, bapId, bapUri, transactionId, messageId, timestamp) {
    _classCallCheck(this, Context);
    this.domain = domain;
    this.country = country;
    this.city = city;
    this.action = action;
    this.coreVersion = coreVersion;
    this.bapId = bapId;
    this.bapUri = bapUri;
    this.transactionId = transactionId;
    this.messageId = messageId;
    this.timestamp = timestamp;
  }

  /**
   * Constructs a <code>Context</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Context} obj Optional instance to populate.
   * @return {module:model/Context} The populated <code>Context</code> instance.
   */
  _createClass(Context, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Context();
        if (data.hasOwnProperty('domain')) obj.domain = _Domain.Domain.constructFromObject(data['domain']);
        if (data.hasOwnProperty('country')) obj.country = _CountryCode.CountryCode.constructFromObject(data['country']);
        if (data.hasOwnProperty('city')) obj.city = _CityCode.CityCode.constructFromObject(data['city']);
        if (data.hasOwnProperty('action')) obj.action = _ApiClient.ApiClient.convertToType(data['action'], 'String');
        if (data.hasOwnProperty('core_version')) obj.coreVersion = _ApiClient.ApiClient.convertToType(data['core_version'], 'String');
        if (data.hasOwnProperty('bap_id')) obj.bapId = _ApiClient.ApiClient.convertToType(data['bap_id'], 'String');
        if (data.hasOwnProperty('bap_uri')) obj.bapUri = _ApiClient.ApiClient.convertToType(data['bap_uri'], 'String');
        if (data.hasOwnProperty('bpp_id')) obj.bppId = _ApiClient.ApiClient.convertToType(data['bpp_id'], 'String');
        if (data.hasOwnProperty('bpp_uri')) obj.bppUri = _ApiClient.ApiClient.convertToType(data['bpp_uri'], 'String');
        if (data.hasOwnProperty('transaction_id')) obj.transactionId = _ApiClient.ApiClient.convertToType(data['transaction_id'], 'String');
        if (data.hasOwnProperty('message_id')) obj.messageId = _ApiClient.ApiClient.convertToType(data['message_id'], 'String');
        if (data.hasOwnProperty('timestamp')) obj.timestamp = _ApiClient.ApiClient.convertToType(data['timestamp'], 'Date');
        if (data.hasOwnProperty('key')) obj.key = _ApiClient.ApiClient.convertToType(data['key'], 'String');
        if (data.hasOwnProperty('ttl')) obj.ttl = _ApiClient.ApiClient.convertToType(data['ttl'], 'String');
      }
      return obj;
    }
  }]);
  return Context;
}();
/**
 * @member {module:model/Domain} domain
 */
exports.Context = Context;
Context.prototype.domain = undefined;

/**
 * @member {module:model/CountryCode} country
 */
Context.prototype.country = undefined;

/**
 * @member {module:model/CityCode} city
 */
Context.prototype.city = undefined;

/**
 * Allowed values for the <code>action</code> property.
 * @enum {String}
 * @readonly
 */
Context.ActionEnum = {
  /**
   * value: "search"
   * @const
   */
  search: "search",
  /**
   * value: "select"
   * @const
   */
  select: "select",
  /**
   * value: "init"
   * @const
   */
  init: "init",
  /**
   * value: "confirm"
   * @const
   */
  confirm: "confirm",
  /**
   * value: "update"
   * @const
   */
  update: "update",
  /**
   * value: "status"
   * @const
   */
  status: "status",
  /**
   * value: "track"
   * @const
   */
  track: "track",
  /**
   * value: "cancel"
   * @const
   */
  cancel: "cancel",
  /**
   * value: "rating"
   * @const
   */
  rating: "rating",
  /**
   * value: "support"
   * @const
   */
  support: "support",
  /**
   * value: "on_search"
   * @const
   */
  onSearch: "on_search",
  /**
   * value: "on_select"
   * @const
   */
  onSelect: "on_select",
  /**
   * value: "on_init"
   * @const
   */
  onInit: "on_init",
  /**
   * value: "on_confirm"
   * @const
   */
  onConfirm: "on_confirm",
  /**
   * value: "on_update"
   * @const
   */
  onUpdate: "on_update",
  /**
   * value: "on_status"
   * @const
   */
  onStatus: "on_status",
  /**
   * value: "on_track"
   * @const
   */
  onTrack: "on_track",
  /**
   * value: "on_cancel"
   * @const
   */
  onCancel: "on_cancel",
  /**
   * value: "on_rating"
   * @const
   */
  onRating: "on_rating",
  /**
   * value: "on_support"
   * @const
   */
  onSupport: "on_support"
};
/**
 * Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol
 * @member {module:model/Context.ActionEnum} action
 */
Context.prototype.action = undefined;

/**
 * Version of ONDC core API specification being used
 * @member {String} coreVersion
 */
Context.prototype.coreVersion = undefined;

/**
 * Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App
 * @member {String} bapId
 */
Context.prototype.bapId = undefined;

/**
 * URI of the Buyer App for accepting callbacks. Must have the same domain name as the bap_id
 * @member {String} bapUri
 */
Context.prototype.bapUri = undefined;

/**
 * Unique id of the Seller App. By default it is the fully qualified domain name of the Seller App, mandatory for all peer-to-peer API requests, i.e. except search and on_search
 * @member {String} bppId
 */
Context.prototype.bppId = undefined;

/**
 * URI of the Seller App. Must have the same domain name as the bap_id, mandatory for all peer-to-peer API requests, i.e. except search and on_search
 * @member {String} bppUri
 */
Context.prototype.bppUri = undefined;

/**
 * This is a unique value which persists across all API calls from search through confirm
 * @member {String} transactionId
 */
Context.prototype.transactionId = undefined;

/**
 * This is a unique value which persists during a request / callback cycle
 * @member {String} messageId
 */
Context.prototype.messageId = undefined;

/**
 * Time of request generation in RFC3339 format
 * @member {Date} timestamp
 */
Context.prototype.timestamp = undefined;

/**
 * The encryption public key of the sender
 * @member {String} key
 */
Context.prototype.key = undefined;

/**
 * Timestamp for which this message holds valid in ISO8601 durations format - Outer limit for ttl for search, select, init, confirm, status, track, cancel, update, rating, support is 'PT30S' which is 30 seconds, different buyer apps can change this to meet their UX requirements, but it shouldn't exceed this outer limit
 * @member {String} ttl
 */
Context.prototype.ttl = undefined;
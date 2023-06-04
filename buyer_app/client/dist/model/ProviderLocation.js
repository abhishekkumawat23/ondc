"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProviderLocation = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("./Address2");
var _City = require("./City");
var _Country = require("./Country");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
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
/**
 * The ProviderLocation model module.
 * @module model/ProviderLocation
 * @version 1.0
 */
var ProviderLocation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProviderLocation</code>.
   * @alias module:model/ProviderLocation
   * @class
   * @param country {module:model/Country} 
   * @param stationCode {String} 
   * @param address {module:model/Address2} 
   * @param id {String} 
   * @param gps {String} 
   * @param city {module:model/City} 
   */
  function ProviderLocation(country, stationCode, address, id, gps, city) {
    _classCallCheck(this, ProviderLocation);
    this.country = country;
    this.stationCode = stationCode;
    this.address = address;
    this.id = id;
    this.gps = gps;
    this.city = city;
  }

  /**
   * Constructs a <code>ProviderLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProviderLocation} obj Optional instance to populate.
   * @return {module:model/ProviderLocation} The populated <code>ProviderLocation</code> instance.
   */
  _createClass(ProviderLocation, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProviderLocation();
        if (data.hasOwnProperty('country')) obj.country = _Country.Country.constructFromObject(data['country']);
        if (data.hasOwnProperty('station_code')) obj.stationCode = _ApiClient.ApiClient.convertToType(data['station_code'], 'String');
        if (data.hasOwnProperty('address')) obj.address = _Address.Address2.constructFromObject(data['address']);
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('gps')) obj.gps = _ApiClient.ApiClient.convertToType(data['gps'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _City.City.constructFromObject(data['city']);
      }
      return obj;
    }
  }]);
  return ProviderLocation;
}();
/**
 * @member {module:model/Country} country
 */
exports.ProviderLocation = ProviderLocation;
ProviderLocation.prototype.country = undefined;

/**
 * @member {String} stationCode
 */
ProviderLocation.prototype.stationCode = undefined;

/**
 * @member {module:model/Address2} address
 */
ProviderLocation.prototype.address = undefined;

/**
 * @member {String} id
 */
ProviderLocation.prototype.id = undefined;

/**
 * @member {String} gps
 */
ProviderLocation.prototype.gps = undefined;

/**
 * @member {module:model/City} city
 */
ProviderLocation.prototype.city = undefined;
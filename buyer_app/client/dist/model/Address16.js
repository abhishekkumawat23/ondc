"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address16 = void 0;
var _ApiClient = require("../ApiClient");
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
 * The Address16 model module.
 * @module model/Address16
 * @version 1.0
 */
var Address16 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address16</code>.
   * @alias module:model/Address16
   * @class
   * @param areaCode {String} 
   * @param building {String} 
   * @param city {String} 
   * @param country {String} 
   * @param door {String} 
   * @param locality {String} 
   * @param state {String} 
   * @param street {String} 
   */
  function Address16(areaCode, building, city, country, door, locality, state, street) {
    _classCallCheck(this, Address16);
    this.areaCode = areaCode;
    this.building = building;
    this.city = city;
    this.country = country;
    this.door = door;
    this.locality = locality;
    this.state = state;
    this.street = street;
  }

  /**
   * Constructs a <code>Address16</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address16} obj Optional instance to populate.
   * @return {module:model/Address16} The populated <code>Address16</code> instance.
   */
  _createClass(Address16, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address16();
        if (data.hasOwnProperty('areaCode')) obj.areaCode = _ApiClient.ApiClient.convertToType(data['areaCode'], 'String');
        if (data.hasOwnProperty('building')) obj.building = _ApiClient.ApiClient.convertToType(data['building'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('door')) obj.door = _ApiClient.ApiClient.convertToType(data['door'], 'String');
        if (data.hasOwnProperty('locality')) obj.locality = _ApiClient.ApiClient.convertToType(data['locality'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
      }
      return obj;
    }
  }]);
  return Address16;
}();
/**
 * @member {String} areaCode
 */
exports.Address16 = Address16;
Address16.prototype.areaCode = undefined;

/**
 * @member {String} building
 */
Address16.prototype.building = undefined;

/**
 * @member {String} city
 */
Address16.prototype.city = undefined;

/**
 * @member {String} country
 */
Address16.prototype.country = undefined;

/**
 * @member {String} door
 */
Address16.prototype.door = undefined;

/**
 * @member {String} locality
 */
Address16.prototype.locality = undefined;

/**
 * @member {String} state
 */
Address16.prototype.state = undefined;

/**
 * @member {String} street
 */
Address16.prototype.street = undefined;
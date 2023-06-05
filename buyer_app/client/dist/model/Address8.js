"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address8 = void 0;
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
 * The Address8 model module.
 * @module model/Address8
 * @version 1.0
 */
var Address8 = /*#__PURE__*/function () {
  // TODO(7): Check why we area code came two times.
  /**
   * Constructs a new <code>Address8</code>.
   * @alias module:model/Address8
   * @class
   * @param door {String} 
   * @param country {String}
   * @param city {String} 
   * @param street {String} 
   * @param areaCode {String} 
   * @param name {String} 
   * @param locality {String} 
   * @param ward {String} 
   * @param state {String} 
   * @param building {String} 
   */
  function Address8(door, country, city, street, areaCode, name, locality, ward, state, building) {
    _classCallCheck(this, Address8);
    this.door = door;
    this.country = country;
    this.city = city;
    this.street = street;
    this.areaCode = areaCode;
    this.name = name;
    this.locality = locality;
    this.ward = ward;
    this.state = state;
    this.building = building;
  }

  /**
   * Constructs a <code>Address8</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address8} obj Optional instance to populate.
   * @return {module:model/Address8} The populated <code>Address8</code> instance.
   */
  _createClass(Address8, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address8();
        if (data.hasOwnProperty('door')) obj.door = _ApiClient.ApiClient.convertToType(data['door'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('areaCode')) obj.areaCode = _ApiClient.ApiClient.convertToType(data['areaCode'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
        if (data.hasOwnProperty('area_code')) obj.areaCode = _ApiClient.ApiClient.convertToType(data['area_code'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('locality')) obj.locality = _ApiClient.ApiClient.convertToType(data['locality'], 'String');
        if (data.hasOwnProperty('ward')) obj.ward = _ApiClient.ApiClient.convertToType(data['ward'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('building')) obj.building = _ApiClient.ApiClient.convertToType(data['building'], 'String');
      }
      return obj;
    }
  }]);
  return Address8;
}();
/**
 * @member {String} door
 */
exports.Address8 = Address8;
Address8.prototype.door = undefined;

/**
 * @member {String} country
 */
Address8.prototype.country = undefined;

/**
 * @member {String} areaCode
 */
Address8.prototype.areaCode = undefined;

/**
 * @member {String} city
 */
Address8.prototype.city = undefined;

/**
 * @member {String} street
 */
Address8.prototype.street = undefined;

// TODO(7): Add it again after figuring out why it occuirred two times.
// /**
//  * @member {String} areaCode
//  */
// Address8.prototype.areaCode = undefined;

/**
 * @member {String} name
 */
Address8.prototype.name = undefined;

/**
 * @member {String} locality
 */
Address8.prototype.locality = undefined;

/**
 * @member {String} ward
 */
Address8.prototype.ward = undefined;

/**
 * @member {String} state
 */
Address8.prototype.state = undefined;

/**
 * @member {String} building
 */
Address8.prototype.building = undefined;
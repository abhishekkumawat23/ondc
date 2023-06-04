"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address21 = void 0;
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
 * The Address21 model module.
 * @module model/Address21
 * @version 1.0
 */
var Address21 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address21</code>.
   * @alias module:model/Address21
   * @class
   * @param door {String} 
   * @param name {String} 
   * @param building {String} 
   * @param street {String} 
   * @param locality {String} 
   * @param ward {String} 
   * @param city {String} 
   * @param state {String} 
   * @param country {String} 
   * @param areaCode {String} 
   */
  function Address21(door, name, building, street, locality, ward, city, state, country, areaCode) {
    _classCallCheck(this, Address21);
    this.door = door;
    this.name = name;
    this.building = building;
    this.street = street;
    this.locality = locality;
    this.ward = ward;
    this.city = city;
    this.state = state;
    this.country = country;
    this.areaCode = areaCode;
  }

  /**
   * Constructs a <code>Address21</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address21} obj Optional instance to populate.
   * @return {module:model/Address21} The populated <code>Address21</code> instance.
   */
  _createClass(Address21, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address21();
        if (data.hasOwnProperty('door')) obj.door = _ApiClient.ApiClient.convertToType(data['door'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('building')) obj.building = _ApiClient.ApiClient.convertToType(data['building'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
        if (data.hasOwnProperty('locality')) obj.locality = _ApiClient.ApiClient.convertToType(data['locality'], 'String');
        if (data.hasOwnProperty('ward')) obj.ward = _ApiClient.ApiClient.convertToType(data['ward'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('areaCode')) obj.areaCode = _ApiClient.ApiClient.convertToType(data['areaCode'], 'String');
      }
      return obj;
    }
  }]);
  return Address21;
}();
/**
 * @member {String} door
 */
exports.Address21 = Address21;
Address21.prototype.door = undefined;

/**
 * @member {String} name
 */
Address21.prototype.name = undefined;

/**
 * @member {String} building
 */
Address21.prototype.building = undefined;

/**
 * @member {String} street
 */
Address21.prototype.street = undefined;

/**
 * @member {String} locality
 */
Address21.prototype.locality = undefined;

/**
 * @member {String} ward
 */
Address21.prototype.ward = undefined;

/**
 * @member {String} city
 */
Address21.prototype.city = undefined;

/**
 * @member {String} state
 */
Address21.prototype.state = undefined;

/**
 * @member {String} country
 */
Address21.prototype.country = undefined;

/**
 * @member {String} areaCode
 */
Address21.prototype.areaCode = undefined;
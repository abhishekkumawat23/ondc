"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Address = void 0;
var _ApiClient = require("../ApiClient");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Gateway
                                                                                                                                                                                                                                                                                                                                                                                               * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.0
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.45
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
var Address = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address</code>.
   * Describes an address
   * @alias module:model/Address
   * @class
   */
  function Address() {
    _classCallCheck(this, Address);
  }

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
   */
  _createClass(Address, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address();
        if (data.hasOwnProperty('door')) obj.door = _ApiClient.ApiClient.convertToType(data['door'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('building')) obj.building = _ApiClient.ApiClient.convertToType(data['building'], 'String');
        if (data.hasOwnProperty('street')) obj.street = _ApiClient.ApiClient.convertToType(data['street'], 'String');
        if (data.hasOwnProperty('locality')) obj.locality = _ApiClient.ApiClient.convertToType(data['locality'], 'String');
        if (data.hasOwnProperty('ward')) obj.ward = _ApiClient.ApiClient.convertToType(data['ward'], 'String');
        if (data.hasOwnProperty('city')) obj.city = _ApiClient.ApiClient.convertToType(data['city'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('country')) obj.country = _ApiClient.ApiClient.convertToType(data['country'], 'String');
        if (data.hasOwnProperty('area_code')) obj.areaCode = _ApiClient.ApiClient.convertToType(data['area_code'], 'String');
      }
      return obj;
    }
  }]);
  return Address;
}();
/**
 * Door / Shop number of the address
 * @member {String} door
 */
exports.Address = Address;
Address.prototype.door = undefined;

/**
 * Name of address if applicable. Example, shop name
 * @member {String} name
 */
Address.prototype.name = undefined;

/**
 * Name of the building or block
 * @member {String} building
 */
Address.prototype.building = undefined;

/**
 * Street name or number
 * @member {String} street
 */
Address.prototype.street = undefined;

/**
 * Name of the locality, apartments
 * @member {String} locality
 */
Address.prototype.locality = undefined;

/**
 * Name or number of the ward if applicable
 * @member {String} ward
 */
Address.prototype.ward = undefined;

/**
 * City name
 * @member {String} city
 */
Address.prototype.city = undefined;

/**
 * State name
 * @member {String} state
 */
Address.prototype.state = undefined;

/**
 * Country name
 * @member {String} country
 */
Address.prototype.country = undefined;

/**
 * Area code. This can be Pincode, ZIP code or any equivalent
 * @member {String} areaCode
 */
Address.prototype.areaCode = undefined;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Addbillingaddressrequest = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("./Address11");
var _Organization = require("./Organization");
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
 * The Addbillingaddressrequest model module.
 * @module model/Addbillingaddressrequest
 * @version 1.0
 */
var Addbillingaddressrequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Addbillingaddressrequest</code>.
   * @alias module:model/Addbillingaddressrequest
   * @class
   * @param name {String} 
   * @param organization {module:model/Organization} 
   * @param locationId {String} 
   * @param address {module:model/Address11} 
   * @param email {String} 
   * @param phone {String} 
   * @param taxNumber {String} 
   */
  function Addbillingaddressrequest(name, organization, locationId, address, email, phone, taxNumber) {
    _classCallCheck(this, Addbillingaddressrequest);
    this.name = name;
    this.organization = organization;
    this.locationId = locationId;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.taxNumber = taxNumber;
  }

  /**
   * Constructs a <code>Addbillingaddressrequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Addbillingaddressrequest} obj Optional instance to populate.
   * @return {module:model/Addbillingaddressrequest} The populated <code>Addbillingaddressrequest</code> instance.
   */
  _createClass(Addbillingaddressrequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Addbillingaddressrequest();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('organization')) obj.organization = _Organization.Organization.constructFromObject(data['organization']);
        if (data.hasOwnProperty('locationId')) obj.locationId = _ApiClient.ApiClient.convertToType(data['locationId'], 'String');
        if (data.hasOwnProperty('address')) obj.address = _Address.Address11.constructFromObject(data['address']);
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('taxNumber')) obj.taxNumber = _ApiClient.ApiClient.convertToType(data['taxNumber'], 'String');
      }
      return obj;
    }
  }]);
  return Addbillingaddressrequest;
}();
/**
 * @member {String} name
 */
exports.Addbillingaddressrequest = Addbillingaddressrequest;
Addbillingaddressrequest.prototype.name = undefined;

/**
 * @member {module:model/Organization} organization
 */
Addbillingaddressrequest.prototype.organization = undefined;

/**
 * @member {String} locationId
 */
Addbillingaddressrequest.prototype.locationId = undefined;

/**
 * @member {module:model/Address11} address
 */
Addbillingaddressrequest.prototype.address = undefined;

/**
 * @member {String} email
 */
Addbillingaddressrequest.prototype.email = undefined;

/**
 * @member {String} phone
 */
Addbillingaddressrequest.prototype.phone = undefined;

/**
 * @member {String} taxNumber
 */
Addbillingaddressrequest.prototype.taxNumber = undefined;
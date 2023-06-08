"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Billing = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("./Address");
var _Organization = require("./Organization");
var _Time = require("./Time");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for logistics
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.9
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
 * The Billing model module.
 * @module model/Billing
 * @version 1.0.9
 */
var Billing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Billing</code>.
   * Describes a billing event
   * @alias module:model/Billing
   * @class
   * @param name {String} Personal details of the customer needed for billing.
   * @param phone {String} 
   * @param taxNumber {String} GST number
   */
  function Billing(name, phone, taxNumber) {
    _classCallCheck(this, Billing);
    this.name = name;
    this.phone = phone;
    this.taxNumber = taxNumber;
  }

  /**
   * Constructs a <code>Billing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Billing} obj Optional instance to populate.
   * @return {module:model/Billing} The populated <code>Billing</code> instance.
   */
  _createClass(Billing, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Billing();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('organization')) obj.organization = _Organization.Organization.constructFromObject(data['organization']);
        if (data.hasOwnProperty('address')) obj.address = _Address.Address.constructFromObject(data['address']);
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('time')) obj.time = _Time.Time.constructFromObject(data['time']);
        if (data.hasOwnProperty('tax_number')) obj.taxNumber = _ApiClient.ApiClient.convertToType(data['tax_number'], 'String');
        if (data.hasOwnProperty('created_at')) obj.createdAt = _ApiClient.ApiClient.convertToType(data['created_at'], 'Date');
        if (data.hasOwnProperty('updated_at')) obj.updatedAt = _ApiClient.ApiClient.convertToType(data['updated_at'], 'Date');
      }
      return obj;
    }
  }]);
  return Billing;
}();
/**
 * Personal details of the customer needed for billing.
 * @member {String} name
 */
exports.Billing = Billing;
Billing.prototype.name = undefined;

/**
 * @member {module:model/Organization} organization
 */
Billing.prototype.organization = undefined;

/**
 * @member {module:model/Address} address
 */
Billing.prototype.address = undefined;

/**
 * @member {String} email
 */
Billing.prototype.email = undefined;

/**
 * @member {String} phone
 */
Billing.prototype.phone = undefined;

/**
 * @member {module:model/Time} time
 */
Billing.prototype.time = undefined;

/**
 * GST number
 * @member {String} taxNumber
 */
Billing.prototype.taxNumber = undefined;

/**
 * @member {Date} createdAt
 */
Billing.prototype.createdAt = undefined;

/**
 * @member {Date} updatedAt
 */
Billing.prototype.updatedAt = undefined;
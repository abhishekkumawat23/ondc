"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Billing = void 0;
var _ApiClient = require("../ApiClient");
var _Address = require("./Address8");
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
 * The Billing model module.
 * @module model/Billing
 * @version 1.0
 */
var Billing = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Billing</code>.
   * @alias module:model/Billing
   * @class
   * @param address {module:model/Address8} 
   * @param phone {String} 
   * @param name {String} 
   * @param email {String} 
   */
  function Billing(address, phone, name, email) {
    _classCallCheck(this, Billing);
    this.address = address;
    this.phone = phone;
    this.name = name;
    this.email = email;
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
        if (data.hasOwnProperty('address')) obj.address = _Address.Address8.constructFromObject(data['address']);
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
      }
      return obj;
    }
  }]);
  return Billing;
}();
/**
 * @member {module:model/Address8} address
 */
exports.Billing = Billing;
Billing.prototype.address = undefined;

/**
 * @member {String} phone
 */
Billing.prototype.phone = undefined;

/**
 * @member {String} name
 */
Billing.prototype.name = undefined;

/**
 * @member {String} email
 */
Billing.prototype.email = undefined;
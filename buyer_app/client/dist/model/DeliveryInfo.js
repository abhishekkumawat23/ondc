"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveryInfo = void 0;
var _ApiClient = require("../ApiClient");
var _Location = require("./Location1");
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
 * The DeliveryInfo model module.
 * @module model/DeliveryInfo
 * @version 1.0
 */
var DeliveryInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeliveryInfo</code>.
   * @alias module:model/DeliveryInfo
   * @class
   * @param type {String} 
   * @param name {String} 
   * @param email {String} 
   * @param phone {String} 
   * @param location {module:model/Location1} 
   */
  function DeliveryInfo(type, name, email, phone, location) {
    _classCallCheck(this, DeliveryInfo);
    this.type = type;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.location = location;
  }

  /**
   * Constructs a <code>DeliveryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryInfo} obj Optional instance to populate.
   * @return {module:model/DeliveryInfo} The populated <code>DeliveryInfo</code> instance.
   */
  _createClass(DeliveryInfo, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeliveryInfo();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('location')) obj.location = _Location.Location1.constructFromObject(data['location']);
      }
      return obj;
    }
  }]);
  return DeliveryInfo;
}();
/**
 * @member {String} type
 */
exports.DeliveryInfo = DeliveryInfo;
DeliveryInfo.prototype.type = undefined;

/**
 * @member {String} name
 */
DeliveryInfo.prototype.name = undefined;

/**
 * @member {String} email
 */
DeliveryInfo.prototype.email = undefined;

/**
 * @member {String} phone
 */
DeliveryInfo.prototype.phone = undefined;

/**
 * @member {module:model/Location1} location
 */
DeliveryInfo.prototype.location = undefined;
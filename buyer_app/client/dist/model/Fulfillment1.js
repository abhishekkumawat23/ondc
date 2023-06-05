"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fulfillment1 = void 0;
var _ApiClient = require("../ApiClient");
var _End = require("./End1");
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
 * The Fulfillment1 model module.
 * @module model/Fulfillment1
 * @version 1.0
 */
var Fulfillment1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Fulfillment1</code>.
   * @alias module:model/Fulfillment1
   * @class
   * @param id {String} 
   * @param type {String} 
   * @param state {String} 
   * @param tracking {String} 
   * @param agent {String} 
   * @param vehicle {String} 
   * @param start {String} 
   * @param end {module:model/End1} 
   * @param purpose {String} 
   * @param customer {Object} 
   * @param tags {String} 
   */
  function Fulfillment1(id, type, state, tracking, agent, vehicle, start, end, purpose, customer, tags) {
    _classCallCheck(this, Fulfillment1);
    this.id = id;
    this.type = type;
    this.state = state;
    this.tracking = tracking;
    this.agent = agent;
    this.vehicle = vehicle;
    this.start = start;
    this.end = end;
    this.purpose = purpose;
    this.customer = customer;
    this.tags = tags;
  }

  /**
   * Constructs a <code>Fulfillment1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Fulfillment1} obj Optional instance to populate.
   * @return {module:model/Fulfillment1} The populated <code>Fulfillment1</code> instance.
   */
  _createClass(Fulfillment1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Fulfillment1();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('state')) obj.state = _ApiClient.ApiClient.convertToType(data['state'], 'String');
        if (data.hasOwnProperty('tracking')) obj.tracking = _ApiClient.ApiClient.convertToType(data['tracking'], 'String');
        if (data.hasOwnProperty('agent')) obj.agent = _ApiClient.ApiClient.convertToType(data['agent'], 'String');
        if (data.hasOwnProperty('vehicle')) obj.vehicle = _ApiClient.ApiClient.convertToType(data['vehicle'], 'String');
        if (data.hasOwnProperty('start')) obj.start = _ApiClient.ApiClient.convertToType(data['start'], 'String');
        if (data.hasOwnProperty('end')) obj.end = _End.End1.constructFromObject(data['end']);
        if (data.hasOwnProperty('purpose')) obj.purpose = _ApiClient.ApiClient.convertToType(data['purpose'], 'String');
        if (data.hasOwnProperty('customer')) obj.customer = _ApiClient.ApiClient.convertToType(data['customer'], Object);
        if (data.hasOwnProperty('tags')) obj.tags = _ApiClient.ApiClient.convertToType(data['tags'], 'String');
      }
      return obj;
    }
  }]);
  return Fulfillment1;
}();
/**
 * @member {String} id
 */
exports.Fulfillment1 = Fulfillment1;
Fulfillment1.prototype.id = undefined;

/**
 * @member {String} type
 */
Fulfillment1.prototype.type = undefined;

/**
 * @member {String} state
 */
Fulfillment1.prototype.state = undefined;

/**
 * @member {String} tracking
 */
Fulfillment1.prototype.tracking = undefined;

/**
 * @member {String} agent
 */
Fulfillment1.prototype.agent = undefined;

/**
 * @member {String} vehicle
 */
Fulfillment1.prototype.vehicle = undefined;

/**
 * @member {String} start
 */
Fulfillment1.prototype.start = undefined;

/**
 * @member {module:model/End1} end
 */
Fulfillment1.prototype.end = undefined;

/**
 * @member {String} purpose
 */
Fulfillment1.prototype.purpose = undefined;

/**
 * @member {Object} customer
 */
Fulfillment1.prototype.customer = undefined;

/**
 * @member {String} tags
 */
Fulfillment1.prototype.tags = undefined;
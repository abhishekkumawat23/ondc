"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.End1 = void 0;
var _ApiClient = require("../ApiClient");
var _Location = require("./Location5");
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
 * The End1 model module.
 * @module model/End1
 * @version 1.0
 */
var End1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>End1</code>.
   * @alias module:model/End1
   * @class
   * @param location {module:model/Location5} 
   * @param time {String} 
   * @param instructions {String} 
   * @param contact {Object} 
   */
  function End1(location, time, instructions, contact) {
    _classCallCheck(this, End1);
    this.location = location;
    this.time = time;
    this.instructions = instructions;
    this.contact = contact;
  }

  /**
   * Constructs a <code>End1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/End1} obj Optional instance to populate.
   * @return {module:model/End1} The populated <code>End1</code> instance.
   */
  _createClass(End1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new End1();
        if (data.hasOwnProperty('location')) obj.location = _Location.Location5.constructFromObject(data['location']);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'String');
        if (data.hasOwnProperty('instructions')) obj.instructions = _ApiClient.ApiClient.convertToType(data['instructions'], 'String');
        if (data.hasOwnProperty('contact')) obj.contact = _ApiClient.ApiClient.convertToType(data['contact'], Object);
      }
      return obj;
    }
  }]);
  return End1;
}();
/**
 * @member {module:model/Location5} location
 */
exports.End1 = End1;
End1.prototype.location = undefined;

/**
 * @member {String} time
 */
End1.prototype.time = undefined;

/**
 * @member {String} instructions
 */
End1.prototype.instructions = undefined;

/**
 * @member {Object} contact
 */
End1.prototype.contact = undefined;
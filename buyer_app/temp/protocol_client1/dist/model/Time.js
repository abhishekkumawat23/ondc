"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Time = void 0;
var _ApiClient = require("../ApiClient");
var _Duration = require("./Duration");
var _Schedule = require("./Schedule");
var _TimeRange = require("./TimeRange");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for retail (grocery, f&b)
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.13
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.46
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The Time model module.
 * @module model/Time
 * @version 1.0.13
 */
var Time = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Time</code>.
   * Describes time in its various forms. It can be a single point in time; duration; or a structured timetable of operations
   * @alias module:model/Time
   * @class
   */
  function Time() {
    _classCallCheck(this, Time);
  }

  /**
   * Constructs a <code>Time</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Time} obj Optional instance to populate.
   * @return {module:model/Time} The populated <code>Time</code> instance.
   */
  _createClass(Time, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Time();
        if (data.hasOwnProperty('label')) obj.label = _ApiClient.ApiClient.convertToType(data['label'], 'String');
        if (data.hasOwnProperty('timestamp')) obj.timestamp = _ApiClient.ApiClient.convertToType(data['timestamp'], 'Date');
        if (data.hasOwnProperty('duration')) obj.duration = _Duration.Duration.constructFromObject(data['duration']);
        if (data.hasOwnProperty('range')) obj.range = _TimeRange.TimeRange.constructFromObject(data['range']);
        if (data.hasOwnProperty('days')) obj.days = _ApiClient.ApiClient.convertToType(data['days'], 'String');
        if (data.hasOwnProperty('schedule')) obj.schedule = _Schedule.Schedule.constructFromObject(data['schedule']);
      }
      return obj;
    }
  }]);
  return Time;
}();
/**
 * @member {String} label
 */
exports.Time = Time;
Time.prototype.label = undefined;

/**
 * @member {Date} timestamp
 */
Time.prototype.timestamp = undefined;

/**
 * @member {module:model/Duration} duration
 */
Time.prototype.duration = undefined;

/**
 * @member {module:model/TimeRange} range
 */
Time.prototype.range = undefined;

/**
 * comma separated values representing days of the week
 * @member {String} days
 */
Time.prototype.days = undefined;

/**
 * @member {module:model/Schedule} schedule
 */
Time.prototype.schedule = undefined;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnRatingBody = void 0;
var _ApiClient = require("../ApiClient");
var _Context = require("./Context");
var _Error = require("./Error");
var _RatingAck = require("./RatingAck");
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.44
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The OnRatingBody model module.
 * @module model/OnRatingBody
 * @version 1.0.13
 */
var OnRatingBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OnRatingBody</code>.
   * @alias module:model/OnRatingBody
   * @class
   * @param context {module:model/Context} 
   */
  function OnRatingBody(context) {
    _classCallCheck(this, OnRatingBody);
    this.context = context;
  }

  /**
   * Constructs a <code>OnRatingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OnRatingBody} obj Optional instance to populate.
   * @return {module:model/OnRatingBody} The populated <code>OnRatingBody</code> instance.
   */
  _createClass(OnRatingBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OnRatingBody();
        if (data.hasOwnProperty('context')) obj.context = _Context.Context.constructFromObject(data['context']);
        if (data.hasOwnProperty('message')) obj.message = _RatingAck.RatingAck.constructFromObject(data['message']);
        if (data.hasOwnProperty('error')) obj.error = _Error.Error.constructFromObject(data['error']);
      }
      return obj;
    }
  }]);
  return OnRatingBody;
}();
/**
 * @member {module:model/Context} context
 */
exports.OnRatingBody = OnRatingBody;
OnRatingBody.prototype.context = undefined;

/**
 * @member {module:model/RatingAck} message
 */
OnRatingBody.prototype.message = undefined;

/**
 * @member {module:model/Error} error
 */
OnRatingBody.prototype.error = undefined;
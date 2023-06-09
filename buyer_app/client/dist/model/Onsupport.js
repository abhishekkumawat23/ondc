"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Onsupport = void 0;
var _ApiClient = require("../ApiClient");
var _Context = require("./Context6");
var _Message = require("./Message22");
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
 * The Onsupport model module.
 * @module model/Onsupport
 * @version 1.0
 */
var Onsupport = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Onsupport</code>.
   * @alias module:model/Onsupport
   * @class
   * @param context {module:model/Context6} 
   * @param message {module:model/Message22} 
   */
  function Onsupport(context, message) {
    _classCallCheck(this, Onsupport);
    this.context = context;
    this.message = message;
  }

  /**
   * Constructs a <code>Onsupport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Onsupport} obj Optional instance to populate.
   * @return {module:model/Onsupport} The populated <code>Onsupport</code> instance.
   */
  _createClass(Onsupport, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Onsupport();
        if (data.hasOwnProperty('context')) obj.context = _Context.Context6.constructFromObject(data['context']);
        if (data.hasOwnProperty('message')) obj.message = _Message.Message22.constructFromObject(data['message']);
      }
      return obj;
    }
  }]);
  return Onsupport;
}();
/**
 * @member {module:model/Context6} context
 */
exports.Onsupport = Onsupport;
Onsupport.prototype.context = undefined;

/**
 * @member {module:model/Message22} message
 */
Onsupport.prototype.message = undefined;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Descriptor1 = void 0;
var _ApiClient = require("../ApiClient");
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
 * The Descriptor1 model module.
 * @module model/Descriptor1
 * @version 1.0
 */
var Descriptor1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Descriptor1</code>.
   * @alias module:model/Descriptor1
   * @class
   * @param name {String} 
   */
  function Descriptor1(name) {
    _classCallCheck(this, Descriptor1);
    this.name = name;
  }

  /**
   * Constructs a <code>Descriptor1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descriptor1} obj Optional instance to populate.
   * @return {module:model/Descriptor1} The populated <code>Descriptor1</code> instance.
   */
  _createClass(Descriptor1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Descriptor1();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('images')) obj.images = _ApiClient.ApiClient.convertToType(data['images'], ['String']);
        if (data.hasOwnProperty('symbol')) obj.symbol = _ApiClient.ApiClient.convertToType(data['symbol'], 'String');
        if (data.hasOwnProperty('long_desc')) obj.longDesc = _ApiClient.ApiClient.convertToType(data['long_desc'], 'String');
        if (data.hasOwnProperty('short_desc')) obj.shortDesc = _ApiClient.ApiClient.convertToType(data['short_desc'], 'String');
      }
      return obj;
    }
  }]);
  return Descriptor1;
}();
/**
 * @member {String} name
 */
exports.Descriptor1 = Descriptor1;
Descriptor1.prototype.name = undefined;

/**
 * @member {Array.<String>} images
 */
Descriptor1.prototype.images = undefined;

/**
 * @member {String} symbol
 */
Descriptor1.prototype.symbol = undefined;

/**
 * @member {String} longDesc
 */
Descriptor1.prototype.longDesc = undefined;

/**
 * @member {String} shortDesc
 */
Descriptor1.prototype.shortDesc = undefined;
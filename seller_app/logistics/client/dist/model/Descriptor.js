"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Descriptor = void 0;
var _ApiClient = require("../ApiClient");
var _Image = require("./Image");
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
 * The Descriptor model module.
 * @module model/Descriptor
 * @version 1.0.9
 */
var Descriptor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Descriptor</code>.
   * Describes the description of a real-world object.
   * @alias module:model/Descriptor
   * @class
   */
  function Descriptor() {
    _classCallCheck(this, Descriptor);
  }

  /**
   * Constructs a <code>Descriptor</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descriptor} obj Optional instance to populate.
   * @return {module:model/Descriptor} The populated <code>Descriptor</code> instance.
   */
  _createClass(Descriptor, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Descriptor();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('code')) obj.code = _ApiClient.ApiClient.convertToType(data['code'], 'String');
        if (data.hasOwnProperty('symbol')) obj.symbol = _ApiClient.ApiClient.convertToType(data['symbol'], 'String');
        if (data.hasOwnProperty('short_desc')) obj.shortDesc = _ApiClient.ApiClient.convertToType(data['short_desc'], 'String');
        if (data.hasOwnProperty('long_desc')) obj.longDesc = _ApiClient.ApiClient.convertToType(data['long_desc'], 'String');
        if (data.hasOwnProperty('images')) obj.images = _ApiClient.ApiClient.convertToType(data['images'], [_Image.Image]);
        if (data.hasOwnProperty('audio')) obj.audio = _ApiClient.ApiClient.convertToType(data['audio'], 'String');
        if (data.hasOwnProperty('3d_render')) obj._3dRender = _ApiClient.ApiClient.convertToType(data['3d_render'], 'String');
      }
      return obj;
    }
  }]);
  return Descriptor;
}();
/**
 * @member {String} name
 */
exports.Descriptor = Descriptor;
Descriptor.prototype.name = undefined;

/**
 * @member {String} code
 */
Descriptor.prototype.code = undefined;

/**
 * @member {String} symbol
 */
Descriptor.prototype.symbol = undefined;

/**
 * @member {String} shortDesc
 */
Descriptor.prototype.shortDesc = undefined;

/**
 * @member {String} longDesc
 */
Descriptor.prototype.longDesc = undefined;

/**
 * @member {Array.<module:model/Image>} images
 */
Descriptor.prototype.images = undefined;

/**
 * @member {String} audio
 */
Descriptor.prototype.audio = undefined;

/**
 * @member {String} _3dRender
 */
Descriptor.prototype._3dRender = undefined;
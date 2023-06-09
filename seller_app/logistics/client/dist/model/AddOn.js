"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddOn = void 0;
var _ApiClient = require("../ApiClient");
var _Descriptor = require("./Descriptor");
var _Price = require("./Price");
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
 * The AddOn model module.
 * @module model/AddOn
 * @version 1.0.9
 */
var AddOn = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AddOn</code>.
   * Describes an add-on
   * @alias module:model/AddOn
   * @class
   */
  function AddOn() {
    _classCallCheck(this, AddOn);
  }

  /**
   * Constructs a <code>AddOn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddOn} obj Optional instance to populate.
   * @return {module:model/AddOn} The populated <code>AddOn</code> instance.
   */
  _createClass(AddOn, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AddOn();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('descriptor')) obj.descriptor = _Descriptor.Descriptor.constructFromObject(data['descriptor']);
        if (data.hasOwnProperty('price')) obj.price = _Price.Price.constructFromObject(data['price']);
      }
      return obj;
    }
  }]);
  return AddOn;
}();
/**
 * ID of the add-on. This follows the syntax {item.id}/add-on/{add-on unique id} for item specific add-on OR 
 * @member {String} id
 */
exports.AddOn = AddOn;
AddOn.prototype.id = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
AddOn.prototype.descriptor = undefined;

/**
 * @member {module:model/Price} price
 */
AddOn.prototype.price = undefined;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityPan = void 0;
var _ApiClient = require("../ApiClient.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Registry 
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Participant Management API
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 2.0.5
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                                                                                                                                                                                               * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.42
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The EntityPan model module.
 * @module model/EntityPan
 * @version 2.0.5
 */
var EntityPan = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EntityPan</code>.
   * @alias module:model/EntityPan
   * @class
   */
  function EntityPan() {
    _classCallCheck(this, EntityPan);
  }

  /**
   * Constructs a <code>EntityPan</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityPan} obj Optional instance to populate.
   * @return {module:model/EntityPan} The populated <code>EntityPan</code> instance.
   */
  _createClass(EntityPan, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EntityPan();
        if (data.hasOwnProperty('name_as_per_pan')) obj.nameAsPerPan = _ApiClient.ApiClient.convertToType(data['name_as_per_pan'], 'String');
        if (data.hasOwnProperty('pan_no')) obj.panNo = _ApiClient.ApiClient.convertToType(data['pan_no'], 'String');
        if (data.hasOwnProperty('date_of_incorporation')) obj.dateOfIncorporation = _ApiClient.ApiClient.convertToType(data['date_of_incorporation'], 'Date');
      }
      return obj;
    }
  }]);
  return EntityPan;
}();
/**
 * This shall be used to match the name as per PAN with Income Tax Department
 * @member {String} nameAsPerPan
 */
exports.EntityPan = EntityPan;
EntityPan.prototype.nameAsPerPan = undefined;

/**
 * Permanent Account Number issued by Income Tax Department. First five alphabets followed by four numeric followed by one alphabet
 * @member {String} panNo
 */
EntityPan.prototype.panNo = undefined;

/**
 * DD/MM/YYYY format
 * @member {Date} dateOfIncorporation
 */
EntityPan.prototype.dateOfIncorporation = undefined;
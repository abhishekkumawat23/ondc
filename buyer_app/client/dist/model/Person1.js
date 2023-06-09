"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person1 = void 0;
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
 * The Person1 model module.
 * @module model/Person1
 * @version 1.0
 */
var Person1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Person1</code>.
   * @alias module:model/Person1
   * @class
   * @param name {String} 
   * @param image {String} 
   * @param dob {String} 
   * @param gender {String} 
   * @param cred {String} 
   * @param tags {String} 
   */
  function Person1(name, image, dob, gender, cred, tags) {
    _classCallCheck(this, Person1);
    this.name = name;
    this.image = image;
    this.dob = dob;
    this.gender = gender;
    this.cred = cred;
    this.tags = tags;
  }

  /**
   * Constructs a <code>Person1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person1} obj Optional instance to populate.
   * @return {module:model/Person1} The populated <code>Person1</code> instance.
   */
  _createClass(Person1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Person1();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('image')) obj.image = _ApiClient.ApiClient.convertToType(data['image'], 'String');
        if (data.hasOwnProperty('dob')) obj.dob = _ApiClient.ApiClient.convertToType(data['dob'], 'String');
        if (data.hasOwnProperty('gender')) obj.gender = _ApiClient.ApiClient.convertToType(data['gender'], 'String');
        if (data.hasOwnProperty('cred')) obj.cred = _ApiClient.ApiClient.convertToType(data['cred'], 'String');
        if (data.hasOwnProperty('tags')) obj.tags = _ApiClient.ApiClient.convertToType(data['tags'], 'String');
      }
      return obj;
    }
  }]);
  return Person1;
}();
/**
 * @member {String} name
 */
exports.Person1 = Person1;
Person1.prototype.name = undefined;

/**
 * @member {String} image
 */
Person1.prototype.image = undefined;

/**
 * @member {String} dob
 */
Person1.prototype.dob = undefined;

/**
 * @member {String} gender
 */
Person1.prototype.gender = undefined;

/**
 * @member {String} cred
 */
Person1.prototype.cred = undefined;

/**
 * @member {String} tags
 */
Person1.prototype.tags = undefined;
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Agent = void 0;
var _ApiClient = require("../ApiClient");
var _Contact = require("./Contact");
var _Image = require("./Image");
var _Name = require("./Name");
var _Person2 = require("./Person");
var _Rateable = require("./Rateable");
var _Tags = require("./Tags");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } /*
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
 * The Agent model module.
 * @module model/Agent
 * @version 1.0.9
 */
var Agent = /*#__PURE__*/function (_Person) {
  _inherits(Agent, _Person);
  var _super = _createSuper(Agent);
  /**
   * Constructs a new <code>Agent</code>.
   * Describes an order executor
   * @alias module:model/Agent
   * @class
   * @extends module:model/Person
   */
  function Agent() {
    _classCallCheck(this, Agent);
    return _super.call(this);
  }

  /**
   * Constructs a <code>Agent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Agent} obj Optional instance to populate.
   * @return {module:model/Agent} The populated <code>Agent</code> instance.
   */
  _createClass(Agent, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Agent();
        _Person2.Person.constructFromObject(data, obj);
        if (data.hasOwnProperty('phone')) obj.phone = _ApiClient.ApiClient.convertToType(data['phone'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('tags')) obj.tags = _Tags.Tags.constructFromObject(data['tags']);
        if (data.hasOwnProperty('rateable')) obj.rateable = _Rateable.Rateable.constructFromObject(data['rateable']);
      }
      return obj;
    }
  }]);
  return Agent;
}(_Person2.Person);
/**
 * @member {String} phone
 */
exports.Agent = Agent;
Agent.prototype.phone = undefined;

/**
 * @member {String} email
 */
Agent.prototype.email = undefined;

/**
 * @member {module:model/Tags} tags
 */
Agent.prototype.tags = undefined;

/**
 * @member {module:model/Rateable} rateable
 */
Agent.prototype.rateable = undefined;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FulfillmentStart = void 0;
var _ApiClient = require("../ApiClient");
var _Authorization = require("./Authorization");
var _Contact = require("./Contact");
var _Descriptor = require("./Descriptor");
var _Location = require("./Location");
var _Person = require("./Person");
var _Time = require("./Time");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /*
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API for retail (grocery, f&b)
                                                                                                                                                                                                                                                                                                                                                                                               * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * OpenAPI spec version: 1.0.29
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
 * The FulfillmentStart model module.
 * @module model/FulfillmentStart
 * @version 1.0.29
 */
var FulfillmentStart = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FulfillmentStart</code>.
   * Details on the start of fulfillment
   * @alias module:model/FulfillmentStart
   * @class
   */
  function FulfillmentStart() {
    _classCallCheck(this, FulfillmentStart);
  }

  /**
   * Constructs a <code>FulfillmentStart</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FulfillmentStart} obj Optional instance to populate.
   * @return {module:model/FulfillmentStart} The populated <code>FulfillmentStart</code> instance.
   */
  _createClass(FulfillmentStart, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FulfillmentStart();
        if (data.hasOwnProperty('location')) obj.location = _Location.Location.constructFromObject(data['location']);
        if (data.hasOwnProperty('time')) obj.time = _Time.Time.constructFromObject(data['time']);
        if (data.hasOwnProperty('instructions')) obj.instructions = _Descriptor.Descriptor.constructFromObject(data['instructions']);
        if (data.hasOwnProperty('contact')) obj.contact = _Contact.Contact.constructFromObject(data['contact']);
        if (data.hasOwnProperty('person')) obj.person = _Person.Person.constructFromObject(data['person']);
        if (data.hasOwnProperty('authorization')) obj.authorization = _Authorization.Authorization.constructFromObject(data['authorization']);
      }
      return obj;
    }
  }]);
  return FulfillmentStart;
}();
/**
 * @member {module:model/Location} location
 */
exports.FulfillmentStart = FulfillmentStart;
FulfillmentStart.prototype.location = undefined;

/**
 * @member {module:model/Time} time
 */
FulfillmentStart.prototype.time = undefined;

/**
 * @member {module:model/Descriptor} instructions
 */
FulfillmentStart.prototype.instructions = undefined;

/**
 * @member {module:model/Contact} contact
 */
FulfillmentStart.prototype.contact = undefined;

/**
 * @member {module:model/Person} person
 */
FulfillmentStart.prototype.person = undefined;

/**
 * @member {module:model/Authorization} authorization
 */
FulfillmentStart.prototype.authorization = undefined;
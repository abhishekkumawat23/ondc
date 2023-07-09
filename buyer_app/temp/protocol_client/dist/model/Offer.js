"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Offer = void 0;
var _ApiClient = require("../ApiClient");
var _Categorypropertiesid = require("./Categorypropertiesid");
var _Descriptor = require("./Descriptor");
var _Itempropertiesid = require("./Itempropertiesid");
var _Locationpropertiesid = require("./Locationpropertiesid");
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
 * The Offer model module.
 * @module model/Offer
 * @version 1.0.29
 */
var Offer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Offer</code>.
   * Describes an offer
   * @alias module:model/Offer
   * @class
   */
  function Offer() {
    _classCallCheck(this, Offer);
  }

  /**
   * Constructs a <code>Offer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Offer} obj Optional instance to populate.
   * @return {module:model/Offer} The populated <code>Offer</code> instance.
   */
  _createClass(Offer, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Offer();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('descriptor')) obj.descriptor = _Descriptor.Descriptor.constructFromObject(data['descriptor']);
        if (data.hasOwnProperty('location_ids')) obj.locationIds = _ApiClient.ApiClient.convertToType(data['location_ids'], [_Locationpropertiesid.Locationpropertiesid]);
        if (data.hasOwnProperty('category_ids')) obj.categoryIds = _ApiClient.ApiClient.convertToType(data['category_ids'], [_Categorypropertiesid.Categorypropertiesid]);
        if (data.hasOwnProperty('item_ids')) obj.itemIds = _ApiClient.ApiClient.convertToType(data['item_ids'], [_Itempropertiesid.Itempropertiesid]);
        if (data.hasOwnProperty('time')) obj.time = _Time.Time.constructFromObject(data['time']);
      }
      return obj;
    }
  }]);
  return Offer;
}();
/**
 * @member {String} id
 */
exports.Offer = Offer;
Offer.prototype.id = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Offer.prototype.descriptor = undefined;

/**
 * @member {Array.<module:model/Locationpropertiesid>} locationIds
 */
Offer.prototype.locationIds = undefined;

/**
 * @member {Array.<module:model/Categorypropertiesid>} categoryIds
 */
Offer.prototype.categoryIds = undefined;

/**
 * @member {Array.<module:model/Itempropertiesid>} itemIds
 */
Offer.prototype.itemIds = undefined;

/**
 * @member {module:model/Time} time
 */
Offer.prototype.time = undefined;
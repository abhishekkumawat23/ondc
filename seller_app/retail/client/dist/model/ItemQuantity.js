"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemQuantity = void 0;
var _ApiClient = require("../ApiClient");
var _ItemQuantityAllocated = require("./ItemQuantityAllocated");
var _ItemQuantityMaximum = require("./ItemQuantityMaximum");
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
 * The ItemQuantity model module.
 * @module model/ItemQuantity
 * @version 1.0.13
 */
var ItemQuantity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemQuantity</code>.
   * Describes count or amount of an item
   * @alias module:model/ItemQuantity
   * @class
   */
  function ItemQuantity() {
    _classCallCheck(this, ItemQuantity);
  }

  /**
   * Constructs a <code>ItemQuantity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemQuantity} obj Optional instance to populate.
   * @return {module:model/ItemQuantity} The populated <code>ItemQuantity</code> instance.
   */
  _createClass(ItemQuantity, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemQuantity();
        if (data.hasOwnProperty('allocated')) obj.allocated = _ItemQuantityAllocated.ItemQuantityAllocated.constructFromObject(data['allocated']);
        if (data.hasOwnProperty('available')) obj.available = _ItemQuantityAllocated.ItemQuantityAllocated.constructFromObject(data['available']);
        if (data.hasOwnProperty('maximum')) obj.maximum = _ItemQuantityMaximum.ItemQuantityMaximum.constructFromObject(data['maximum']);
        if (data.hasOwnProperty('minimum')) obj.minimum = _ItemQuantityAllocated.ItemQuantityAllocated.constructFromObject(data['minimum']);
        if (data.hasOwnProperty('selected')) obj.selected = _ItemQuantityAllocated.ItemQuantityAllocated.constructFromObject(data['selected']);
      }
      return obj;
    }
  }]);
  return ItemQuantity;
}();
/**
 * @member {module:model/ItemQuantityAllocated} allocated
 */
exports.ItemQuantity = ItemQuantity;
ItemQuantity.prototype.allocated = undefined;

/**
 * @member {module:model/ItemQuantityAllocated} available
 */
ItemQuantity.prototype.available = undefined;

/**
 * @member {module:model/ItemQuantityMaximum} maximum
 */
ItemQuantity.prototype.maximum = undefined;

/**
 * @member {module:model/ItemQuantityAllocated} minimum
 */
ItemQuantity.prototype.minimum = undefined;

/**
 * @member {module:model/ItemQuantityAllocated} selected
 */
ItemQuantity.prototype.selected = undefined;
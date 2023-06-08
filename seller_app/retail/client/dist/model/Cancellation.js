"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cancellation = void 0;
var _ApiClient = require("../ApiClient");
var _CancellationSelectedReason = require("./CancellationSelectedReason");
var _Descriptor = require("./Descriptor");
var _Option = require("./Option");
var _Policy = require("./Policy");
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
 * The Cancellation model module.
 * @module model/Cancellation
 * @version 1.0.13
 */
var Cancellation = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Cancellation</code>.
   * Describes a cancellation event. Use the following reason codes (reasons.id, reasons.descriptor.code) (\&quot;001\&quot;, \&quot;Order delivery delayed or not possible\&quot;) (\&quot;002\&quot;, \&quot;Price of one or more items have changed due to which buyer was asked to make additional payment\&quot;) (\&quot;003\&quot;, \&quot;One or more items in the Order not available\&quot;) (\&quot;004\&quot;, \&quot;Delivery pin code not serviceable\&quot;) (\&quot;005\&quot;, \&quot;Buyer refused to accept delivery\&quot;) (\&quot;006\&quot;, \&quot;Buyer not found\&quot;) (\&quot;007\&quot;, \&quot;Address not found\&quot;) (\&quot;008\&quot;, \&quot;Buyer does not want product any more\&quot;) (\&quot;009\&quot;, \&quot;Product available at lower price the order price\&quot;)
   * @alias module:model/Cancellation
   * @class
   */
  function Cancellation() {
    _classCallCheck(this, Cancellation);
  }

  /**
   * Constructs a <code>Cancellation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Cancellation} obj Optional instance to populate.
   * @return {module:model/Cancellation} The populated <code>Cancellation</code> instance.
   */
  _createClass(Cancellation, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Cancellation();
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('ref_id')) obj.refId = _ApiClient.ApiClient.convertToType(data['ref_id'], 'String');
        if (data.hasOwnProperty('policies')) obj.policies = _ApiClient.ApiClient.convertToType(data['policies'], [_Policy.Policy]);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], 'Date');
        if (data.hasOwnProperty('cancelled_by')) obj.cancelledBy = _ApiClient.ApiClient.convertToType(data['cancelled_by'], 'String');
        if (data.hasOwnProperty('reasons')) obj.reasons = _Option.Option.constructFromObject(data['reasons']);
        if (data.hasOwnProperty('selected_reason')) obj.selectedReason = _CancellationSelectedReason.CancellationSelectedReason.constructFromObject(data['selected_reason']);
        if (data.hasOwnProperty('additional_description')) obj.additionalDescription = _Descriptor.Descriptor.constructFromObject(data['additional_description']);
      }
      return obj;
    }
  }]);
  return Cancellation;
}();
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
exports.Cancellation = Cancellation;
Cancellation.TypeEnum = {
  /**
   * value: "full"
   * @const
   */
  full: "full",
  /**
   * value: "partial"
   * @const
   */
  partial: "partial"
};
/**
 * @member {module:model/Cancellation.TypeEnum} type
 */
Cancellation.prototype.type = undefined;

/**
 * @member {String} refId
 */
Cancellation.prototype.refId = undefined;

/**
 * @member {Array.<module:model/Policy>} policies
 */
Cancellation.prototype.policies = undefined;

/**
 * @member {Date} time
 */
Cancellation.prototype.time = undefined;

/**
 * @member {String} cancelledBy
 */
Cancellation.prototype.cancelledBy = undefined;

/**
 * @member {module:model/Option} reasons
 */
Cancellation.prototype.reasons = undefined;

/**
 * @member {module:model/CancellationSelectedReason} selectedReason
 */
Cancellation.prototype.selectedReason = undefined;

/**
 * @member {module:model/Descriptor} additionalDescription
 */
Cancellation.prototype.additionalDescription = undefined;
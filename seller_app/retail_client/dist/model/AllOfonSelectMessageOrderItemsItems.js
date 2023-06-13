"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AllOfonSelectMessageOrderItemsItems = void 0;
var _ApiClient = require("../ApiClient");
var _CategoryId = require("./CategoryId");
var _Descriptor = require("./Descriptor");
var _FulfillmentId = require("./FulfillmentId");
var _Item2 = require("./Item");
var _ItemId = require("./ItemId");
var _ItemOndcorgstatutoryReqsPackagedCommodities = require("./ItemOndcorgstatutoryReqsPackagedCommodities");
var _ItemOndcorgstatutoryReqsPrepackagedFood = require("./ItemOndcorgstatutoryReqsPrepackagedFood");
var _ItemQuantity = require("./ItemQuantity");
var _LocationId = require("./LocationId");
var _Price = require("./Price");
var _Rateable = require("./Rateable");
var _RatingValue = require("./RatingValue");
var _Tags = require("./Tags");
var _Time = require("./Time");
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
                                                                                                                                                                                                                      * ONDC Protocol API for retail (grocery, f&b)
                                                                                                                                                                                                                      * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
                                                                                                                                                                                                                      *
                                                                                                                                                                                                                      * OpenAPI spec version: 1.0.13
                                                                                                                                                                                                                      *
                                                                                                                                                                                                                      * NOTE: This class is auto generated by the swagger code generator program.
                                                                                                                                                                                                                      * https://github.com/swagger-api/swagger-codegen.git
                                                                                                                                                                                                                      *
                                                                                                                                                                                                                      * Swagger Codegen version: 3.0.46
                                                                                                                                                                                                                      *
                                                                                                                                                                                                                      * Do not edit the class manually.
                                                                                                                                                                                                                      *
                                                                                                                                                                                                                      */
/**
 * The AllOfonSelectMessageOrderItemsItems model module.
 * @module model/AllOfonSelectMessageOrderItemsItems
 * @version 1.0.13
 */
var AllOfonSelectMessageOrderItemsItems = /*#__PURE__*/function (_Item) {
  _inherits(AllOfonSelectMessageOrderItemsItems, _Item);
  var _super = _createSuper(AllOfonSelectMessageOrderItemsItems);
  /**
   * Constructs a new <code>AllOfonSelectMessageOrderItemsItems</code>.
   * @alias module:model/AllOfonSelectMessageOrderItemsItems
   * @class
   * @extends module:model/Item
   * @param id {} 
   * @param descriptor {} 
   * @param price {} 
   * @param categoryId {} 
   * @param fulfillmentId {} 
   * @param locationId {} 
   * @param matched {} 
   * @param ondcorgreturnable {} whether the item is returnable
   * @param ondcorgsellerPickupReturn {} in case of return, whether the item should be picked up by seller
   * @param ondcorgreturnWindow {} return window for the item in ISO8601 durations format e.g. 'PT24H' indicates 24 hour return window. Mandatory if \"@ondc/org/returnable\" is \"true\"
   * @param ondcorgcancellable {} whether the item is cancellable
   * @param ondcorgtimeToShip {} time from order confirmation by which item ready to ship in ISO8601 durations format (e.g. 'PT30M' indicates item ready to ship in 30 mins). Mandatory for category_id \"F&B\"
   * @param ondcorgavailableOnCod {} whether the catalog item is available on COD
   * @param ondcorgcontactDetailsConsumerCare {} contact details for consumer care
   * @param ondcorgstatutoryReqsPackagedCommodities {} 
   * @param ondcorgstatutoryReqsPrepackagedFood {} 
   * @param ondcorgmandatoryReqsVeggiesFruits {} mandatory for category_id \"Fruits and Vegetables\" required attributes include the following - net_quantity
   */
  function AllOfonSelectMessageOrderItemsItems(id, descriptor, price, categoryId, fulfillmentId, locationId, matched, ondcorgreturnable, ondcorgsellerPickupReturn, ondcorgreturnWindow, ondcorgcancellable, ondcorgtimeToShip, ondcorgavailableOnCod, ondcorgcontactDetailsConsumerCare, ondcorgstatutoryReqsPackagedCommodities, ondcorgstatutoryReqsPrepackagedFood, ondcorgmandatoryReqsVeggiesFruits) {
    _classCallCheck(this, AllOfonSelectMessageOrderItemsItems);
    return _super.call(this, id, descriptor, price, categoryId, fulfillmentId, locationId, matched, ondcorgreturnable, ondcorgsellerPickupReturn, ondcorgreturnWindow, ondcorgcancellable, ondcorgtimeToShip, ondcorgavailableOnCod, ondcorgcontactDetailsConsumerCare, ondcorgstatutoryReqsPackagedCommodities, ondcorgstatutoryReqsPrepackagedFood, ondcorgmandatoryReqsVeggiesFruits);
  }

  /**
   * Constructs a <code>AllOfonSelectMessageOrderItemsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AllOfonSelectMessageOrderItemsItems} obj Optional instance to populate.
   * @return {module:model/AllOfonSelectMessageOrderItemsItems} The populated <code>AllOfonSelectMessageOrderItemsItems</code> instance.
   */
  _createClass(AllOfonSelectMessageOrderItemsItems, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AllOfonSelectMessageOrderItemsItems();
        _Item2.Item.constructFromObject(data, obj);
        if (data.hasOwnProperty('quantity')) obj.quantity = _ItemQuantity.ItemQuantity.constructFromObject(data['quantity']);
      }
      return obj;
    }
  }]);
  return AllOfonSelectMessageOrderItemsItems;
}(_Item2.Item);
/**
 * @member {module:model/ItemQuantity} quantity
 */
exports.AllOfonSelectMessageOrderItemsItems = AllOfonSelectMessageOrderItemsItems;
AllOfonSelectMessageOrderItemsItems.prototype.quantity = undefined;
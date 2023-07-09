"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;
var _ApiClient = require("../ApiClient");
var _Categorypropertiesid = require("./Categorypropertiesid");
var _Descriptor = require("./Descriptor");
var _Fulfillmentpropertiesid = require("./Fulfillmentpropertiesid");
var _ItemOndcorgstatutoryReqsPackagedCommodities = require("./ItemOndcorgstatutoryReqsPackagedCommodities");
var _ItemOndcorgstatutoryReqsPrepackagedFood = require("./ItemOndcorgstatutoryReqsPrepackagedFood");
var _ItemQuantity = require("./ItemQuantity");
var _Itempropertiesid = require("./Itempropertiesid");
var _Locationpropertiesid = require("./Locationpropertiesid");
var _Price = require("./Price");
var _Rateable = require("./Rateable");
var _Ratingpropertiesvalue = require("./Ratingpropertiesvalue");
var _Tags = require("./Tags");
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
 * The Item model module.
 * @module model/Item
 * @version 1.0.29
 */
var Item = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Item</code>.
   * Describes a product or a service offered to the end consumer by the provider - Statutory requirements for category_id \&quot;Packaged Commodities\&quot; - descriptor.name (for item name), price.value (for declared price), price.maximum_value (for MRP); Statutory requirements for category_id \&quot;Packaged Foods\&quot; - descriptor.name (for item name), descriptor.symbol (for veg or non-veg), descriptor.short_desc (for food allergen), descriptor.long_desc (for instructions for use), price.value (for declared price); All other statutory attributes must be provided, as applicable, for the above; No statutory requirement for category_id \&quot;F&amp;B\&quot; or \&quot;Fruits and Vegetables\&quot;
   * @alias module:model/Item
   * @class
   * @param id {String} This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
   * @param descriptor {module:model/Descriptor} 
   * @param price {module:model/Price} 
   * @param categoryId {module:model/Categorypropertiesid} 
   * @param fulfillmentId {module:model/Fulfillmentpropertiesid} 
   * @param locationId {module:model/Locationpropertiesid} 
   * @param matched {Boolean} 
   * @param ondcorgreturnable {Boolean} whether the item is returnable
   * @param ondcorgsellerPickupReturn {Boolean} in case of return, whether the item should be picked up by seller
   * @param ondcorgreturnWindow {String} return window for the item in ISO8601 durations format e.g. 'PT24H' indicates 24 hour return window. Mandatory if \"@ondc/org/returnable\" is \"true\"
   * @param ondcorgcancellable {Boolean} whether the item is cancellable
   * @param ondcorgtimeToShip {String} time from order confirmation by which item ready to ship in ISO8601 durations format (e.g. 'PT30M' indicates item ready to ship in 30 mins). Mandatory for category_id \"F&B\"
   * @param ondcorgavailableOnCod {Boolean} whether the catalog item is available on COD
   * @param ondcorgcontactDetailsConsumerCare {String} contact details for consumer care
   * @param ondcorgstatutoryReqsPackagedCommodities {module:model/ItemOndcorgstatutoryReqsPackagedCommodities} 
   * @param ondcorgstatutoryReqsPrepackagedFood {module:model/ItemOndcorgstatutoryReqsPrepackagedFood} 
   * @param ondcorgmandatoryReqsVeggiesFruits {Object} mandatory for category_id \"Fruits and Vegetables\" required attributes include the following - net_quantity
   */
  function Item(id, descriptor, price, categoryId, fulfillmentId, locationId, matched, ondcorgreturnable, ondcorgsellerPickupReturn, ondcorgreturnWindow, ondcorgcancellable, ondcorgtimeToShip, ondcorgavailableOnCod, ondcorgcontactDetailsConsumerCare, ondcorgstatutoryReqsPackagedCommodities, ondcorgstatutoryReqsPrepackagedFood, ondcorgmandatoryReqsVeggiesFruits) {
    _classCallCheck(this, Item);
    this.id = id;
    this.descriptor = descriptor;
    this.price = price;
    this.categoryId = categoryId;
    this.fulfillmentId = fulfillmentId;
    this.locationId = locationId;
    this.matched = matched;
    this.ondcorgreturnable = ondcorgreturnable;
    this.ondcorgsellerPickupReturn = ondcorgsellerPickupReturn;
    this.ondcorgreturnWindow = ondcorgreturnWindow;
    this.ondcorgcancellable = ondcorgcancellable;
    this.ondcorgtimeToShip = ondcorgtimeToShip;
    this.ondcorgavailableOnCod = ondcorgavailableOnCod;
    this.ondcorgcontactDetailsConsumerCare = ondcorgcontactDetailsConsumerCare;
    this.ondcorgstatutoryReqsPackagedCommodities = ondcorgstatutoryReqsPackagedCommodities;
    this.ondcorgstatutoryReqsPrepackagedFood = ondcorgstatutoryReqsPrepackagedFood;
    this.ondcorgmandatoryReqsVeggiesFruits = ondcorgmandatoryReqsVeggiesFruits;
  }

  /**
   * Constructs a <code>Item</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Item} obj Optional instance to populate.
   * @return {module:model/Item} The populated <code>Item</code> instance.
   */
  _createClass(Item, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Item();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('parent_item_id')) obj.parentItemId = _Itempropertiesid.Itempropertiesid.constructFromObject(data['parent_item_id']);
        if (data.hasOwnProperty('descriptor')) obj.descriptor = _Descriptor.Descriptor.constructFromObject(data['descriptor']);
        if (data.hasOwnProperty('price')) obj.price = _Price.Price.constructFromObject(data['price']);
        if (data.hasOwnProperty('quantity')) obj.quantity = _ItemQuantity.ItemQuantity.constructFromObject(data['quantity']);
        if (data.hasOwnProperty('category_id')) obj.categoryId = _Categorypropertiesid.Categorypropertiesid.constructFromObject(data['category_id']);
        if (data.hasOwnProperty('fulfillment_id')) obj.fulfillmentId = _Fulfillmentpropertiesid.Fulfillmentpropertiesid.constructFromObject(data['fulfillment_id']);
        if (data.hasOwnProperty('rating')) obj.rating = _Ratingpropertiesvalue.Ratingpropertiesvalue.constructFromObject(data['rating']);
        if (data.hasOwnProperty('location_id')) obj.locationId = _Locationpropertiesid.Locationpropertiesid.constructFromObject(data['location_id']);
        if (data.hasOwnProperty('time')) obj.time = _Time.Time.constructFromObject(data['time']);
        if (data.hasOwnProperty('rateable')) obj.rateable = _Rateable.Rateable.constructFromObject(data['rateable']);
        if (data.hasOwnProperty('matched')) obj.matched = _ApiClient.ApiClient.convertToType(data['matched'], 'Boolean');
        if (data.hasOwnProperty('related')) obj.related = _ApiClient.ApiClient.convertToType(data['related'], 'Boolean');
        if (data.hasOwnProperty('recommended')) obj.recommended = _ApiClient.ApiClient.convertToType(data['recommended'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/returnable')) obj.ondcorgreturnable = _ApiClient.ApiClient.convertToType(data['@ondc/org/returnable'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/seller_pickup_return')) obj.ondcorgsellerPickupReturn = _ApiClient.ApiClient.convertToType(data['@ondc/org/seller_pickup_return'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/return_window')) obj.ondcorgreturnWindow = _ApiClient.ApiClient.convertToType(data['@ondc/org/return_window'], 'String');
        if (data.hasOwnProperty('@ondc/org/cancellable')) obj.ondcorgcancellable = _ApiClient.ApiClient.convertToType(data['@ondc/org/cancellable'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/time_to_ship')) obj.ondcorgtimeToShip = _ApiClient.ApiClient.convertToType(data['@ondc/org/time_to_ship'], 'String');
        if (data.hasOwnProperty('@ondc/org/available_on_cod')) obj.ondcorgavailableOnCod = _ApiClient.ApiClient.convertToType(data['@ondc/org/available_on_cod'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/contact_details_consumer_care')) obj.ondcorgcontactDetailsConsumerCare = _ApiClient.ApiClient.convertToType(data['@ondc/org/contact_details_consumer_care'], 'String');
        if (data.hasOwnProperty('@ondc/org/statutory_reqs_packaged_commodities')) obj.ondcorgstatutoryReqsPackagedCommodities = _ItemOndcorgstatutoryReqsPackagedCommodities.ItemOndcorgstatutoryReqsPackagedCommodities.constructFromObject(data['@ondc/org/statutory_reqs_packaged_commodities']);
        if (data.hasOwnProperty('@ondc/org/statutory_reqs_prepackaged_food')) obj.ondcorgstatutoryReqsPrepackagedFood = _ItemOndcorgstatutoryReqsPrepackagedFood.ItemOndcorgstatutoryReqsPrepackagedFood.constructFromObject(data['@ondc/org/statutory_reqs_prepackaged_food']);
        if (data.hasOwnProperty('@ondc/org/mandatory_reqs_veggies_fruits')) obj.ondcorgmandatoryReqsVeggiesFruits = _ApiClient.ApiClient.convertToType(data['@ondc/org/mandatory_reqs_veggies_fruits'], Object);
        if (data.hasOwnProperty('tags')) obj.tags = _Tags.Tags.constructFromObject(data['tags']);
      }
      return obj;
    }
  }]);
  return Item;
}();
/**
 * This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product.
 * @member {String} id
 */
exports.Item = Item;
Item.prototype.id = undefined;

/**
 * @member {module:model/Itempropertiesid} parentItemId
 */
Item.prototype.parentItemId = undefined;

/**
 * @member {module:model/Descriptor} descriptor
 */
Item.prototype.descriptor = undefined;

/**
 * @member {module:model/Price} price
 */
Item.prototype.price = undefined;

/**
 * @member {module:model/ItemQuantity} quantity
 */
Item.prototype.quantity = undefined;

/**
 * @member {module:model/Categorypropertiesid} categoryId
 */
Item.prototype.categoryId = undefined;

/**
 * @member {module:model/Fulfillmentpropertiesid} fulfillmentId
 */
Item.prototype.fulfillmentId = undefined;

/**
 * @member {module:model/Ratingpropertiesvalue} rating
 */
Item.prototype.rating = undefined;

/**
 * @member {module:model/Locationpropertiesid} locationId
 */
Item.prototype.locationId = undefined;

/**
 * @member {module:model/Time} time
 */
Item.prototype.time = undefined;

/**
 * @member {module:model/Rateable} rateable
 */
Item.prototype.rateable = undefined;

/**
 * @member {Boolean} matched
 */
Item.prototype.matched = undefined;

/**
 * @member {Boolean} related
 */
Item.prototype.related = undefined;

/**
 * @member {Boolean} recommended
 */
Item.prototype.recommended = undefined;

/**
 * whether the item is returnable
 * @member {Boolean} ondcorgreturnable
 */
Item.prototype.ondcorgreturnable = undefined;

/**
 * in case of return, whether the item should be picked up by seller
 * @member {Boolean} ondcorgsellerPickupReturn
 */
Item.prototype.ondcorgsellerPickupReturn = undefined;

/**
 * return window for the item in ISO8601 durations format e.g. 'PT24H' indicates 24 hour return window. Mandatory if \"@ondc/org/returnable\" is \"true\"
 * @member {String} ondcorgreturnWindow
 */
Item.prototype.ondcorgreturnWindow = undefined;

/**
 * whether the item is cancellable
 * @member {Boolean} ondcorgcancellable
 */
Item.prototype.ondcorgcancellable = undefined;

/**
 * time from order confirmation by which item ready to ship in ISO8601 durations format (e.g. 'PT30M' indicates item ready to ship in 30 mins). Mandatory for category_id \"F&B\"
 * @member {String} ondcorgtimeToShip
 */
Item.prototype.ondcorgtimeToShip = undefined;

/**
 * whether the catalog item is available on COD
 * @member {Boolean} ondcorgavailableOnCod
 */
Item.prototype.ondcorgavailableOnCod = undefined;

/**
 * contact details for consumer care
 * @member {String} ondcorgcontactDetailsConsumerCare
 */
Item.prototype.ondcorgcontactDetailsConsumerCare = undefined;

/**
 * @member {module:model/ItemOndcorgstatutoryReqsPackagedCommodities} ondcorgstatutoryReqsPackagedCommodities
 */
Item.prototype.ondcorgstatutoryReqsPackagedCommodities = undefined;

/**
 * @member {module:model/ItemOndcorgstatutoryReqsPrepackagedFood} ondcorgstatutoryReqsPrepackagedFood
 */
Item.prototype.ondcorgstatutoryReqsPrepackagedFood = undefined;

/**
 * mandatory for category_id \"Fruits and Vegetables\" required attributes include the following - net_quantity
 * @member {Object} ondcorgmandatoryReqsVeggiesFruits
 */
Item.prototype.ondcorgmandatoryReqsVeggiesFruits = undefined;

/**
 * @member {module:model/Tags} tags
 */
Item.prototype.tags = undefined;
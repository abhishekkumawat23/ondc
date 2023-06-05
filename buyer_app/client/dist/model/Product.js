"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _ApiClient = require("../ApiClient");
var _BppDetails = require("./BppDetails2");
var _Descriptor = require("./Descriptor2");
var _Price = require("./Price2");
var _ProviderDetails = require("./ProviderDetails2");
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
 * The Product model module.
 * @module model/Product
 * @version 1.0
 */
var Product = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   * @param ondcorgcancellable {Boolean} 
   * @param ondcorgreturnable {Boolean} 
   * @param price {module:model/Price2} 
   * @param ondcorgsellerPickupReturn {Boolean} 
   * @param matched {Boolean} 
   * @param id {Number} 
   * @param descriptor {module:model/Descriptor2} 
   * @param locationId {String} 
   * @param providerDetails {module:model/ProviderDetails2} 
   * @param locationDetails {Object} 
   * @param categoryDetails {Object} 
   * @param fulfillmentDetails {Object} 
   * @param bppDetails {module:model/BppDetails2} 
   */
  function Product(ondcorgcancellable, ondcorgreturnable, price, ondcorgsellerPickupReturn, matched, id, descriptor, locationId, providerDetails, locationDetails, categoryDetails, fulfillmentDetails, bppDetails) {
    _classCallCheck(this, Product);
    this.ondcorgcancellable = ondcorgcancellable;
    this.ondcorgreturnable = ondcorgreturnable;
    this.price = price;
    this.ondcorgsellerPickupReturn = ondcorgsellerPickupReturn;
    this.matched = matched;
    this.id = id;
    this.descriptor = descriptor;
    this.locationId = locationId;
    this.providerDetails = providerDetails;
    this.locationDetails = locationDetails;
    this.categoryDetails = categoryDetails;
    this.fulfillmentDetails = fulfillmentDetails;
    this.bppDetails = bppDetails;
  }

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
   */
  _createClass(Product, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Product();
        if (data.hasOwnProperty('@ondc/org/cancellable')) obj.ondcorgcancellable = _ApiClient.ApiClient.convertToType(data['@ondc/org/cancellable'], 'Boolean');
        if (data.hasOwnProperty('@ondc/org/returnable')) obj.ondcorgreturnable = _ApiClient.ApiClient.convertToType(data['@ondc/org/returnable'], 'Boolean');
        if (data.hasOwnProperty('price')) obj.price = _Price.Price2.constructFromObject(data['price']);
        if (data.hasOwnProperty('@ondc/org/seller_pickup_return')) obj.ondcorgsellerPickupReturn = _ApiClient.ApiClient.convertToType(data['@ondc/org/seller_pickup_return'], 'Boolean');
        if (data.hasOwnProperty('matched')) obj.matched = _ApiClient.ApiClient.convertToType(data['matched'], 'Boolean');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'Number');
        if (data.hasOwnProperty('descriptor')) obj.descriptor = _Descriptor.Descriptor2.constructFromObject(data['descriptor']);
        if (data.hasOwnProperty('location_id')) obj.locationId = _ApiClient.ApiClient.convertToType(data['location_id'], 'String');
        if (data.hasOwnProperty('provider_details')) obj.providerDetails = _ProviderDetails.ProviderDetails2.constructFromObject(data['provider_details']);
        if (data.hasOwnProperty('location_details')) obj.locationDetails = _ApiClient.ApiClient.convertToType(data['location_details'], Object);
        if (data.hasOwnProperty('category_details')) obj.categoryDetails = _ApiClient.ApiClient.convertToType(data['category_details'], Object);
        if (data.hasOwnProperty('fulfillment_details')) obj.fulfillmentDetails = _ApiClient.ApiClient.convertToType(data['fulfillment_details'], Object);
        if (data.hasOwnProperty('bpp_details')) obj.bppDetails = _BppDetails.BppDetails2.constructFromObject(data['bpp_details']);
      }
      return obj;
    }
  }]);
  return Product;
}();
/**
 * @member {Boolean} ondcorgcancellable
 */
exports.Product = Product;
Product.prototype.ondcorgcancellable = undefined;

/**
 * @member {Boolean} ondcorgreturnable
 */
Product.prototype.ondcorgreturnable = undefined;

/**
 * @member {module:model/Price2} price
 */
Product.prototype.price = undefined;

/**
 * @member {Boolean} ondcorgsellerPickupReturn
 */
Product.prototype.ondcorgsellerPickupReturn = undefined;

/**
 * @member {Boolean} matched
 */
Product.prototype.matched = undefined;

/**
 * @member {Number} id
 */
Product.prototype.id = undefined;

/**
 * @member {module:model/Descriptor2} descriptor
 */
Product.prototype.descriptor = undefined;

/**
 * @member {String} locationId
 */
Product.prototype.locationId = undefined;

/**
 * @member {module:model/ProviderDetails2} providerDetails
 */
Product.prototype.providerDetails = undefined;

/**
 * @member {Object} locationDetails
 */
Product.prototype.locationDetails = undefined;

/**
 * @member {Object} categoryDetails
 */
Product.prototype.categoryDetails = undefined;

/**
 * @member {Object} fulfillmentDetails
 */
Product.prototype.fulfillmentDetails = undefined;

/**
 * @member {module:model/BppDetails2} bppDetails
 */
Product.prototype.bppDetails = undefined;
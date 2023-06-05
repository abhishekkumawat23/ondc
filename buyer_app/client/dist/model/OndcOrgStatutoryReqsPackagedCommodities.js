"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OndcOrgStatutoryReqsPackagedCommodities = void 0;
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
 * The OndcOrgStatutoryReqsPackagedCommodities model module.
 * @module model/OndcOrgStatutoryReqsPackagedCommodities
 * @version 1.0
 */
var OndcOrgStatutoryReqsPackagedCommodities = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OndcOrgStatutoryReqsPackagedCommodities</code>.
   * @alias module:model/OndcOrgStatutoryReqsPackagedCommodities
   * @class
   * @param description {String} 
   * @param manufacturerOrPackerName {String} 
   * @param manufacturerOrPackerAddress {String} 
   * @param commonOrGenericNameOfCommodity {String} 
   * @param multipleProductsNameNumberOrQty {String} 
   * @param netQuantityOrMeasureOfCommodityInPkg {String} 
   * @param monthYearOfManufacturePackingImport {String} 
   * @param importedProductCountryOfOrigin {String} 
   * @param contactDetailsConsumerCare {String} 
   */
  function OndcOrgStatutoryReqsPackagedCommodities(description, manufacturerOrPackerName, manufacturerOrPackerAddress, commonOrGenericNameOfCommodity, multipleProductsNameNumberOrQty, netQuantityOrMeasureOfCommodityInPkg, monthYearOfManufacturePackingImport, importedProductCountryOfOrigin, contactDetailsConsumerCare) {
    _classCallCheck(this, OndcOrgStatutoryReqsPackagedCommodities);
    this.description = description;
    this.manufacturerOrPackerName = manufacturerOrPackerName;
    this.manufacturerOrPackerAddress = manufacturerOrPackerAddress;
    this.commonOrGenericNameOfCommodity = commonOrGenericNameOfCommodity;
    this.multipleProductsNameNumberOrQty = multipleProductsNameNumberOrQty;
    this.netQuantityOrMeasureOfCommodityInPkg = netQuantityOrMeasureOfCommodityInPkg;
    this.monthYearOfManufacturePackingImport = monthYearOfManufacturePackingImport;
    this.importedProductCountryOfOrigin = importedProductCountryOfOrigin;
    this.contactDetailsConsumerCare = contactDetailsConsumerCare;
  }

  /**
   * Constructs a <code>OndcOrgStatutoryReqsPackagedCommodities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OndcOrgStatutoryReqsPackagedCommodities} obj Optional instance to populate.
   * @return {module:model/OndcOrgStatutoryReqsPackagedCommodities} The populated <code>OndcOrgStatutoryReqsPackagedCommodities</code> instance.
   */
  _createClass(OndcOrgStatutoryReqsPackagedCommodities, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OndcOrgStatutoryReqsPackagedCommodities();
        if (data.hasOwnProperty('description')) obj.description = _ApiClient.ApiClient.convertToType(data['description'], 'String');
        if (data.hasOwnProperty('manufacturer_or_packer_name')) obj.manufacturerOrPackerName = _ApiClient.ApiClient.convertToType(data['manufacturer_or_packer_name'], 'String');
        if (data.hasOwnProperty('manufacturer_or_packer_address')) obj.manufacturerOrPackerAddress = _ApiClient.ApiClient.convertToType(data['manufacturer_or_packer_address'], 'String');
        if (data.hasOwnProperty('common_or_generic_name_of_commodity')) obj.commonOrGenericNameOfCommodity = _ApiClient.ApiClient.convertToType(data['common_or_generic_name_of_commodity'], 'String');
        if (data.hasOwnProperty('multiple_products_name_number_or_qty')) obj.multipleProductsNameNumberOrQty = _ApiClient.ApiClient.convertToType(data['multiple_products_name_number_or_qty'], 'String');
        if (data.hasOwnProperty('net_quantity_or_measure_of_commodity_in_pkg')) obj.netQuantityOrMeasureOfCommodityInPkg = _ApiClient.ApiClient.convertToType(data['net_quantity_or_measure_of_commodity_in_pkg'], 'String');
        if (data.hasOwnProperty('month_year_of_manufacture_packing_import')) obj.monthYearOfManufacturePackingImport = _ApiClient.ApiClient.convertToType(data['month_year_of_manufacture_packing_import'], 'String');
        if (data.hasOwnProperty('imported_product_country_of_origin')) obj.importedProductCountryOfOrigin = _ApiClient.ApiClient.convertToType(data['imported_product_country_of_origin'], 'String');
        if (data.hasOwnProperty('contact_details_consumer_care')) obj.contactDetailsConsumerCare = _ApiClient.ApiClient.convertToType(data['contact_details_consumer_care'], 'String');
      }
      return obj;
    }
  }]);
  return OndcOrgStatutoryReqsPackagedCommodities;
}();
/**
 * @member {String} description
 */
exports.OndcOrgStatutoryReqsPackagedCommodities = OndcOrgStatutoryReqsPackagedCommodities;
OndcOrgStatutoryReqsPackagedCommodities.prototype.description = undefined;

/**
 * @member {String} manufacturerOrPackerName
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.manufacturerOrPackerName = undefined;

/**
 * @member {String} manufacturerOrPackerAddress
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.manufacturerOrPackerAddress = undefined;

/**
 * @member {String} commonOrGenericNameOfCommodity
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.commonOrGenericNameOfCommodity = undefined;

/**
 * @member {String} multipleProductsNameNumberOrQty
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.multipleProductsNameNumberOrQty = undefined;

/**
 * @member {String} netQuantityOrMeasureOfCommodityInPkg
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.netQuantityOrMeasureOfCommodityInPkg = undefined;

/**
 * @member {String} monthYearOfManufacturePackingImport
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.monthYearOfManufacturePackingImport = undefined;

/**
 * @member {String} importedProductCountryOfOrigin
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.importedProductCountryOfOrigin = undefined;

/**
 * @member {String} contactDetailsConsumerCare
 */
OndcOrgStatutoryReqsPackagedCommodities.prototype.contactDetailsConsumerCare = undefined;
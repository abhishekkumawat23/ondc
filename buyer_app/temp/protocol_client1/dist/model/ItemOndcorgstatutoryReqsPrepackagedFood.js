"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ItemOndcorgstatutoryReqsPrepackagedFood = void 0;
var _ApiClient = require("../ApiClient");
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
                                                                                                                                                                                                                                                                                                                                                                                               * Swagger Codegen version: 3.0.46
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ItemOndcorgstatutoryReqsPrepackagedFood model module.
 * @module model/ItemOndcorgstatutoryReqsPrepackagedFood
 * @version 1.0.13
 */
var ItemOndcorgstatutoryReqsPrepackagedFood = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ItemOndcorgstatutoryReqsPrepackagedFood</code>.
   * mandatory for category_id \&quot;Packaged food\&quot; - required attributes include the following - nutritional_info, additives_info, net_quantity; other attributes are required on case-by-case basis
   * @alias module:model/ItemOndcorgstatutoryReqsPrepackagedFood
   * @class
   */
  function ItemOndcorgstatutoryReqsPrepackagedFood() {
    _classCallCheck(this, ItemOndcorgstatutoryReqsPrepackagedFood);
  }

  /**
   * Constructs a <code>ItemOndcorgstatutoryReqsPrepackagedFood</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemOndcorgstatutoryReqsPrepackagedFood} obj Optional instance to populate.
   * @return {module:model/ItemOndcorgstatutoryReqsPrepackagedFood} The populated <code>ItemOndcorgstatutoryReqsPrepackagedFood</code> instance.
   */
  _createClass(ItemOndcorgstatutoryReqsPrepackagedFood, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ItemOndcorgstatutoryReqsPrepackagedFood();
        if (data.hasOwnProperty('ingredients_info')) obj.ingredientsInfo = _ApiClient.ApiClient.convertToType(data['ingredients_info'], 'String');
        if (data.hasOwnProperty('nutritional_info')) obj.nutritionalInfo = _ApiClient.ApiClient.convertToType(data['nutritional_info'], 'String');
        if (data.hasOwnProperty('additives_info')) obj.additivesInfo = _ApiClient.ApiClient.convertToType(data['additives_info'], 'String');
        if (data.hasOwnProperty('manufacturer_or_packer_name')) obj.manufacturerOrPackerName = _ApiClient.ApiClient.convertToType(data['manufacturer_or_packer_name'], 'String');
        if (data.hasOwnProperty('manufacturer_or_packer_address')) obj.manufacturerOrPackerAddress = _ApiClient.ApiClient.convertToType(data['manufacturer_or_packer_address'], 'String');
        if (data.hasOwnProperty('brand_owner_name')) obj.brandOwnerName = _ApiClient.ApiClient.convertToType(data['brand_owner_name'], 'String');
        if (data.hasOwnProperty('brand_owner_address')) obj.brandOwnerAddress = _ApiClient.ApiClient.convertToType(data['brand_owner_address'], 'String');
        if (data.hasOwnProperty('brand_owner_FSSAI_logo')) obj.brandOwnerFSSAILogo = _ApiClient.ApiClient.convertToType(data['brand_owner_FSSAI_logo'], 'String');
        if (data.hasOwnProperty('brand_owner_FSSAI_license_no')) obj.brandOwnerFSSAILicenseNo = _ApiClient.ApiClient.convertToType(data['brand_owner_FSSAI_license_no'], 'String');
        if (data.hasOwnProperty('other_FSSAI_license_no')) obj.otherFSSAILicenseNo = _ApiClient.ApiClient.convertToType(data['other_FSSAI_license_no'], 'String');
        if (data.hasOwnProperty('net_quantity')) obj.netQuantity = _ApiClient.ApiClient.convertToType(data['net_quantity'], 'String');
        if (data.hasOwnProperty('importer_name')) obj.importerName = _ApiClient.ApiClient.convertToType(data['importer_name'], 'String');
        if (data.hasOwnProperty('importer_address')) obj.importerAddress = _ApiClient.ApiClient.convertToType(data['importer_address'], 'String');
        if (data.hasOwnProperty('importer_FSSAI_logo')) obj.importerFSSAILogo = _ApiClient.ApiClient.convertToType(data['importer_FSSAI_logo'], 'String');
        if (data.hasOwnProperty('importer_FSSAI_license_no')) obj.importerFSSAILicenseNo = _ApiClient.ApiClient.convertToType(data['importer_FSSAI_license_no'], 'String');
        if (data.hasOwnProperty('imported_product_country_of_origin')) obj.importedProductCountryOfOrigin = _ApiClient.ApiClient.convertToType(data['imported_product_country_of_origin'], 'String');
        if (data.hasOwnProperty('other_importer_name')) obj.otherImporterName = _ApiClient.ApiClient.convertToType(data['other_importer_name'], 'String');
        if (data.hasOwnProperty('other_importer_address')) obj.otherImporterAddress = _ApiClient.ApiClient.convertToType(data['other_importer_address'], 'String');
        if (data.hasOwnProperty('other_premises')) obj.otherPremises = _ApiClient.ApiClient.convertToType(data['other_premises'], 'String');
        if (data.hasOwnProperty('other_importer_country_of_origin')) obj.otherImporterCountryOfOrigin = _ApiClient.ApiClient.convertToType(data['other_importer_country_of_origin'], 'String');
      }
      return obj;
    }
  }]);
  return ItemOndcorgstatutoryReqsPrepackagedFood;
}();
/**
 * list of ingredients (except single ingredient foods), can be shown as ingredient (with percentage); ingredient (with percentage);..) e.g. \"Puffed Rice (40%); Split Green Gram (20%); Ground Nuts (20%);..\"
 * @member {String} ingredientsInfo
 */
exports.ItemOndcorgstatutoryReqsPrepackagedFood = ItemOndcorgstatutoryReqsPrepackagedFood;
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.ingredientsInfo = undefined;

/**
 * nutritional info (can be shown as nutritional info (with unit, per standard unit, per serving);..) e.g. \"Energy(KCal) - (per 100kg) 420, (per serving 50g) 250; Protein(g) - (per 100kg) 12, (per serving 50g)6;..\"
 * @member {String} nutritionalInfo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.nutritionalInfo = undefined;

/**
 * food additives together with specific name or recognized International Numbering System (can be shown as additive1-name or number;additive2-name or number;..)
 * @member {String} additivesInfo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.additivesInfo = undefined;

/**
 * name of manufacturer or packer (for non-retail containers)
 * @member {String} manufacturerOrPackerName
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.manufacturerOrPackerName = undefined;

/**
 * address of manufacturer or packer (for non-retail containers)
 * @member {String} manufacturerOrPackerAddress
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.manufacturerOrPackerAddress = undefined;

/**
 * name of brand owner
 * @member {String} brandOwnerName
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.brandOwnerName = undefined;

/**
 * address of brand owner
 * @member {String} brandOwnerAddress
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.brandOwnerAddress = undefined;

/**
 * FSSAI logo of brand owner (url based image e.g. uri:http://path/to/image)
 * @member {String} brandOwnerFSSAILogo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.brandOwnerFSSAILogo = undefined;

/**
 * FSSAI license no of brand owner
 * @member {String} brandOwnerFSSAILicenseNo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.brandOwnerFSSAILicenseNo = undefined;

/**
 * FSSAI license no of manufacturer or marketer or packer or bottler if different from brand owner
 * @member {String} otherFSSAILicenseNo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.otherFSSAILicenseNo = undefined;

/**
 * net quantity
 * @member {String} netQuantity
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.netQuantity = undefined;

/**
 * name of importer
 * @member {String} importerName
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.importerName = undefined;

/**
 * address of importer
 * @member {String} importerAddress
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.importerAddress = undefined;

/**
 * FSSAI logo of importer (url based image e.g. uri:http://path/to/image)
 * @member {String} importerFSSAILogo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.importerFSSAILogo = undefined;

/**
 * FSSAI license no of importer
 * @member {String} importerFSSAILicenseNo
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.importerFSSAILicenseNo = undefined;

/**
 * country of origin for imported products (ISO 3166 Alpha-3 code format)
 * @member {String} importedProductCountryOfOrigin
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.importedProductCountryOfOrigin = undefined;

/**
 * name of importer for product manufactured outside but packaged or bottled in India
 * @member {String} otherImporterName
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.otherImporterName = undefined;

/**
 * address of importer for product manufactured outside but packaged or bottled in India
 * @member {String} otherImporterAddress
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.otherImporterAddress = undefined;

/**
 * premises where product manufactured outside are packaged or bottled in India
 * @member {String} otherPremises
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.otherPremises = undefined;

/**
 * country of origin for product manufactured outside but packaged or bottled in India (ISO 3166 Alpha-3 code format)
 * @member {String} otherImporterCountryOfOrigin
 */
ItemOndcorgstatutoryReqsPrepackagedFood.prototype.otherImporterCountryOfOrigin = undefined;
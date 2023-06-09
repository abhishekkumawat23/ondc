/*
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
import {ApiClient} from '../ApiClient';

/**
 * The OndcOrgStatutoryReqsPackagedCommodities model module.
 * @module model/OndcOrgStatutoryReqsPackagedCommodities
 * @version 1.0
 */
export class OndcOrgStatutoryReqsPackagedCommodities {
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
  constructor(description, manufacturerOrPackerName, manufacturerOrPackerAddress, commonOrGenericNameOfCommodity, multipleProductsNameNumberOrQty, netQuantityOrMeasureOfCommodityInPkg, monthYearOfManufacturePackingImport, importedProductCountryOfOrigin, contactDetailsConsumerCare) {
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
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OndcOrgStatutoryReqsPackagedCommodities();
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('manufacturer_or_packer_name'))
        obj.manufacturerOrPackerName = ApiClient.convertToType(data['manufacturer_or_packer_name'], 'String');
      if (data.hasOwnProperty('manufacturer_or_packer_address'))
        obj.manufacturerOrPackerAddress = ApiClient.convertToType(data['manufacturer_or_packer_address'], 'String');
      if (data.hasOwnProperty('common_or_generic_name_of_commodity'))
        obj.commonOrGenericNameOfCommodity = ApiClient.convertToType(data['common_or_generic_name_of_commodity'], 'String');
      if (data.hasOwnProperty('multiple_products_name_number_or_qty'))
        obj.multipleProductsNameNumberOrQty = ApiClient.convertToType(data['multiple_products_name_number_or_qty'], 'String');
      if (data.hasOwnProperty('net_quantity_or_measure_of_commodity_in_pkg'))
        obj.netQuantityOrMeasureOfCommodityInPkg = ApiClient.convertToType(data['net_quantity_or_measure_of_commodity_in_pkg'], 'String');
      if (data.hasOwnProperty('month_year_of_manufacture_packing_import'))
        obj.monthYearOfManufacturePackingImport = ApiClient.convertToType(data['month_year_of_manufacture_packing_import'], 'String');
      if (data.hasOwnProperty('imported_product_country_of_origin'))
        obj.importedProductCountryOfOrigin = ApiClient.convertToType(data['imported_product_country_of_origin'], 'String');
      if (data.hasOwnProperty('contact_details_consumer_care'))
        obj.contactDetailsConsumerCare = ApiClient.convertToType(data['contact_details_consumer_care'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} description
 */
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


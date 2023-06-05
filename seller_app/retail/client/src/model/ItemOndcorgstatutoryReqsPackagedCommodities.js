/*
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
import {ApiClient} from '../ApiClient';

/**
 * The ItemOndcorgstatutoryReqsPackagedCommodities model module.
 * @module model/ItemOndcorgstatutoryReqsPackagedCommodities
 * @version 1.0.13
 */
export class ItemOndcorgstatutoryReqsPackagedCommodities {
  /**
   * Constructs a new <code>ItemOndcorgstatutoryReqsPackagedCommodities</code>.
   * mandatory for category_id \&quot;Packaged Commodities\&quot; - required attributes for all include the following - manufacturer_or_packer_name, manufacturer_or_packer_address, common_or_generic_name_of_commodity, net_quantity_or_measure_of_commodity_in_pkg, month_year_of_manufacture_packing_import; other attributes are required on case-by-case basis
   * @alias module:model/ItemOndcorgstatutoryReqsPackagedCommodities
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ItemOndcorgstatutoryReqsPackagedCommodities</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ItemOndcorgstatutoryReqsPackagedCommodities} obj Optional instance to populate.
   * @return {module:model/ItemOndcorgstatutoryReqsPackagedCommodities} The populated <code>ItemOndcorgstatutoryReqsPackagedCommodities</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ItemOndcorgstatutoryReqsPackagedCommodities();
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
    }
    return obj;
  }
}

/**
 * name of manufacturer or packer (in case manufacturer is not the packer) or name of importer for imported goods
 * @member {String} manufacturerOrPackerName
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.manufacturerOrPackerName = undefined;

/**
 * address of manufacturer or packer (in case manufacturer is not the packer) or address of importer for imported goods
 * @member {String} manufacturerOrPackerAddress
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.manufacturerOrPackerAddress = undefined;

/**
 * common or generic name of commodity
 * @member {String} commonOrGenericNameOfCommodity
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.commonOrGenericNameOfCommodity = undefined;

/**
 * for packages with multiple products, the name and number of quantity of each (can be shown as \"name1-number_or_quantity; name2-number_or_quantity..\")
 * @member {String} multipleProductsNameNumberOrQty
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.multipleProductsNameNumberOrQty = undefined;

/**
 * net quantity of commodity in terms of standard unit of weight or measure of commodity contained in package
 * @member {String} netQuantityOrMeasureOfCommodityInPkg
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.netQuantityOrMeasureOfCommodityInPkg = undefined;

/**
 * month and year of manufacture or packing or import
 * @member {String} monthYearOfManufacturePackingImport
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.monthYearOfManufacturePackingImport = undefined;

/**
 * country of origin for imported products (ISO 3166 Alpha-3 code format)
 * @member {String} importedProductCountryOfOrigin
 */
ItemOndcorgstatutoryReqsPackagedCommodities.prototype.importedProductCountryOfOrigin = undefined;


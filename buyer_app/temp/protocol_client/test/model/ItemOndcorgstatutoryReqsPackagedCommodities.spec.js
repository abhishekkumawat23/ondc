/*
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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OndcProtocolApiForRetailGroceryFb);
  }
}(this, function(expect, OndcProtocolApiForRetailGroceryFb) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ItemOndcorgstatutoryReqsPackagedCommodities', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.ItemOndcorgstatutoryReqsPackagedCommodities();
      });

      it('should create an instance of ItemOndcorgstatutoryReqsPackagedCommodities', function() {
        // TODO: update the code to test ItemOndcorgstatutoryReqsPackagedCommodities
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.ItemOndcorgstatutoryReqsPackagedCommodities);
      });

      it('should have the property manufacturerOrPackerName (base name: "manufacturer_or_packer_name")', function() {
        // TODO: update the code to test the property manufacturerOrPackerName
        expect(instance).to.have.property('manufacturerOrPackerName');
        // expect(instance.manufacturerOrPackerName).to.be(expectedValueLiteral);
      });

      it('should have the property manufacturerOrPackerAddress (base name: "manufacturer_or_packer_address")', function() {
        // TODO: update the code to test the property manufacturerOrPackerAddress
        expect(instance).to.have.property('manufacturerOrPackerAddress');
        // expect(instance.manufacturerOrPackerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property commonOrGenericNameOfCommodity (base name: "common_or_generic_name_of_commodity")', function() {
        // TODO: update the code to test the property commonOrGenericNameOfCommodity
        expect(instance).to.have.property('commonOrGenericNameOfCommodity');
        // expect(instance.commonOrGenericNameOfCommodity).to.be(expectedValueLiteral);
      });

      it('should have the property multipleProductsNameNumberOrQty (base name: "multiple_products_name_number_or_qty")', function() {
        // TODO: update the code to test the property multipleProductsNameNumberOrQty
        expect(instance).to.have.property('multipleProductsNameNumberOrQty');
        // expect(instance.multipleProductsNameNumberOrQty).to.be(expectedValueLiteral);
      });

      it('should have the property netQuantityOrMeasureOfCommodityInPkg (base name: "net_quantity_or_measure_of_commodity_in_pkg")', function() {
        // TODO: update the code to test the property netQuantityOrMeasureOfCommodityInPkg
        expect(instance).to.have.property('netQuantityOrMeasureOfCommodityInPkg');
        // expect(instance.netQuantityOrMeasureOfCommodityInPkg).to.be(expectedValueLiteral);
      });

      it('should have the property monthYearOfManufacturePackingImport (base name: "month_year_of_manufacture_packing_import")', function() {
        // TODO: update the code to test the property monthYearOfManufacturePackingImport
        expect(instance).to.have.property('monthYearOfManufacturePackingImport');
        // expect(instance.monthYearOfManufacturePackingImport).to.be(expectedValueLiteral);
      });

      it('should have the property importedProductCountryOfOrigin (base name: "imported_product_country_of_origin")', function() {
        // TODO: update the code to test the property importedProductCountryOfOrigin
        expect(instance).to.have.property('importedProductCountryOfOrigin');
        // expect(instance.importedProductCountryOfOrigin).to.be(expectedValueLiteral);
      });

      it('should have the property backImageUrl (base name: "back_image_url")', function() {
        // TODO: update the code to test the property backImageUrl
        expect(instance).to.have.property('backImageUrl');
        // expect(instance.backImageUrl).to.be(expectedValueLiteral);
      });

    });
  });

}));

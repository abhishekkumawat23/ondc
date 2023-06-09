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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SandboxClientSdk);
  }
}(this, function(expect, SandboxClientSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Catalog', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Catalog();
      });

      it('should create an instance of Catalog', function() {
        // TODO: update the code to test Catalog
        expect(instance).to.be.a(SandboxClientSdk.Catalog);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property matched (base name: "matched")', function() {
        // TODO: update the code to test the property matched
        expect(instance).to.have.property('matched');
        // expect(instance.matched).to.be(expectedValueLiteral);
      });

      it('should have the property descriptor (base name: "descriptor")', function() {
        // TODO: update the code to test the property descriptor
        expect(instance).to.have.property('descriptor');
        // expect(instance.descriptor).to.be(expectedValueLiteral);
      });

      it('should have the property categoryId (base name: "category_id")', function() {
        // TODO: update the code to test the property categoryId
        expect(instance).to.have.property('categoryId');
        // expect(instance.categoryId).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property providerDetails (base name: "provider_details")', function() {
        // TODO: update the code to test the property providerDetails
        expect(instance).to.have.property('providerDetails');
        // expect(instance.providerDetails).to.be(expectedValueLiteral);
      });

      it('should have the property locationDetails (base name: "location_details")', function() {
        // TODO: update the code to test the property locationDetails
        expect(instance).to.have.property('locationDetails');
        // expect(instance.locationDetails).to.be(expectedValueLiteral);
      });

      it('should have the property categoryDetails (base name: "category_details")', function() {
        // TODO: update the code to test the property categoryDetails
        expect(instance).to.have.property('categoryDetails');
        // expect(instance.categoryDetails).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentDetails (base name: "fulfillment_details")', function() {
        // TODO: update the code to test the property fulfillmentDetails
        expect(instance).to.have.property('fulfillmentDetails');
        // expect(instance.fulfillmentDetails).to.be(expectedValueLiteral);
      });

      it('should have the property bppDetails (base name: "bpp_details")', function() {
        // TODO: update the code to test the property bppDetails
        expect(instance).to.have.property('bppDetails');
        // expect(instance.bppDetails).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgcancellable (base name: "@ondc/org/cancellable")', function() {
        // TODO: update the code to test the property ondcorgcancellable
        expect(instance).to.have.property('ondcorgcancellable');
        // expect(instance.ondcorgcancellable).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnable (base name: "@ondc/org/returnable")', function() {
        // TODO: update the code to test the property ondcorgreturnable
        expect(instance).to.have.property('ondcorgreturnable');
        // expect(instance.ondcorgreturnable).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsellerPickupReturn (base name: "@ondc/org/seller_pickup_return")', function() {
        // TODO: update the code to test the property ondcorgsellerPickupReturn
        expect(instance).to.have.property('ondcorgsellerPickupReturn');
        // expect(instance.ondcorgsellerPickupReturn).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentId (base name: "fulfillment_id")', function() {
        // TODO: update the code to test the property fulfillmentId
        expect(instance).to.have.property('fulfillmentId');
        // expect(instance.fulfillmentId).to.be(expectedValueLiteral);
      });

      it('should have the property related (base name: "related")', function() {
        // TODO: update the code to test the property related
        expect(instance).to.have.property('related');
        // expect(instance.related).to.be(expectedValueLiteral);
      });

      it('should have the property recommended (base name: "recommended")', function() {
        // TODO: update the code to test the property recommended
        expect(instance).to.have.property('recommended');
        // expect(instance.recommended).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnWindow (base name: "@ondc/org/return_window")', function() {
        // TODO: update the code to test the property ondcorgreturnWindow
        expect(instance).to.have.property('ondcorgreturnWindow');
        // expect(instance.ondcorgreturnWindow).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgavailableOnCod (base name: "@ondc/org/available_on_cod")', function() {
        // TODO: update the code to test the property ondcorgavailableOnCod
        expect(instance).to.have.property('ondcorgavailableOnCod');
        // expect(instance.ondcorgavailableOnCod).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgtimeToShip (base name: "@ondc/org/time_to_ship")', function() {
        // TODO: update the code to test the property ondcorgtimeToShip
        expect(instance).to.have.property('ondcorgtimeToShip');
        // expect(instance.ondcorgtimeToShip).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgnetQuantityOrMeasureOfCommodityInPkg (base name: "@ondc/org/net_quantity_or_measure_of_commodity_in_pkg")', function() {
        // TODO: update the code to test the property ondcorgnetQuantityOrMeasureOfCommodityInPkg
        expect(instance).to.have.property('ondcorgnetQuantityOrMeasureOfCommodityInPkg');
        // expect(instance.ondcorgnetQuantityOrMeasureOfCommodityInPkg).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgmonthYearOfManufacturePackingImport (base name: "@ondc/org/month_year_of_manufacture_packing_import")', function() {
        // TODO: update the code to test the property ondcorgmonthYearOfManufacturePackingImport
        expect(instance).to.have.property('ondcorgmonthYearOfManufacturePackingImport');
        // expect(instance.ondcorgmonthYearOfManufacturePackingImport).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgimportedProductCountryOfOrigin (base name: "@ondc/org/imported_product_country_of_origin")', function() {
        // TODO: update the code to test the property ondcorgimportedProductCountryOfOrigin
        expect(instance).to.have.property('ondcorgimportedProductCountryOfOrigin');
        // expect(instance.ondcorgimportedProductCountryOfOrigin).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgcontactDetailsConsumerCare (base name: "@ondc/org/contact_details_consumer_care")', function() {
        // TODO: update the code to test the property ondcorgcontactDetailsConsumerCare
        expect(instance).to.have.property('ondcorgcontactDetailsConsumerCare');
        // expect(instance.ondcorgcontactDetailsConsumerCare).to.be(expectedValueLiteral);
      });

      it('should have the property availableQuantity (base name: "AvailableQuantity")', function() {
        // TODO: update the code to test the property availableQuantity
        expect(instance).to.have.property('availableQuantity');
        // expect(instance.availableQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property providerID (base name: "ProviderID")', function() {
        // TODO: update the code to test the property providerID
        expect(instance).to.have.property('providerID');
        // expect(instance.providerID).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgstatutoryReqsPackagedCommodities (base name: "@ondc/org/statutory_reqs_packaged_commodities")', function() {
        // TODO: update the code to test the property ondcorgstatutoryReqsPackagedCommodities
        expect(instance).to.have.property('ondcorgstatutoryReqsPackagedCommodities');
        // expect(instance.ondcorgstatutoryReqsPackagedCommodities).to.be(expectedValueLiteral);
      });

    });
  });

}));

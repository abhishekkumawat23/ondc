/*
 * ONDC Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
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
    factory(root.expect, root.OndcGateway);
  }
}(this, function(expect, OndcGateway) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('ItemOndcorgstatutoryReqsPrepackagedFood', function() {
      beforeEach(function() {
        instance = new OndcGateway.ItemOndcorgstatutoryReqsPrepackagedFood();
      });

      it('should create an instance of ItemOndcorgstatutoryReqsPrepackagedFood', function() {
        // TODO: update the code to test ItemOndcorgstatutoryReqsPrepackagedFood
        expect(instance).to.be.a(OndcGateway.ItemOndcorgstatutoryReqsPrepackagedFood);
      });

      it('should have the property ingredientsInfo (base name: "ingredients_info")', function() {
        // TODO: update the code to test the property ingredientsInfo
        expect(instance).to.have.property('ingredientsInfo');
        // expect(instance.ingredientsInfo).to.be(expectedValueLiteral);
      });

      it('should have the property nutritionalInfo (base name: "nutritional_info")', function() {
        // TODO: update the code to test the property nutritionalInfo
        expect(instance).to.have.property('nutritionalInfo');
        // expect(instance.nutritionalInfo).to.be(expectedValueLiteral);
      });

      it('should have the property additivesInfo (base name: "additives_info")', function() {
        // TODO: update the code to test the property additivesInfo
        expect(instance).to.have.property('additivesInfo');
        // expect(instance.additivesInfo).to.be(expectedValueLiteral);
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

      it('should have the property brandOwnerName (base name: "brand_owner_name")', function() {
        // TODO: update the code to test the property brandOwnerName
        expect(instance).to.have.property('brandOwnerName');
        // expect(instance.brandOwnerName).to.be(expectedValueLiteral);
      });

      it('should have the property brandOwnerAddress (base name: "brand_owner_address")', function() {
        // TODO: update the code to test the property brandOwnerAddress
        expect(instance).to.have.property('brandOwnerAddress');
        // expect(instance.brandOwnerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property brandOwnerFSSAILogo (base name: "brand_owner_FSSAI_logo")', function() {
        // TODO: update the code to test the property brandOwnerFSSAILogo
        expect(instance).to.have.property('brandOwnerFSSAILogo');
        // expect(instance.brandOwnerFSSAILogo).to.be(expectedValueLiteral);
      });

      it('should have the property brandOwnerFSSAILicenseNo (base name: "brand_owner_FSSAI_license_no")', function() {
        // TODO: update the code to test the property brandOwnerFSSAILicenseNo
        expect(instance).to.have.property('brandOwnerFSSAILicenseNo');
        // expect(instance.brandOwnerFSSAILicenseNo).to.be(expectedValueLiteral);
      });

      it('should have the property otherFSSAILicenseNo (base name: "other_FSSAI_license_no")', function() {
        // TODO: update the code to test the property otherFSSAILicenseNo
        expect(instance).to.have.property('otherFSSAILicenseNo');
        // expect(instance.otherFSSAILicenseNo).to.be(expectedValueLiteral);
      });

      it('should have the property netQuantity (base name: "net_quantity")', function() {
        // TODO: update the code to test the property netQuantity
        expect(instance).to.have.property('netQuantity');
        // expect(instance.netQuantity).to.be(expectedValueLiteral);
      });

      it('should have the property importerName (base name: "importer_name")', function() {
        // TODO: update the code to test the property importerName
        expect(instance).to.have.property('importerName');
        // expect(instance.importerName).to.be(expectedValueLiteral);
      });

      it('should have the property importerAddress (base name: "importer_address")', function() {
        // TODO: update the code to test the property importerAddress
        expect(instance).to.have.property('importerAddress');
        // expect(instance.importerAddress).to.be(expectedValueLiteral);
      });

      it('should have the property importerFSSAILogo (base name: "importer_FSSAI_logo")', function() {
        // TODO: update the code to test the property importerFSSAILogo
        expect(instance).to.have.property('importerFSSAILogo');
        // expect(instance.importerFSSAILogo).to.be(expectedValueLiteral);
      });

      it('should have the property importerFSSAILicenseNo (base name: "importer_FSSAI_license_no")', function() {
        // TODO: update the code to test the property importerFSSAILicenseNo
        expect(instance).to.have.property('importerFSSAILicenseNo');
        // expect(instance.importerFSSAILicenseNo).to.be(expectedValueLiteral);
      });

      it('should have the property importedProductCountryOfOrigin (base name: "imported_product_country_of_origin")', function() {
        // TODO: update the code to test the property importedProductCountryOfOrigin
        expect(instance).to.have.property('importedProductCountryOfOrigin');
        // expect(instance.importedProductCountryOfOrigin).to.be(expectedValueLiteral);
      });

      it('should have the property otherImporterName (base name: "other_importer_name")', function() {
        // TODO: update the code to test the property otherImporterName
        expect(instance).to.have.property('otherImporterName');
        // expect(instance.otherImporterName).to.be(expectedValueLiteral);
      });

      it('should have the property otherImporterAddress (base name: "other_importer_address")', function() {
        // TODO: update the code to test the property otherImporterAddress
        expect(instance).to.have.property('otherImporterAddress');
        // expect(instance.otherImporterAddress).to.be(expectedValueLiteral);
      });

      it('should have the property otherPremises (base name: "other_premises")', function() {
        // TODO: update the code to test the property otherPremises
        expect(instance).to.have.property('otherPremises');
        // expect(instance.otherPremises).to.be(expectedValueLiteral);
      });

      it('should have the property otherImporterCountryOfOrigin (base name: "other_importer_country_of_origin")', function() {
        // TODO: update the code to test the property otherImporterCountryOfOrigin
        expect(instance).to.have.property('otherImporterCountryOfOrigin');
        // expect(instance.otherImporterCountryOfOrigin).to.be(expectedValueLiteral);
      });

    });
  });

}));

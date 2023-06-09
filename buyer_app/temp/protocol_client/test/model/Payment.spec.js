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
    describe('Payment', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Payment();
      });

      it('should create an instance of Payment', function() {
        // TODO: update the code to test Payment
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Payment);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

      it('should have the property tlMethod (base name: "tl_method")', function() {
        // TODO: update the code to test the property tlMethod
        expect(instance).to.have.property('tlMethod');
        // expect(instance.tlMethod).to.be(expectedValueLiteral);
      });

      it('should have the property params (base name: "params")', function() {
        // TODO: update the code to test the property params
        expect(instance).to.have.property('params');
        // expect(instance.params).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property collectedBy (base name: "collected_by")', function() {
        // TODO: update the code to test the property collectedBy
        expect(instance).to.have.property('collectedBy');
        // expect(instance.collectedBy).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgcollectedByStatus (base name: "@ondc/org/collected_by_status")', function() {
        // TODO: update the code to test the property ondcorgcollectedByStatus
        expect(instance).to.have.property('ondcorgcollectedByStatus');
        // expect(instance.ondcorgcollectedByStatus).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgbuyerAppFinderFeeType (base name: "@ondc/org/buyer_app_finder_fee_type")', function() {
        // TODO: update the code to test the property ondcorgbuyerAppFinderFeeType
        expect(instance).to.have.property('ondcorgbuyerAppFinderFeeType');
        // expect(instance.ondcorgbuyerAppFinderFeeType).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgbuyerAppFinderFeeAmount (base name: "@ondc/org/buyer_app_finder_fee_amount")', function() {
        // TODO: update the code to test the property ondcorgbuyerAppFinderFeeAmount
        expect(instance).to.have.property('ondcorgbuyerAppFinderFeeAmount');
        // expect(instance.ondcorgbuyerAppFinderFeeAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgwithholdingAmount (base name: "@ondc/org/withholding_amount")', function() {
        // TODO: update the code to test the property ondcorgwithholdingAmount
        expect(instance).to.have.property('ondcorgwithholdingAmount');
        // expect(instance.ondcorgwithholdingAmount).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgwithholdingAmountStatus (base name: "@ondc/org/withholding_amount_status")', function() {
        // TODO: update the code to test the property ondcorgwithholdingAmountStatus
        expect(instance).to.have.property('ondcorgwithholdingAmountStatus');
        // expect(instance.ondcorgwithholdingAmountStatus).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnWindow (base name: "@ondc/org/return_window")', function() {
        // TODO: update the code to test the property ondcorgreturnWindow
        expect(instance).to.have.property('ondcorgreturnWindow');
        // expect(instance.ondcorgreturnWindow).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnWindowStatus (base name: "@ondc/org/return_window_status")', function() {
        // TODO: update the code to test the property ondcorgreturnWindowStatus
        expect(instance).to.have.property('ondcorgreturnWindowStatus');
        // expect(instance.ondcorgreturnWindowStatus).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsettlementBasis (base name: "@ondc/org/settlement_basis")', function() {
        // TODO: update the code to test the property ondcorgsettlementBasis
        expect(instance).to.have.property('ondcorgsettlementBasis');
        // expect(instance.ondcorgsettlementBasis).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsettlementBasisStatus (base name: "@ondc/org/settlement_basis_status")', function() {
        // TODO: update the code to test the property ondcorgsettlementBasisStatus
        expect(instance).to.have.property('ondcorgsettlementBasisStatus');
        // expect(instance.ondcorgsettlementBasisStatus).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsettlementWindow (base name: "@ondc/org/settlement_window")', function() {
        // TODO: update the code to test the property ondcorgsettlementWindow
        expect(instance).to.have.property('ondcorgsettlementWindow');
        // expect(instance.ondcorgsettlementWindow).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsettlementWindowStatus (base name: "@ondc/org/settlement_window_status")', function() {
        // TODO: update the code to test the property ondcorgsettlementWindowStatus
        expect(instance).to.have.property('ondcorgsettlementWindowStatus');
        // expect(instance.ondcorgsettlementWindowStatus).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsettlementDetails (base name: "@ondc/org/settlement_details")', function() {
        // TODO: update the code to test the property ondcorgsettlementDetails
        expect(instance).to.have.property('ondcorgsettlementDetails');
        // expect(instance.ondcorgsettlementDetails).to.be(expectedValueLiteral);
      });

    });
  });

}));

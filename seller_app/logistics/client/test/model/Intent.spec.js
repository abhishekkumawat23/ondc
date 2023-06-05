/*
 * ONDC Protocol API for logistics
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.9
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
    factory(root.expect, root.OndcProtocolApiForLogistics);
  }
}(this, function(expect, OndcProtocolApiForLogistics) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Intent', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForLogistics.Intent();
      });

      it('should create an instance of Intent', function() {
        // TODO: update the code to test Intent
        expect(instance).to.be.a(OndcProtocolApiForLogistics.Intent);
      });

      it('should have the property descriptor (base name: "descriptor")', function() {
        // TODO: update the code to test the property descriptor
        expect(instance).to.have.property('descriptor');
        // expect(instance.descriptor).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillment (base name: "fulfillment")', function() {
        // TODO: update the code to test the property fulfillment
        expect(instance).to.have.property('fulfillment');
        // expect(instance.fulfillment).to.be(expectedValueLiteral);
      });

      it('should have the property payment (base name: "payment")', function() {
        // TODO: update the code to test the property payment
        expect(instance).to.have.property('payment');
        // expect(instance.payment).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property offer (base name: "offer")', function() {
        // TODO: update the code to test the property offer
        expect(instance).to.have.property('offer');
        // expect(instance.offer).to.be(expectedValueLiteral);
      });

      it('should have the property item (base name: "item")', function() {
        // TODO: update the code to test the property item
        expect(instance).to.have.property('item');
        // expect(instance.item).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgpayloadDetails (base name: "@ondc/org/payload_details")', function() {
        // TODO: update the code to test the property ondcorgpayloadDetails
        expect(instance).to.have.property('ondcorgpayloadDetails');
        // expect(instance.ondcorgpayloadDetails).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));

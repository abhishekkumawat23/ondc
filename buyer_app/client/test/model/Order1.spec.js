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
    describe('Order1', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Order1();
      });

      it('should create an instance of Order1', function() {
        // TODO: update the code to test Order1
        expect(instance).to.be.a(SandboxClientSdk.Order1);
      });

      it('should have the property offers (base name: "offers")', function() {
        // TODO: update the code to test the property offers
        expect(instance).to.have.property('offers');
        // expect(instance.offers).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property addOns (base name: "addOns")', function() {
        // TODO: update the code to test the property addOns
        expect(instance).to.have.property('addOns');
        // expect(instance.addOns).to.be(expectedValueLiteral);
      });

      it('should have the property payment (base name: "payment")', function() {
        // TODO: update the code to test the property payment
        expect(instance).to.have.property('payment');
        // expect(instance.payment).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillment (base name: "fulfillment")', function() {
        // TODO: update the code to test the property fulfillment
        expect(instance).to.have.property('fulfillment');
        // expect(instance.fulfillment).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property billing (base name: "billing")', function() {
        // TODO: update the code to test the property billing
        expect(instance).to.have.property('billing');
        // expect(instance.billing).to.be(expectedValueLiteral);
      });

    });
  });

}));

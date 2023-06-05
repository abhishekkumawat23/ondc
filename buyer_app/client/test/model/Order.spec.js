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
    describe('Order', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Order();
      });

      it('should create an instance of Order', function() {
        // TODO: update the code to test Order
        expect(instance).to.be.a(SandboxClientSdk.Order);
      });

      it('should have the property quote (base name: "quote")', function() {
        // TODO: update the code to test the property quote
        expect(instance).to.have.property('quote');
        // expect(instance.quote).to.be(expectedValueLiteral);
      });

      it('should have the property provider (base name: "provider")', function() {
        // TODO: update the code to test the property provider
        expect(instance).to.have.property('provider');
        // expect(instance.provider).to.be(expectedValueLiteral);
      });

      it('should have the property providerLocation (base name: "provider_location")', function() {
        // TODO: update the code to test the property providerLocation
        expect(instance).to.have.property('providerLocation');
        // expect(instance.providerLocation).to.be(expectedValueLiteral);
      });

      it('should have the property payment (base name: "payment")', function() {
        // TODO: update the code to test the property payment
        expect(instance).to.have.property('payment');
        // expect(instance.payment).to.be(expectedValueLiteral);
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
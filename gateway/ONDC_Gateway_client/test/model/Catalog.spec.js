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
    describe('Catalog', function() {
      beforeEach(function() {
        instance = new OndcGateway.Catalog();
      });

      it('should create an instance of Catalog', function() {
        // TODO: update the code to test Catalog
        expect(instance).to.be.a(OndcGateway.Catalog);
      });

      it('should have the property bppdescriptor (base name: "bpp/descriptor")', function() {
        // TODO: update the code to test the property bppdescriptor
        expect(instance).to.have.property('bppdescriptor');
        // expect(instance.bppdescriptor).to.be(expectedValueLiteral);
      });

      it('should have the property bppcategories (base name: "bpp/categories")', function() {
        // TODO: update the code to test the property bppcategories
        expect(instance).to.have.property('bppcategories');
        // expect(instance.bppcategories).to.be(expectedValueLiteral);
      });

      it('should have the property bppfulfillments (base name: "bpp/fulfillments")', function() {
        // TODO: update the code to test the property bppfulfillments
        expect(instance).to.have.property('bppfulfillments');
        // expect(instance.bppfulfillments).to.be(expectedValueLiteral);
      });

      it('should have the property bpppayments (base name: "bpp/payments")', function() {
        // TODO: update the code to test the property bpppayments
        expect(instance).to.have.property('bpppayments');
        // expect(instance.bpppayments).to.be(expectedValueLiteral);
      });

      it('should have the property bppoffers (base name: "bpp/offers")', function() {
        // TODO: update the code to test the property bppoffers
        expect(instance).to.have.property('bppoffers');
        // expect(instance.bppoffers).to.be(expectedValueLiteral);
      });

      it('should have the property bppproviders (base name: "bpp/providers")', function() {
        // TODO: update the code to test the property bppproviders
        expect(instance).to.have.property('bppproviders');
        // expect(instance.bppproviders).to.be(expectedValueLiteral);
      });

      it('should have the property exp (base name: "exp")', function() {
        // TODO: update the code to test the property exp
        expect(instance).to.have.property('exp');
        // expect(instance.exp).to.be(expectedValueLiteral);
      });

    });
  });

}));

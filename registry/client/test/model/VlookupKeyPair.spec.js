/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
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
    factory(root.expect, root.OndcRegistry_);
  }
}(this, function(expect, OndcRegistry_) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('VlookupKeyPair', function() {
      beforeEach(function() {
        instance = new OndcRegistry_.VlookupKeyPair();
      });

      it('should create an instance of VlookupKeyPair', function() {
        // TODO: update the code to test VlookupKeyPair
        expect(instance).to.be.a(OndcRegistry_.VlookupKeyPair);
      });

      it('should have the property signingPublicKey (base name: "signing_public_key")', function() {
        // TODO: update the code to test the property signingPublicKey
        expect(instance).to.have.property('signingPublicKey');
        // expect(instance.signingPublicKey).to.be(expectedValueLiteral);
      });

      it('should have the property encrPublicKey (base name: "encr_public_key")', function() {
        // TODO: update the code to test the property encrPublicKey
        expect(instance).to.have.property('encrPublicKey');
        // expect(instance.encrPublicKey).to.be(expectedValueLiteral);
      });

      it('should have the property validFrom (base name: "valid_from")', function() {
        // TODO: update the code to test the property validFrom
        expect(instance).to.have.property('validFrom');
        // expect(instance.validFrom).to.be(expectedValueLiteral);
      });

      it('should have the property validUntil (base name: "valid_until")', function() {
        // TODO: update the code to test the property validUntil
        expect(instance).to.have.property('validUntil');
        // expect(instance.validUntil).to.be(expectedValueLiteral);
      });

    });
  });

}));

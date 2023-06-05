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
    describe('Subscriber', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Subscriber();
      });

      it('should create an instance of Subscriber', function() {
        // TODO: update the code to test Subscriber
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Subscriber);
      });

      it('should have the property subscriberId (base name: "subscriber_id")', function() {
        // TODO: update the code to test the property subscriberId
        expect(instance).to.have.property('subscriberId');
        // expect(instance.subscriberId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property cbUrl (base name: "cb_url")', function() {
        // TODO: update the code to test the property cbUrl
        expect(instance).to.have.property('cbUrl');
        // expect(instance.cbUrl).to.be(expectedValueLiteral);
      });

      it('should have the property domain (base name: "domain")', function() {
        // TODO: update the code to test the property domain
        expect(instance).to.have.property('domain');
        // expect(instance.domain).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property signingPublicKey (base name: "signing_public_key")', function() {
        // TODO: update the code to test the property signingPublicKey
        expect(instance).to.have.property('signingPublicKey');
        // expect(instance.signingPublicKey).to.be(expectedValueLiteral);
      });

      it('should have the property encryptionPublicKey (base name: "encryption_public_key")', function() {
        // TODO: update the code to test the property encryptionPublicKey
        expect(instance).to.have.property('encryptionPublicKey');
        // expect(instance.encryptionPublicKey).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property updated (base name: "updated")', function() {
        // TODO: update the code to test the property updated
        expect(instance).to.have.property('updated');
        // expect(instance.updated).to.be(expectedValueLiteral);
      });

      it('should have the property expires (base name: "expires")', function() {
        // TODO: update the code to test the property expires
        expect(instance).to.have.property('expires');
        // expect(instance.expires).to.be(expectedValueLiteral);
      });

    });
  });

}));

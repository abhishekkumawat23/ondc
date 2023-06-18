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
    describe('Provider', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Provider();
      });

      it('should create an instance of Provider', function() {
        // TODO: update the code to test Provider
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Provider);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
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

      it('should have the property ondcorgfssaiLicenseNo (base name: "@ondc/org/fssai_license_no")', function() {
        // TODO: update the code to test the property ondcorgfssaiLicenseNo
        expect(instance).to.have.property('ondcorgfssaiLicenseNo');
        // expect(instance.ondcorgfssaiLicenseNo).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property categories (base name: "categories")', function() {
        // TODO: update the code to test the property categories
        expect(instance).to.have.property('categories');
        // expect(instance.categories).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillments (base name: "fulfillments")', function() {
        // TODO: update the code to test the property fulfillments
        expect(instance).to.have.property('fulfillments');
        // expect(instance.fulfillments).to.be(expectedValueLiteral);
      });

      it('should have the property payments (base name: "payments")', function() {
        // TODO: update the code to test the property payments
        expect(instance).to.have.property('payments');
        // expect(instance.payments).to.be(expectedValueLiteral);
      });

      it('should have the property locations (base name: "locations")', function() {
        // TODO: update the code to test the property locations
        expect(instance).to.have.property('locations');
        // expect(instance.locations).to.be(expectedValueLiteral);
      });

      it('should have the property offers (base name: "offers")', function() {
        // TODO: update the code to test the property offers
        expect(instance).to.have.property('offers');
        // expect(instance.offers).to.be(expectedValueLiteral);
      });

      it('should have the property items (base name: "items")', function() {
        // TODO: update the code to test the property items
        expect(instance).to.have.property('items');
        // expect(instance.items).to.be(expectedValueLiteral);
      });

      it('should have the property ttl (base name: "ttl")', function() {
        // TODO: update the code to test the property ttl
        expect(instance).to.have.property('ttl');
        // expect(instance.ttl).to.be(expectedValueLiteral);
      });

      it('should have the property exp (base name: "exp")', function() {
        // TODO: update the code to test the property exp
        expect(instance).to.have.property('exp');
        // expect(instance.exp).to.be(expectedValueLiteral);
      });

      it('should have the property rateable (base name: "rateable")', function() {
        // TODO: update the code to test the property rateable
        expect(instance).to.have.property('rateable');
        // expect(instance.rateable).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));

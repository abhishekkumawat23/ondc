/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
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
    describe('Offer', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Offer();
      });

      it('should create an instance of Offer', function() {
        // TODO: update the code to test Offer
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Offer);
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

      it('should have the property locationIds (base name: "location_ids")', function() {
        // TODO: update the code to test the property locationIds
        expect(instance).to.have.property('locationIds');
        // expect(instance.locationIds).to.be(expectedValueLiteral);
      });

      it('should have the property categoryIds (base name: "category_ids")', function() {
        // TODO: update the code to test the property categoryIds
        expect(instance).to.have.property('categoryIds');
        // expect(instance.categoryIds).to.be(expectedValueLiteral);
      });

      it('should have the property itemIds (base name: "item_ids")', function() {
        // TODO: update the code to test the property itemIds
        expect(instance).to.have.property('itemIds');
        // expect(instance.itemIds).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

    });
  });

}));

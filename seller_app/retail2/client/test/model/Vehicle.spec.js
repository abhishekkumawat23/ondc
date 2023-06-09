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
    describe('Vehicle', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Vehicle();
      });

      it('should create an instance of Vehicle', function() {
        // TODO: update the code to test Vehicle
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Vehicle);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property capacity (base name: "capacity")', function() {
        // TODO: update the code to test the property capacity
        expect(instance).to.have.property('capacity');
        // expect(instance.capacity).to.be(expectedValueLiteral);
      });

      it('should have the property make (base name: "make")', function() {
        // TODO: update the code to test the property make
        expect(instance).to.have.property('make');
        // expect(instance.make).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property variant (base name: "variant")', function() {
        // TODO: update the code to test the property variant
        expect(instance).to.have.property('variant');
        // expect(instance.variant).to.be(expectedValueLiteral);
      });

      it('should have the property color (base name: "color")', function() {
        // TODO: update the code to test the property color
        expect(instance).to.have.property('color');
        // expect(instance.color).to.be(expectedValueLiteral);
      });

      it('should have the property energyType (base name: "energy_type")', function() {
        // TODO: update the code to test the property energyType
        expect(instance).to.have.property('energyType');
        // expect(instance.energyType).to.be(expectedValueLiteral);
      });

      it('should have the property registration (base name: "registration")', function() {
        // TODO: update the code to test the property registration
        expect(instance).to.have.property('registration');
        // expect(instance.registration).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('AddOn', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForLogistics.AddOn();
      });

      it('should create an instance of AddOn', function() {
        // TODO: update the code to test AddOn
        expect(instance).to.be.a(OndcProtocolApiForLogistics.AddOn);
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

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

    });
  });

}));
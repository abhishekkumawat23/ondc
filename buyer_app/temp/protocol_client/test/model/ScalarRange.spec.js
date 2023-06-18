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
    describe('ScalarRange', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.ScalarRange();
      });

      it('should create an instance of ScalarRange', function() {
        // TODO: update the code to test ScalarRange
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.ScalarRange);
      });

      it('should have the property min (base name: "min")', function() {
        // TODO: update the code to test the property min
        expect(instance).to.have.property('min');
        // expect(instance.min).to.be(expectedValueLiteral);
      });

      it('should have the property max (base name: "max")', function() {
        // TODO: update the code to test the property max
        expect(instance).to.have.property('max');
        // expect(instance.max).to.be(expectedValueLiteral);
      });

    });
  });

}));

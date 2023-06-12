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
    describe('AllOfProviderLocationsItems', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.AllOfProviderLocationsItems();
      });

      it('should create an instance of AllOfProviderLocationsItems', function() {
        // TODO: update the code to test AllOfProviderLocationsItems
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.AllOfProviderLocationsItems);
      });

      it('should have the property rateable (base name: "rateable")', function() {
        // TODO: update the code to test the property rateable
        expect(instance).to.have.property('rateable');
        // expect(instance.rateable).to.be(expectedValueLiteral);
      });

    });
  });

}));

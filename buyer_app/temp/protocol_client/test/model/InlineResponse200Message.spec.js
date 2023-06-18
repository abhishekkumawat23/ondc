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
    describe('InlineResponse200Message', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.InlineResponse200Message();
      });

      it('should create an instance of InlineResponse200Message', function() {
        // TODO: update the code to test InlineResponse200Message
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.InlineResponse200Message);
      });

      it('should have the property ack (base name: "ack")', function() {
        // TODO: update the code to test the property ack
        expect(instance).to.have.property('ack');
        // expect(instance.ack).to.be(expectedValueLiteral);
      });

    });
  });

}));

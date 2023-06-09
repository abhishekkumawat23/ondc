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
    describe('ItemQuantityMaximum', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForLogistics.ItemQuantityMaximum();
      });

      it('should create an instance of ItemQuantityMaximum', function() {
        // TODO: update the code to test ItemQuantityMaximum
        expect(instance).to.be.a(OndcProtocolApiForLogistics.ItemQuantityMaximum);
      });

      it('should have the property count (base name: "count")', function() {
        // TODO: update the code to test the property count
        expect(instance).to.have.property('count');
        // expect(instance.count).to.be(expectedValueLiteral);
      });

      it('should have the property measure (base name: "measure")', function() {
        // TODO: update the code to test the property measure
        expect(instance).to.have.property('measure');
        // expect(instance.measure).to.be(expectedValueLiteral);
      });

    });
  });

}));

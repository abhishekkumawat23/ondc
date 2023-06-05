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
    describe('IntentOndcorgpayloadDetails', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForLogistics.IntentOndcorgpayloadDetails();
      });

      it('should create an instance of IntentOndcorgpayloadDetails', function() {
        // TODO: update the code to test IntentOndcorgpayloadDetails
        expect(instance).to.be.a(OndcProtocolApiForLogistics.IntentOndcorgpayloadDetails);
      });

      it('should have the property weight (base name: "weight")', function() {
        // TODO: update the code to test the property weight
        expect(instance).to.have.property('weight');
        // expect(instance.weight).to.be(expectedValueLiteral);
      });

      it('should have the property dimensions (base name: "dimensions")', function() {
        // TODO: update the code to test the property dimensions
        expect(instance).to.have.property('dimensions');
        // expect(instance.dimensions).to.be(expectedValueLiteral);
      });

      it('should have the property category (base name: "category")', function() {
        // TODO: update the code to test the property category
        expect(instance).to.have.property('category');
        // expect(instance.category).to.be(expectedValueLiteral);
      });

      it('should have the property value (base name: "value")', function() {
        // TODO: update the code to test the property value
        expect(instance).to.have.property('value');
        // expect(instance.value).to.be(expectedValueLiteral);
      });

      it('should have the property dangerousGoods (base name: "dangerous_goods")', function() {
        // TODO: update the code to test the property dangerousGoods
        expect(instance).to.have.property('dangerousGoods');
        // expect(instance.dangerousGoods).to.be(expectedValueLiteral);
      });

    });
  });

}));

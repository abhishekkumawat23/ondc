/*
 * ONDC Gateway
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.45
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
    factory(root.expect, root.OndcGateway);
  }
}(this, function(expect, OndcGateway) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse200Message', function() {
      beforeEach(function() {
        instance = new OndcGateway.InlineResponse200Message();
      });

      it('should create an instance of InlineResponse200Message', function() {
        // TODO: update the code to test InlineResponse200Message
        expect(instance).to.be.a(OndcGateway.InlineResponse200Message);
      });

      it('should have the property ack (base name: "ack")', function() {
        // TODO: update the code to test the property ack
        expect(instance).to.have.property('ack');
        // expect(instance.ack).to.be(expectedValueLiteral);
      });

    });
  });

}));

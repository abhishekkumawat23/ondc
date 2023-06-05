/*
 * ONDC Protocol Core API
 * ONDC Protocol Core API specification. This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.0
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
    factory(root.expect, root.OndcProtocolCoreApi);
  }
}(this, function(expect, OndcProtocolCoreApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('RatingAck', function() {
      beforeEach(function() {
        instance = new OndcProtocolCoreApi.RatingAck();
      });

      it('should create an instance of RatingAck', function() {
        // TODO: update the code to test RatingAck
        expect(instance).to.be.a(OndcProtocolCoreApi.RatingAck);
      });

      it('should have the property feedbackAck (base name: "feedback_ack")', function() {
        // TODO: update the code to test the property feedbackAck
        expect(instance).to.have.property('feedbackAck');
        // expect(instance.feedbackAck).to.be(expectedValueLiteral);
      });

      it('should have the property ratingAck (base name: "rating_ack")', function() {
        // TODO: update the code to test the property ratingAck
        expect(instance).to.have.property('ratingAck');
        // expect(instance.ratingAck).to.be(expectedValueLiteral);
      });

    });
  });

}));

/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
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
    factory(root.expect, root.OndcRegistry_);
  }
}(this, function(expect, OndcRegistry_) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('SubscriberUrlOnSubscribeBody', function() {
      beforeEach(function() {
        instance = new OndcRegistry_.SubscriberUrlOnSubscribeBody();
      });

      it('should create an instance of SubscriberUrlOnSubscribeBody', function() {
        // TODO: update the code to test SubscriberUrlOnSubscribeBody
        expect(instance).to.be.a(OndcRegistry_.SubscriberUrlOnSubscribeBody);
      });

      it('should have the property subscriberId (base name: "subscriber_id")', function() {
        // TODO: update the code to test the property subscriberId
        expect(instance).to.have.property('subscriberId');
        // expect(instance.subscriberId).to.be(expectedValueLiteral);
      });

      it('should have the property challenge (base name: "challenge")', function() {
        // TODO: update the code to test the property challenge
        expect(instance).to.have.property('challenge');
        // expect(instance.challenge).to.be(expectedValueLiteral);
      });

    });
  });

}));
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
    describe('Fulfillment', function() {
      beforeEach(function() {
        instance = new OndcProtocolCoreApi.Fulfillment();
      });

      it('should create an instance of Fulfillment', function() {
        // TODO: update the code to test Fulfillment
        expect(instance).to.be.a(OndcProtocolCoreApi.Fulfillment);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property providerId (base name: "provider_id")', function() {
        // TODO: update the code to test the property providerId
        expect(instance).to.have.property('providerId');
        // expect(instance.providerId).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property tracking (base name: "tracking")', function() {
        // TODO: update the code to test the property tracking
        expect(instance).to.have.property('tracking');
        // expect(instance.tracking).to.be(expectedValueLiteral);
      });

      it('should have the property customer (base name: "customer")', function() {
        // TODO: update the code to test the property customer
        expect(instance).to.have.property('customer');
        // expect(instance.customer).to.be(expectedValueLiteral);
      });

      it('should have the property agent (base name: "agent")', function() {
        // TODO: update the code to test the property agent
        expect(instance).to.have.property('agent');
        // expect(instance.agent).to.be(expectedValueLiteral);
      });

      it('should have the property person (base name: "person")', function() {
        // TODO: update the code to test the property person
        expect(instance).to.have.property('person');
        // expect(instance.person).to.be(expectedValueLiteral);
      });

      it('should have the property contact (base name: "contact")', function() {
        // TODO: update the code to test the property contact
        expect(instance).to.have.property('contact');
        // expect(instance.contact).to.be(expectedValueLiteral);
      });

      it('should have the property vehicle (base name: "vehicle")', function() {
        // TODO: update the code to test the property vehicle
        expect(instance).to.have.property('vehicle');
        // expect(instance.vehicle).to.be(expectedValueLiteral);
      });

      it('should have the property start (base name: "start")', function() {
        // TODO: update the code to test the property start
        expect(instance).to.have.property('start');
        // expect(instance.start).to.be(expectedValueLiteral);
      });

      it('should have the property end (base name: "end")', function() {
        // TODO: update the code to test the property end
        expect(instance).to.have.property('end');
        // expect(instance.end).to.be(expectedValueLiteral);
      });

      it('should have the property rateable (base name: "rateable")', function() {
        // TODO: update the code to test the property rateable
        expect(instance).to.have.property('rateable');
        // expect(instance.rateable).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));

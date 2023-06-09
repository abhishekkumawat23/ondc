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
    describe('FulfillmentEnd', function() {
      beforeEach(function() {
        instance = new OndcGateway.FulfillmentEnd();
      });

      it('should create an instance of FulfillmentEnd', function() {
        // TODO: update the code to test FulfillmentEnd
        expect(instance).to.be.a(OndcGateway.FulfillmentEnd);
      });

      it('should have the property location (base name: "location")', function() {
        // TODO: update the code to test the property location
        expect(instance).to.have.property('location');
        // expect(instance.location).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property instructions (base name: "instructions")', function() {
        // TODO: update the code to test the property instructions
        expect(instance).to.have.property('instructions');
        // expect(instance.instructions).to.be(expectedValueLiteral);
      });

      it('should have the property contact (base name: "contact")', function() {
        // TODO: update the code to test the property contact
        expect(instance).to.have.property('contact');
        // expect(instance.contact).to.be(expectedValueLiteral);
      });

      it('should have the property person (base name: "person")', function() {
        // TODO: update the code to test the property person
        expect(instance).to.have.property('person');
        // expect(instance.person).to.be(expectedValueLiteral);
      });

      it('should have the property authorization (base name: "authorization")', function() {
        // TODO: update the code to test the property authorization
        expect(instance).to.have.property('authorization');
        // expect(instance.authorization).to.be(expectedValueLiteral);
      });

    });
  });

}));

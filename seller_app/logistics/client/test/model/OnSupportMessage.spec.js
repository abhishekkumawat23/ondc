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
    describe('OnSupportMessage', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForLogistics.OnSupportMessage();
      });

      it('should create an instance of OnSupportMessage', function() {
        // TODO: update the code to test OnSupportMessage
        expect(instance).to.be.a(OndcProtocolApiForLogistics.OnSupportMessage);
      });

      it('should have the property phone (base name: "phone")', function() {
        // TODO: update the code to test the property phone
        expect(instance).to.have.property('phone');
        // expect(instance.phone).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property uri (base name: "uri")', function() {
        // TODO: update the code to test the property uri
        expect(instance).to.have.property('uri');
        // expect(instance.uri).to.be(expectedValueLiteral);
      });

    });
  });

}));

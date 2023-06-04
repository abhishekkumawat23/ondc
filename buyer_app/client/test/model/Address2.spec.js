/*
 * sandbox-client-sdk
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
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
    factory(root.expect, root.SandboxClientSdk);
  }
}(this, function(expect, SandboxClientSdk) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('Address2', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Address2();
      });

      it('should create an instance of Address2', function() {
        // TODO: update the code to test Address2
        expect(instance).to.be.a(SandboxClientSdk.Address2);
      });

      it('should have the property door (base name: "door")', function() {
        // TODO: update the code to test the property door
        expect(instance).to.have.property('door');
        // expect(instance.door).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property street (base name: "street")', function() {
        // TODO: update the code to test the property street
        expect(instance).to.have.property('street');
        // expect(instance.street).to.be(expectedValueLiteral);
      });

      it('should have the property areaCode (base name: "area_code")', function() {
        // TODO: update the code to test the property areaCode
        expect(instance).to.have.property('areaCode');
        // expect(instance.areaCode).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property locality (base name: "locality")', function() {
        // TODO: update the code to test the property locality
        expect(instance).to.have.property('locality');
        // expect(instance.locality).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "state")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property building (base name: "building")', function() {
        // TODO: update the code to test the property building
        expect(instance).to.have.property('building');
        // expect(instance.building).to.be(expectedValueLiteral);
      });

    });
  });

}));

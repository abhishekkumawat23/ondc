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
    describe('Ondeliveryaddress', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Ondeliveryaddress();
      });

      it('should create an instance of Ondeliveryaddress', function() {
        // TODO: update the code to test Ondeliveryaddress
        expect(instance).to.be.a(SandboxClientSdk.Ondeliveryaddress);
      });

      it('should have the property id (base name: "_id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property userId (base name: "userId")', function() {
        // TODO: update the code to test the property userId
        expect(instance).to.have.property('userId');
        // expect(instance.userId).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property descriptor (base name: "descriptor")', function() {
        // TODO: update the code to test the property descriptor
        expect(instance).to.have.property('descriptor');
        // expect(instance.descriptor).to.be(expectedValueLiteral);
      });

      it('should have the property gps (base name: "gps")', function() {
        // TODO: update the code to test the property gps
        expect(instance).to.have.property('gps');
        // expect(instance.gps).to.be(expectedValueLiteral);
      });

      it('should have the property defaultAddress (base name: "defaultAddress")', function() {
        // TODO: update the code to test the property defaultAddress
        expect(instance).to.have.property('defaultAddress');
        // expect(instance.defaultAddress).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property updatedAt (base name: "updatedAt")', function() {
        // TODO: update the code to test the property updatedAt
        expect(instance).to.have.property('updatedAt');
        // expect(instance.updatedAt).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "createdAt")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property v (base name: "__v")', function() {
        // TODO: update the code to test the property v
        expect(instance).to.have.property('v');
        // expect(instance.v).to.be(expectedValueLiteral);
      });

    });
  });

}));

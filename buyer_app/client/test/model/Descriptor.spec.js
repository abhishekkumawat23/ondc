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
    describe('Descriptor', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Descriptor();
      });

      it('should create an instance of Descriptor', function() {
        // TODO: update the code to test Descriptor
        expect(instance).to.be.a(SandboxClientSdk.Descriptor);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property images (base name: "images")', function() {
        // TODO: update the code to test the property images
        expect(instance).to.have.property('images');
        // expect(instance.images).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property longDesc (base name: "long_desc")', function() {
        // TODO: update the code to test the property longDesc
        expect(instance).to.have.property('longDesc');
        // expect(instance.longDesc).to.be(expectedValueLiteral);
      });

      it('should have the property shortDesc (base name: "short_desc")', function() {
        // TODO: update the code to test the property shortDesc
        expect(instance).to.have.property('shortDesc');
        // expect(instance.shortDesc).to.be(expectedValueLiteral);
      });

    });
  });

}));

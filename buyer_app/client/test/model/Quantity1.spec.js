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
    describe('Quantity1', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Quantity1();
      });

      it('should create an instance of Quantity1', function() {
        // TODO: update the code to test Quantity1
        expect(instance).to.be.a(SandboxClientSdk.Quantity1);
      });

      it('should have the property selected (base name: "selected")', function() {
        // TODO: update the code to test the property selected
        expect(instance).to.have.property('selected');
        // expect(instance.selected).to.be(expectedValueLiteral);
      });

    });
  });

}));
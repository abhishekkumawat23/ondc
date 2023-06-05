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
    describe('Criteria', function() {
      beforeEach(function() {
        instance = new SandboxClientSdk.Criteria();
      });

      it('should create an instance of Criteria', function() {
        // TODO: update the code to test Criteria
        expect(instance).to.be.a(SandboxClientSdk.Criteria);
      });

      it('should have the property searchString (base name: "search_string")', function() {
        // TODO: update the code to test the property searchString
        expect(instance).to.have.property('searchString');
        // expect(instance.searchString).to.be(expectedValueLiteral);
      });

      it('should have the property deliveryLocation (base name: "delivery_location")', function() {
        // TODO: update the code to test the property deliveryLocation
        expect(instance).to.have.property('deliveryLocation');
        // expect(instance.deliveryLocation).to.be(expectedValueLiteral);
      });

    });
  });

}));
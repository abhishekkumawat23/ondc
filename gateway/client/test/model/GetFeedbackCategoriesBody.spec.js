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
    describe('GetFeedbackCategoriesBody', function() {
      beforeEach(function() {
        instance = new OndcProtocolCoreApi.GetFeedbackCategoriesBody();
      });

      it('should create an instance of GetFeedbackCategoriesBody', function() {
        // TODO: update the code to test GetFeedbackCategoriesBody
        expect(instance).to.be.a(OndcProtocolCoreApi.GetFeedbackCategoriesBody);
      });

      it('should have the property context (base name: "context")', function() {
        // TODO: update the code to test the property context
        expect(instance).to.have.property('context');
        // expect(instance.context).to.be(expectedValueLiteral);
      });

    });
  });

}));

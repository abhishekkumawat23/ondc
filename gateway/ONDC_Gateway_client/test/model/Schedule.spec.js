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
    describe('Schedule', function() {
      beforeEach(function() {
        instance = new OndcGateway.Schedule();
      });

      it('should create an instance of Schedule', function() {
        // TODO: update the code to test Schedule
        expect(instance).to.be.a(OndcGateway.Schedule);
      });

      it('should have the property frequency (base name: "frequency")', function() {
        // TODO: update the code to test the property frequency
        expect(instance).to.have.property('frequency');
        // expect(instance.frequency).to.be(expectedValueLiteral);
      });

      it('should have the property holidays (base name: "holidays")', function() {
        // TODO: update the code to test the property holidays
        expect(instance).to.have.property('holidays');
        // expect(instance.holidays).to.be(expectedValueLiteral);
      });

      it('should have the property times (base name: "times")', function() {
        // TODO: update the code to test the property times
        expect(instance).to.have.property('times');
        // expect(instance.times).to.be(expectedValueLiteral);
      });

    });
  });

}));
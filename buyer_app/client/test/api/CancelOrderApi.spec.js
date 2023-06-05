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

  beforeEach(function() {
    instance = new SandboxClientSdk.CancelOrderApi();
  });

  describe('(package)', function() {
    describe('CancelOrderApi', function() {
      describe('cancelorder', function() {
        it('should call cancelorder successfully', function(done) {
          // TODO: uncomment, update parameter values for cancelorder call and complete the assertions
          /*

          instance.cancelorder(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SandboxClientSdk.Cancelorder);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('oncancelorder', function() {
        it('should call oncancelorder successfully', function(done) {
          // TODO: uncomment, update parameter values for oncancelorder call and complete the assertions
          /*

          instance.oncancelorder(messageId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SandboxClientSdk.OncancelorderErrorresponse);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
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
    instance = new SandboxClientSdk.DeliveryAddressApi();
  });

  describe('(package)', function() {
    describe('DeliveryAddressApi', function() {
      describe('adddeliveryaddress', function() {
        it('should call adddeliveryaddress successfully', function(done) {
          // TODO: uncomment, update parameter values for adddeliveryaddress call and complete the assertions
          /*

          instance.adddeliveryaddress(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SandboxClientSdk.Adddeliveryaddress);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('ondeliveryaddress', function() {
        it('should call ondeliveryaddress successfully', function(done) {
          // TODO: uncomment ondeliveryaddress call and complete the assertions
          /*

          instance.ondeliveryaddress(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(SandboxClientSdk.Ondeliveryaddress);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatedeliveryaddress', function() {
        it('should call updatedeliveryaddress successfully', function(done) {
          // TODO: uncomment, update parameter values for updatedeliveryaddress call and complete the assertions
          /*

          instance.updatedeliveryaddress(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(SandboxClientSdk.Updatedeliveryaddress);

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

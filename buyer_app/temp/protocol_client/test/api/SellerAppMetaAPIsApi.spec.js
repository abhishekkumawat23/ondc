/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.29
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
    factory(root.expect, root.OndcProtocolApiForRetailGroceryFb);
  }
}(this, function(expect, OndcProtocolApiForRetailGroceryFb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OndcProtocolApiForRetailGroceryFb.SellerAppMetaAPIsApi();
  });

  describe('(package)', function() {
    describe('SellerAppMetaAPIsApi', function() {
      describe('getCancellationReasonsPost', function() {
        it('should call getCancellationReasonsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for getCancellationReasonsPost call and complete the assertions
          /*
          var opts = {};

          instance.getCancellationReasonsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OndcProtocolApiForRetailGroceryFb.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getFeedbackFormPost', function() {
        it('should call getFeedbackFormPost successfully', function(done) {
          // TODO: uncomment, update parameter values for getFeedbackFormPost call and complete the assertions
          /*
          var opts = {};

          instance.getFeedbackFormPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OndcProtocolApiForRetailGroceryFb.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getRatingCategoriesPost', function() {
        it('should call getRatingCategoriesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for getRatingCategoriesPost call and complete the assertions
          /*
          var opts = {};

          instance.getRatingCategoriesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OndcProtocolApiForRetailGroceryFb.InlineResponse200);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getReturnReasonsPost', function() {
        it('should call getReturnReasonsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for getReturnReasonsPost call and complete the assertions
          /*
          var opts = {};

          instance.getReturnReasonsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(OndcProtocolApiForRetailGroceryFb.InlineResponse200);

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

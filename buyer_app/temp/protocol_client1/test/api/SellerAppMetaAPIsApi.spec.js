/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.46
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
      describe('getCancellationReasonsPOST', function() {
        it('should call getCancellationReasonsPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getCancellationReasonsPOST call and complete the assertions
          /*
          var opts = {};

          instance.getCancellationReasonsPOST(opts, function(error, data, response) {
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
      describe('getFeedbackFormPOST', function() {
        it('should call getFeedbackFormPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getFeedbackFormPOST call and complete the assertions
          /*
          var opts = {};

          instance.getFeedbackFormPOST(opts, function(error, data, response) {
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
      describe('getRatingCategoriesPOST', function() {
        it('should call getRatingCategoriesPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getRatingCategoriesPOST call and complete the assertions
          /*
          var opts = {};

          instance.getRatingCategoriesPOST(opts, function(error, data, response) {
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
      describe('getReturnReasonsPOST', function() {
        it('should call getReturnReasonsPOST successfully', function(done) {
          // TODO: uncomment, update parameter values for getReturnReasonsPOST call and complete the assertions
          /*
          var opts = {};

          instance.getReturnReasonsPOST(opts, function(error, data, response) {
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
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
    instance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
  });

  describe('(package)', function() {
    describe('BuyerAppMetaAPIsApi', function() {
      describe('cancellationReasonsPost', function() {
        it('should call cancellationReasonsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for cancellationReasonsPost call and complete the assertions
          /*
          var opts = {};

          instance.cancellationReasonsPost(opts, function(error, data, response) {
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
      describe('feedbackCategoriesPost', function() {
        it('should call feedbackCategoriesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for feedbackCategoriesPost call and complete the assertions
          /*
          var opts = {};

          instance.feedbackCategoriesPost(opts, function(error, data, response) {
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
      describe('feedbackFormPost', function() {
        it('should call feedbackFormPost successfully', function(done) {
          // TODO: uncomment, update parameter values for feedbackFormPost call and complete the assertions
          /*
          var opts = {};

          instance.feedbackFormPost(opts, function(error, data, response) {
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
      describe('ratingCategoriesPost', function() {
        it('should call ratingCategoriesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for ratingCategoriesPost call and complete the assertions
          /*
          var opts = {};

          instance.ratingCategoriesPost(opts, function(error, data, response) {
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
      describe('returnReasonsPost', function() {
        it('should call returnReasonsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for returnReasonsPost call and complete the assertions
          /*
          var opts = {};

          instance.returnReasonsPost(opts, function(error, data, response) {
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

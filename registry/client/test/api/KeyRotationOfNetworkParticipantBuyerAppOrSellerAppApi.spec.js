/*
 * ONDC Registry 
 * ONDC Participant Management API
 *
 * OpenAPI spec version: 2.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
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
    factory(root.expect, root.OndcRegistry_);
  }
}(this, function(expect, OndcRegistry_) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OndcRegistry_.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi();
  });

  describe('(package)', function() {
    describe('KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi', function() {
      describe('vlookupPost', function() {
        it('should call vlookupPost successfully', function(done) {
          // TODO: uncomment, update parameter values for vlookupPost call and complete the assertions
          /*
          var opts = {};

          instance.vlookupPost(opts, function(error, data, response) {
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
              expect(data).to.be.a(OndcRegistry_.InlineResponse2003);
            }

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
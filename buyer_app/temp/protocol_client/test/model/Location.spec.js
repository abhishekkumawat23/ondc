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

  describe('(package)', function() {
    describe('Location', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Location();
      });

      it('should create an instance of Location', function() {
        // TODO: update the code to test Location
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Location);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property descriptor (base name: "descriptor")', function() {
        // TODO: update the code to test the property descriptor
        expect(instance).to.have.property('descriptor');
        // expect(instance.descriptor).to.be(expectedValueLiteral);
      });

      it('should have the property gps (base name: "gps")', function() {
        // TODO: update the code to test the property gps
        expect(instance).to.have.property('gps');
        // expect(instance.gps).to.be(expectedValueLiteral);
      });

      it('should have the property address (base name: "address")', function() {
        // TODO: update the code to test the property address
        expect(instance).to.have.property('address');
        // expect(instance.address).to.be(expectedValueLiteral);
      });

      it('should have the property stationCode (base name: "station_code")', function() {
        // TODO: update the code to test the property stationCode
        expect(instance).to.have.property('stationCode');
        // expect(instance.stationCode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property circle (base name: "circle")', function() {
        // TODO: update the code to test the property circle
        expect(instance).to.have.property('circle');
        // expect(instance.circle).to.be(expectedValueLiteral);
      });

      it('should have the property polygon (base name: "polygon")', function() {
        // TODO: update the code to test the property polygon
        expect(instance).to.have.property('polygon');
        // expect(instance.polygon).to.be(expectedValueLiteral);
      });

      it('should have the property _3dspace (base name: "3dspace")', function() {
        // TODO: update the code to test the property _3dspace
        expect(instance).to.have.property('_3dspace');
        // expect(instance._3dspace).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

    });
  });

}));

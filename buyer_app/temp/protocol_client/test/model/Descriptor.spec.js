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
    describe('Descriptor', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Descriptor();
      });

      it('should create an instance of Descriptor', function() {
        // TODO: update the code to test Descriptor
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Descriptor);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property symbol (base name: "symbol")', function() {
        // TODO: update the code to test the property symbol
        expect(instance).to.have.property('symbol');
        // expect(instance.symbol).to.be(expectedValueLiteral);
      });

      it('should have the property shortDesc (base name: "short_desc")', function() {
        // TODO: update the code to test the property shortDesc
        expect(instance).to.have.property('shortDesc');
        // expect(instance.shortDesc).to.be(expectedValueLiteral);
      });

      it('should have the property longDesc (base name: "long_desc")', function() {
        // TODO: update the code to test the property longDesc
        expect(instance).to.have.property('longDesc');
        // expect(instance.longDesc).to.be(expectedValueLiteral);
      });

      it('should have the property images (base name: "images")', function() {
        // TODO: update the code to test the property images
        expect(instance).to.have.property('images');
        // expect(instance.images).to.be(expectedValueLiteral);
      });

      it('should have the property audio (base name: "audio")', function() {
        // TODO: update the code to test the property audio
        expect(instance).to.have.property('audio');
        // expect(instance.audio).to.be(expectedValueLiteral);
      });

      it('should have the property _3dRender (base name: "3d_render")', function() {
        // TODO: update the code to test the property _3dRender
        expect(instance).to.have.property('_3dRender');
        // expect(instance._3dRender).to.be(expectedValueLiteral);
      });

    });
  });

}));

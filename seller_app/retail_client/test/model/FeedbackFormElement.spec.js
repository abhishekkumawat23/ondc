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

  describe('(package)', function() {
    describe('FeedbackFormElement', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.FeedbackFormElement();
      });

      it('should create an instance of FeedbackFormElement', function() {
        // TODO: update the code to test FeedbackFormElement
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.FeedbackFormElement);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property parentId (base name: "parent_id")', function() {
        // TODO: update the code to test the property parentId
        expect(instance).to.have.property('parentId');
        // expect(instance.parentId).to.be(expectedValueLiteral);
      });

      it('should have the property question (base name: "question")', function() {
        // TODO: update the code to test the property question
        expect(instance).to.have.property('question');
        // expect(instance.question).to.be(expectedValueLiteral);
      });

      it('should have the property answer (base name: "answer")', function() {
        // TODO: update the code to test the property answer
        expect(instance).to.have.property('answer');
        // expect(instance.answer).to.be(expectedValueLiteral);
      });

      it('should have the property answerType (base name: "answer_type")', function() {
        // TODO: update the code to test the property answerType
        expect(instance).to.have.property('answerType');
        // expect(instance.answerType).to.be(expectedValueLiteral);
      });

    });
  });

}));

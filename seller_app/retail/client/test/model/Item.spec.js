/*
 * ONDC Protocol API for retail (grocery, f&b)
 * ONDC Protocol API specification, which includes statutory requirements for packaged commodities and pre-packaged food This is an adaptation of Beckn Core version 0.9.3
 *
 * OpenAPI spec version: 1.0.13
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
    describe('Item', function() {
      beforeEach(function() {
        instance = new OndcProtocolApiForRetailGroceryFb.Item();
      });

      it('should create an instance of Item', function() {
        // TODO: update the code to test Item
        expect(instance).to.be.a(OndcProtocolApiForRetailGroceryFb.Item);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property parentItemId (base name: "parent_item_id")', function() {
        // TODO: update the code to test the property parentItemId
        expect(instance).to.have.property('parentItemId');
        // expect(instance.parentItemId).to.be(expectedValueLiteral);
      });

      it('should have the property descriptor (base name: "descriptor")', function() {
        // TODO: update the code to test the property descriptor
        expect(instance).to.have.property('descriptor');
        // expect(instance.descriptor).to.be(expectedValueLiteral);
      });

      it('should have the property price (base name: "price")', function() {
        // TODO: update the code to test the property price
        expect(instance).to.have.property('price');
        // expect(instance.price).to.be(expectedValueLiteral);
      });

      it('should have the property categoryId (base name: "category_id")', function() {
        // TODO: update the code to test the property categoryId
        expect(instance).to.have.property('categoryId');
        // expect(instance.categoryId).to.be(expectedValueLiteral);
      });

      it('should have the property fulfillmentId (base name: "fulfillment_id")', function() {
        // TODO: update the code to test the property fulfillmentId
        expect(instance).to.have.property('fulfillmentId');
        // expect(instance.fulfillmentId).to.be(expectedValueLiteral);
      });

      it('should have the property rating (base name: "rating")', function() {
        // TODO: update the code to test the property rating
        expect(instance).to.have.property('rating');
        // expect(instance.rating).to.be(expectedValueLiteral);
      });

      it('should have the property locationId (base name: "location_id")', function() {
        // TODO: update the code to test the property locationId
        expect(instance).to.have.property('locationId');
        // expect(instance.locationId).to.be(expectedValueLiteral);
      });

      it('should have the property time (base name: "time")', function() {
        // TODO: update the code to test the property time
        expect(instance).to.have.property('time');
        // expect(instance.time).to.be(expectedValueLiteral);
      });

      it('should have the property rateable (base name: "rateable")', function() {
        // TODO: update the code to test the property rateable
        expect(instance).to.have.property('rateable');
        // expect(instance.rateable).to.be(expectedValueLiteral);
      });

      it('should have the property matched (base name: "matched")', function() {
        // TODO: update the code to test the property matched
        expect(instance).to.have.property('matched');
        // expect(instance.matched).to.be(expectedValueLiteral);
      });

      it('should have the property related (base name: "related")', function() {
        // TODO: update the code to test the property related
        expect(instance).to.have.property('related');
        // expect(instance.related).to.be(expectedValueLiteral);
      });

      it('should have the property recommended (base name: "recommended")', function() {
        // TODO: update the code to test the property recommended
        expect(instance).to.have.property('recommended');
        // expect(instance.recommended).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnable (base name: "@ondc/org/returnable")', function() {
        // TODO: update the code to test the property ondcorgreturnable
        expect(instance).to.have.property('ondcorgreturnable');
        // expect(instance.ondcorgreturnable).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgsellerPickupReturn (base name: "@ondc/org/seller_pickup_return")', function() {
        // TODO: update the code to test the property ondcorgsellerPickupReturn
        expect(instance).to.have.property('ondcorgsellerPickupReturn');
        // expect(instance.ondcorgsellerPickupReturn).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgreturnWindow (base name: "@ondc/org/return_window")', function() {
        // TODO: update the code to test the property ondcorgreturnWindow
        expect(instance).to.have.property('ondcorgreturnWindow');
        // expect(instance.ondcorgreturnWindow).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgcancellable (base name: "@ondc/org/cancellable")', function() {
        // TODO: update the code to test the property ondcorgcancellable
        expect(instance).to.have.property('ondcorgcancellable');
        // expect(instance.ondcorgcancellable).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgtimeToShip (base name: "@ondc/org/time_to_ship")', function() {
        // TODO: update the code to test the property ondcorgtimeToShip
        expect(instance).to.have.property('ondcorgtimeToShip');
        // expect(instance.ondcorgtimeToShip).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgavailableOnCod (base name: "@ondc/org/available_on_cod")', function() {
        // TODO: update the code to test the property ondcorgavailableOnCod
        expect(instance).to.have.property('ondcorgavailableOnCod');
        // expect(instance.ondcorgavailableOnCod).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgcontactDetailsConsumerCare (base name: "@ondc/org/contact_details_consumer_care")', function() {
        // TODO: update the code to test the property ondcorgcontactDetailsConsumerCare
        expect(instance).to.have.property('ondcorgcontactDetailsConsumerCare');
        // expect(instance.ondcorgcontactDetailsConsumerCare).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgstatutoryReqsPackagedCommodities (base name: "@ondc/org/statutory_reqs_packaged_commodities")', function() {
        // TODO: update the code to test the property ondcorgstatutoryReqsPackagedCommodities
        expect(instance).to.have.property('ondcorgstatutoryReqsPackagedCommodities');
        // expect(instance.ondcorgstatutoryReqsPackagedCommodities).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgstatutoryReqsPrepackagedFood (base name: "@ondc/org/statutory_reqs_prepackaged_food")', function() {
        // TODO: update the code to test the property ondcorgstatutoryReqsPrepackagedFood
        expect(instance).to.have.property('ondcorgstatutoryReqsPrepackagedFood');
        // expect(instance.ondcorgstatutoryReqsPrepackagedFood).to.be(expectedValueLiteral);
      });

      it('should have the property ondcorgmandatoryReqsVeggiesFruits (base name: "@ondc/org/mandatory_reqs_veggies_fruits")', function() {
        // TODO: update the code to test the property ondcorgmandatoryReqsVeggiesFruits
        expect(instance).to.have.property('ondcorgmandatoryReqsVeggiesFruits');
        // expect(instance.ondcorgmandatoryReqsVeggiesFruits).to.be(expectedValueLiteral);
      });

      it('should have the property tags (base name: "tags")', function() {
        // TODO: update the code to test the property tags
        expect(instance).to.have.property('tags');
        // expect(instance.tags).to.be(expectedValueLiteral);
      });

    });
  });

}));

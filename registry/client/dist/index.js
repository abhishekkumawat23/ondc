"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = require("./ApiClient.js");
var _Ack = require("./model/Ack");
var _City = require("./model/City");
var _Context = require("./model/Context");
var _Entity = require("./model/Entity");
var _EntityGst = require("./model/EntityGst");
var _EntityPan = require("./model/EntityPan");
var _Error = require("./model/Error");
var _InlineResponse = require("./model/InlineResponse200");
var _InlineResponse2 = require("./model/InlineResponse2001");
var _InlineResponse3 = require("./model/InlineResponse2002");
var _InlineResponse4 = require("./model/InlineResponse2003");
var _InlineResponse200Message = require("./model/InlineResponse200Message");
var _KeyPair = require("./model/KeyPair");
var _LookupBody = require("./model/LookupBody");
var _NetworkParticipant = require("./model/NetworkParticipant");
var _SellerOnRecord = require("./model/SellerOnRecord");
var _SubscribeBody = require("./model/SubscribeBody");
var _SubscribeContext = require("./model/SubscribeContext");
var _SubscribeMessage = require("./model/SubscribeMessage");
var _SubscriberUrlOnSubscribeBody = require("./model/SubscriberUrlOnSubscribeBody");
var _VlookupBody = require("./model/VlookupBody");
var _VlookupKeyPair = require("./model/VlookupKeyPair");
var _VlookupNetworkParticipant = require("./model/VlookupNetworkParticipant");
var _VlookupSearchParameters = require("./model/VlookupSearchParameters");
var _VlookupSellerOnRecord = require("./model/VlookupSellerOnRecord");
var _KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi = require("./api/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi");
var _ONDCNetworkParticipantOnboardingApi = require("./api/ONDCNetworkParticipantOnboardingApi");
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
/**
* ONDC_Participant_Management_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var OndcRegistry_ = require('index'); // See note below*.
* var xxxSvc = new OndcRegistry_.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new OndcRegistry_.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new OndcRegistry_.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new OndcRegistry_.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 2.0.5
*/
var _default = {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient: _ApiClient.ApiClient,
  /**
   * The Ack model constructor.
   * @property {module:model/Ack}
   */
  Ack: _Ack.Ack,
  /**
   * The City model constructor.
   * @property {module:model/City}
   */
  City: _City.City,
  /**
   * The Context model constructor.
   * @property {module:model/Context}
   */
  Context: _Context.Context,
  /**
   * The Entity model constructor.
   * @property {module:model/Entity}
   */
  Entity: _Entity.Entity,
  /**
   * The EntityGst model constructor.
   * @property {module:model/EntityGst}
   */
  EntityGst: _EntityGst.EntityGst,
  /**
   * The EntityPan model constructor.
   * @property {module:model/EntityPan}
   */
  EntityPan: _EntityPan.EntityPan,
  /**
   * The Error model constructor.
   * @property {module:model/Error}
   */
  Error: _Error.Error,
  /**
   * The InlineResponse200 model constructor.
   * @property {module:model/InlineResponse200}
   */
  InlineResponse200: _InlineResponse.InlineResponse200,
  /**
   * The InlineResponse2001 model constructor.
   * @property {module:model/InlineResponse2001}
   */
  InlineResponse2001: _InlineResponse2.InlineResponse2001,
  /**
   * The InlineResponse2002 model constructor.
   * @property {module:model/InlineResponse2002}
   */
  InlineResponse2002: _InlineResponse3.InlineResponse2002,
  /**
   * The InlineResponse2003 model constructor.
   * @property {module:model/InlineResponse2003}
   */
  InlineResponse2003: _InlineResponse4.InlineResponse2003,
  /**
   * The InlineResponse200Message model constructor.
   * @property {module:model/InlineResponse200Message}
   */
  InlineResponse200Message: _InlineResponse200Message.InlineResponse200Message,
  /**
   * The KeyPair model constructor.
   * @property {module:model/KeyPair}
   */
  KeyPair: _KeyPair.KeyPair,
  /**
   * The LookupBody model constructor.
   * @property {module:model/LookupBody}
   */
  LookupBody: _LookupBody.LookupBody,
  /**
   * The NetworkParticipant model constructor.
   * @property {module:model/NetworkParticipant}
   */
  NetworkParticipant: _NetworkParticipant.NetworkParticipant,
  /**
   * The SellerOnRecord model constructor.
   * @property {module:model/SellerOnRecord}
   */
  SellerOnRecord: _SellerOnRecord.SellerOnRecord,
  /**
   * The SubscribeBody model constructor.
   * @property {module:model/SubscribeBody}
   */
  SubscribeBody: _SubscribeBody.SubscribeBody,
  /**
   * The SubscribeContext model constructor.
   * @property {module:model/SubscribeContext}
   */
  SubscribeContext: _SubscribeContext.SubscribeContext,
  /**
   * The SubscribeMessage model constructor.
   * @property {module:model/SubscribeMessage}
   */
  SubscribeMessage: _SubscribeMessage.SubscribeMessage,
  /**
   * The SubscriberUrlOnSubscribeBody model constructor.
   * @property {module:model/SubscriberUrlOnSubscribeBody}
   */
  SubscriberUrlOnSubscribeBody: _SubscriberUrlOnSubscribeBody.SubscriberUrlOnSubscribeBody,
  /**
   * The VlookupBody model constructor.
   * @property {module:model/VlookupBody}
   */
  VlookupBody: _VlookupBody.VlookupBody,
  /**
   * The VlookupKeyPair model constructor.
   * @property {module:model/VlookupKeyPair}
   */
  VlookupKeyPair: _VlookupKeyPair.VlookupKeyPair,
  /**
   * The VlookupNetworkParticipant model constructor.
   * @property {module:model/VlookupNetworkParticipant}
   */
  VlookupNetworkParticipant: _VlookupNetworkParticipant.VlookupNetworkParticipant,
  /**
   * The VlookupSearchParameters model constructor.
   * @property {module:model/VlookupSearchParameters}
   */
  VlookupSearchParameters: _VlookupSearchParameters.VlookupSearchParameters,
  /**
   * The VlookupSellerOnRecord model constructor.
   * @property {module:model/VlookupSellerOnRecord}
   */
  VlookupSellerOnRecord: _VlookupSellerOnRecord.VlookupSellerOnRecord,
  /**
  * The KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi service constructor.
  * @property {module:api/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi}
  */
  KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi: _KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi,
  /**
  * The ONDCNetworkParticipantOnboardingApi service constructor.
  * @property {module:api/ONDCNetworkParticipantOnboardingApi}
  */
  ONDCNetworkParticipantOnboardingApi: _ONDCNetworkParticipantOnboardingApi.ONDCNetworkParticipantOnboardingApi
};
exports["default"] = _default;
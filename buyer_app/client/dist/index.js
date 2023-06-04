"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = require("./ApiClient");
var _Ack = require("./model/Ack");
var _Addbillingaddress = require("./model/Addbillingaddress");
var _Addbillingaddressrequest = require("./model/Addbillingaddressrequest");
var _Adddeliveryaddress = require("./model/Adddeliveryaddress");
var _Adddeliveryaddressrequest = require("./model/Adddeliveryaddressrequest");
var _Address = require("./model/Address");
var _Address2 = require("./model/Address1");
var _Address3 = require("./model/Address11");
var _Address4 = require("./model/Address14");
var _Address5 = require("./model/Address16");
var _Address6 = require("./model/Address17");
var _Address7 = require("./model/Address2");
var _Address8 = require("./model/Address21");
var _Address9 = require("./model/Address22");
var _Address10 = require("./model/Address4");
var _Address11 = require("./model/Address8");
var _Address12 = require("./model/Address9");
var _Billing = require("./model/Billing");
var _Billing2 = require("./model/Billing1");
var _Billing3 = require("./model/Billing2");
var _BillingInfo = require("./model/BillingInfo");
var _Billingaddress = require("./model/Billingaddress");
var _BppDetails = require("./model/BppDetails");
var _BppDetails2 = require("./model/BppDetails1");
var _BppDetails3 = require("./model/BppDetails2");
var _Breakup = require("./model/Breakup");
var _Breakup2 = require("./model/Breakup2");
var _Cancelorder = require("./model/Cancelorder");
var _Cancelorderrequest = require("./model/Cancelorderrequest");
var _Cart = require("./model/Cart");
var _Catalog = require("./model/Catalog");
var _Catalog2 = require("./model/Catalog1");
var _City = require("./model/City");
var _Confirmorder = require("./model/Confirmorder");
var _Confirmorderrequest = require("./model/Confirmorderrequest");
var _Contact = require("./model/Contact");
var _Contact2 = require("./model/Contact1");
var _Context = require("./model/Context");
var _Context2 = require("./model/Context10");
var _Context3 = require("./model/Context11");
var _Context4 = require("./model/Context13");
var _Context5 = require("./model/Context4");
var _Context6 = require("./model/Context6");
var _Context7 = require("./model/Context8");
var _Context8 = require("./model/Context9");
var _Country = require("./model/Country");
var _Criteria = require("./model/Criteria");
var _Criteria2 = require("./model/Criteria1");
var _Criteria3 = require("./model/Criteria2");
var _Customer = require("./model/Customer");
var _Customer2 = require("./model/Customer1");
var _DeliveryInfo = require("./model/DeliveryInfo");
var _Descriptor = require("./model/Descriptor");
var _Descriptor2 = require("./model/Descriptor1");
var _Descriptor3 = require("./model/Descriptor10");
var _Descriptor4 = require("./model/Descriptor11");
var _Descriptor5 = require("./model/Descriptor12");
var _Descriptor6 = require("./model/Descriptor2");
var _Descriptor7 = require("./model/Descriptor3");
var _Descriptor8 = require("./model/Descriptor8");
var _Descriptor9 = require("./model/Descriptor9");
var _End = require("./model/End");
var _End2 = require("./model/End1");
var _Error = require("./model/Error");
var _Filterparams = require("./model/Filterparams");
var _Fulfillment = require("./model/Fulfillment");
var _Fulfillment2 = require("./model/Fulfillment1");
var _Initorder = require("./model/Initorder");
var _Initorderrequest = require("./model/Initorderrequest");
var _Item = require("./model/Item");
var _Item2 = require("./model/Item1");
var _Item3 = require("./model/Item3");
var _Item4 = require("./model/Item5");
var _Location = require("./model/Location");
var _Location2 = require("./model/Location1");
var _Location3 = require("./model/Location3");
var _Location4 = require("./model/Location4");
var _Location5 = require("./model/Location5");
var _LocationDetails = require("./model/LocationDetails");
var _LocationDetails2 = require("./model/LocationDetails1");
var _Message = require("./model/Message");
var _Message2 = require("./model/Message1");
var _Message3 = require("./model/Message10");
var _Message4 = require("./model/Message12");
var _Message5 = require("./model/Message13");
var _Message6 = require("./model/Message15");
var _Message7 = require("./model/Message16");
var _Message8 = require("./model/Message19");
var _Message9 = require("./model/Message2");
var _Message10 = require("./model/Message20");
var _Message11 = require("./model/Message22");
var _Message12 = require("./model/Message23");
var _Message13 = require("./model/Message3");
var _Message14 = require("./model/Message5");
var _Message15 = require("./model/Message6");
var _Message16 = require("./model/Message7");
var _Message17 = require("./model/Message9");
var _OncancelorderErrorresponse = require("./model/OncancelorderErrorresponse");
var _Onconfirm = require("./model/Onconfirm");
var _OndcOrgStatutoryReqsPackagedCommodities = require("./model/OndcOrgStatutoryReqsPackagedCommodities");
var _Ondeliveryaddress = require("./model/Ondeliveryaddress");
var _OneOfCatalogId = require("./model/OneOfCatalogId");
var _OneOfDescriptor10Images = require("./model/OneOfDescriptor10Images");
var _OneOfEnd1Contact = require("./model/OneOfEnd1Contact");
var _OneOfFulfillment1Customer = require("./model/OneOfFulfillment1Customer");
var _OneOfPriceValue = require("./model/OneOfPriceValue");
var _Oninit = require("./model/Oninit");
var _Onquote = require("./model/Onquote");
var _Onsearchbyproduct = require("./model/Onsearchbyproduct");
var _Onsearchprovider = require("./model/Onsearchprovider");
var _Onsupport = require("./model/Onsupport");
var _Ontrack = require("./model/Ontrack");
var _Order = require("./model/Order");
var _Order2 = require("./model/Order1");
var _Order3 = require("./model/Order2");
var _OrderStatusRequest = require("./model/OrderStatusRequest");
var _Orderhistory = require("./model/Orderhistory");
var _Organization = require("./model/Organization");
var _Params = require("./model/Params");
var _Params2 = require("./model/Params1");
var _Params3 = require("./model/Params2");
var _Payment = require("./model/Payment");
var _Payment2 = require("./model/Payment1");
var _Payment3 = require("./model/Payment2");
var _Payment4 = require("./model/Payment3");
var _Person = require("./model/Person");
var _Person2 = require("./model/Person1");
var _Price = require("./model/Price");
var _Price2 = require("./model/Price1");
var _Price3 = require("./model/Price2");
var _Price4 = require("./model/Price4");
var _Price5 = require("./model/Price9");
var _Product = require("./model/Product");
var _Provider = require("./model/Provider");
var _Provider2 = require("./model/Provider1");
var _Provider3 = require("./model/Provider2");
var _Provider4 = require("./model/Provider5");
var _ProviderDetails = require("./model/ProviderDetails");
var _ProviderDetails2 = require("./model/ProviderDetails1");
var _ProviderDetails3 = require("./model/ProviderDetails2");
var _ProviderLocation = require("./model/ProviderLocation");
var _Quantity = require("./model/Quantity");
var _Quantity2 = require("./model/Quantity1");
var _Quantity3 = require("./model/Quantity5");
var _Quote = require("./model/Quote");
var _Quote2 = require("./model/Quote1");
var _Quote3 = require("./model/Quote2");
var _Quote4 = require("./model/Quote4");
var _Quoterequest = require("./model/Quoterequest");
var _Searchbycategoryrequest = require("./model/Searchbycategoryrequest");
var _Searchbyproduct = require("./model/Searchbyproduct");
var _Searchbyproductrequest = require("./model/Searchbyproductrequest");
var _Searchbyprovider = require("./model/Searchbyprovider");
var _Searchbyproviderrequest = require("./model/Searchbyproviderrequest");
var _Selected = require("./model/Selected");
var _Support = require("./model/Support");
var _Supportrequest = require("./model/Supportrequest");
var _Track = require("./model/Track");
var _Tracking = require("./model/Tracking");
var _Trackrequest = require("./model/Trackrequest");
var _Updatebillingaddress = require("./model/Updatebillingaddress");
var _Updatebillingaddressrequest = require("./model/Updatebillingaddressrequest");
var _Updatedeliveryaddress = require("./model/Updatedeliveryaddress");
var _Updatedeliveryaddressrequest = require("./model/Updatedeliveryaddressrequest");
var _BillingApi = require("./api/BillingApi");
var _CancelOrderApi = require("./api/CancelOrderApi");
var _ConfirmOrderApi = require("./api/ConfirmOrderApi");
var _DeliveryAddressApi = require("./api/DeliveryAddressApi");
var _InitializeOrderApi = require("./api/InitializeOrderApi");
var _OrderHistoryApi = require("./api/OrderHistoryApi");
var _QuoteOrderApi = require("./api/QuoteOrderApi");
var _SearchApi = require("./api/SearchApi");
var _StatusApi = require("./api/StatusApi");
var _SupportApi = require("./api/SupportApi");
var _TrackOrderApi = require("./api/TrackOrderApi");
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
/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SandboxClientSdk = require('index'); // See note below*.
* var xxxSvc = new SandboxClientSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SandboxClientSdk.Yyy(); // Construct a model instance.
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
* var xxxSvc = new SandboxClientSdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SandboxClientSdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
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
   * The Addbillingaddress model constructor.
   * @property {module:model/Addbillingaddress}
   */
  Addbillingaddress: _Addbillingaddress.Addbillingaddress,
  /**
   * The Addbillingaddressrequest model constructor.
   * @property {module:model/Addbillingaddressrequest}
   */
  Addbillingaddressrequest: _Addbillingaddressrequest.Addbillingaddressrequest,
  /**
   * The Adddeliveryaddress model constructor.
   * @property {module:model/Adddeliveryaddress}
   */
  Adddeliveryaddress: _Adddeliveryaddress.Adddeliveryaddress,
  /**
   * The Adddeliveryaddressrequest model constructor.
   * @property {module:model/Adddeliveryaddressrequest}
   */
  Adddeliveryaddressrequest: _Adddeliveryaddressrequest.Adddeliveryaddressrequest,
  /**
   * The Address model constructor.
   * @property {module:model/Address}
   */
  Address: _Address.Address,
  /**
   * The Address1 model constructor.
   * @property {module:model/Address1}
   */
  Address1: _Address2.Address1,
  /**
   * The Address11 model constructor.
   * @property {module:model/Address11}
   */
  Address11: _Address3.Address11,
  /**
   * The Address14 model constructor.
   * @property {module:model/Address14}
   */
  Address14: _Address4.Address14,
  /**
   * The Address16 model constructor.
   * @property {module:model/Address16}
   */
  Address16: _Address5.Address16,
  /**
   * The Address17 model constructor.
   * @property {module:model/Address17}
   */
  Address17: _Address6.Address17,
  /**
   * The Address2 model constructor.
   * @property {module:model/Address2}
   */
  Address2: _Address7.Address2,
  /**
   * The Address21 model constructor.
   * @property {module:model/Address21}
   */
  Address21: _Address8.Address21,
  /**
   * The Address22 model constructor.
   * @property {module:model/Address22}
   */
  Address22: _Address9.Address22,
  /**
   * The Address4 model constructor.
   * @property {module:model/Address4}
   */
  Address4: _Address10.Address4,
  /**
   * The Address8 model constructor.
   * @property {module:model/Address8}
   */
  Address8: _Address11.Address8,
  /**
   * The Address9 model constructor.
   * @property {module:model/Address9}
   */
  Address9: _Address12.Address9,
  /**
   * The Billing model constructor.
   * @property {module:model/Billing}
   */
  Billing: _Billing.Billing,
  /**
   * The Billing1 model constructor.
   * @property {module:model/Billing1}
   */
  Billing1: _Billing2.Billing1,
  /**
   * The Billing2 model constructor.
   * @property {module:model/Billing2}
   */
  Billing2: _Billing3.Billing2,
  /**
   * The BillingInfo model constructor.
   * @property {module:model/BillingInfo}
   */
  BillingInfo: _BillingInfo.BillingInfo,
  /**
   * The Billingaddress model constructor.
   * @property {module:model/Billingaddress}
   */
  Billingaddress: _Billingaddress.Billingaddress,
  /**
   * The BppDetails model constructor.
   * @property {module:model/BppDetails}
   */
  BppDetails: _BppDetails.BppDetails,
  /**
   * The BppDetails1 model constructor.
   * @property {module:model/BppDetails1}
   */
  BppDetails1: _BppDetails2.BppDetails1,
  /**
   * The BppDetails2 model constructor.
   * @property {module:model/BppDetails2}
   */
  BppDetails2: _BppDetails3.BppDetails2,
  /**
   * The Breakup model constructor.
   * @property {module:model/Breakup}
   */
  Breakup: _Breakup.Breakup,
  /**
   * The Breakup2 model constructor.
   * @property {module:model/Breakup2}
   */
  Breakup2: _Breakup2.Breakup2,
  /**
   * The Cancelorder model constructor.
   * @property {module:model/Cancelorder}
   */
  Cancelorder: _Cancelorder.Cancelorder,
  /**
   * The Cancelorderrequest model constructor.
   * @property {module:model/Cancelorderrequest}
   */
  Cancelorderrequest: _Cancelorderrequest.Cancelorderrequest,
  /**
   * The Cart model constructor.
   * @property {module:model/Cart}
   */
  Cart: _Cart.Cart,
  /**
   * The Catalog model constructor.
   * @property {module:model/Catalog}
   */
  Catalog: _Catalog.Catalog,
  /**
   * The Catalog1 model constructor.
   * @property {module:model/Catalog1}
   */
  Catalog1: _Catalog2.Catalog1,
  /**
   * The City model constructor.
   * @property {module:model/City}
   */
  City: _City.City,
  /**
   * The Confirmorder model constructor.
   * @property {module:model/Confirmorder}
   */
  Confirmorder: _Confirmorder.Confirmorder,
  /**
   * The Confirmorderrequest model constructor.
   * @property {module:model/Confirmorderrequest}
   */
  Confirmorderrequest: _Confirmorderrequest.Confirmorderrequest,
  /**
   * The Contact model constructor.
   * @property {module:model/Contact}
   */
  Contact: _Contact.Contact,
  /**
   * The Contact1 model constructor.
   * @property {module:model/Contact1}
   */
  Contact1: _Contact2.Contact1,
  /**
   * The Context model constructor.
   * @property {module:model/Context}
   */
  Context: _Context.Context,
  /**
   * The Context10 model constructor.
   * @property {module:model/Context10}
   */
  Context10: _Context2.Context10,
  /**
   * The Context11 model constructor.
   * @property {module:model/Context11}
   */
  Context11: _Context3.Context11,
  /**
   * The Context13 model constructor.
   * @property {module:model/Context13}
   */
  Context13: _Context4.Context13,
  /**
   * The Context4 model constructor.
   * @property {module:model/Context4}
   */
  Context4: _Context5.Context4,
  /**
   * The Context6 model constructor.
   * @property {module:model/Context6}
   */
  Context6: _Context6.Context6,
  /**
   * The Context8 model constructor.
   * @property {module:model/Context8}
   */
  Context8: _Context7.Context8,
  /**
   * The Context9 model constructor.
   * @property {module:model/Context9}
   */
  Context9: _Context8.Context9,
  /**
   * The Country model constructor.
   * @property {module:model/Country}
   */
  Country: _Country.Country,
  /**
   * The Criteria model constructor.
   * @property {module:model/Criteria}
   */
  Criteria: _Criteria.Criteria,
  /**
   * The Criteria1 model constructor.
   * @property {module:model/Criteria1}
   */
  Criteria1: _Criteria2.Criteria1,
  /**
   * The Criteria2 model constructor.
   * @property {module:model/Criteria2}
   */
  Criteria2: _Criteria3.Criteria2,
  /**
   * The Customer model constructor.
   * @property {module:model/Customer}
   */
  Customer: _Customer.Customer,
  /**
   * The Customer1 model constructor.
   * @property {module:model/Customer1}
   */
  Customer1: _Customer2.Customer1,
  /**
   * The DeliveryInfo model constructor.
   * @property {module:model/DeliveryInfo}
   */
  DeliveryInfo: _DeliveryInfo.DeliveryInfo,
  /**
   * The Descriptor model constructor.
   * @property {module:model/Descriptor}
   */
  Descriptor: _Descriptor.Descriptor,
  /**
   * The Descriptor1 model constructor.
   * @property {module:model/Descriptor1}
   */
  Descriptor1: _Descriptor2.Descriptor1,
  /**
   * The Descriptor10 model constructor.
   * @property {module:model/Descriptor10}
   */
  Descriptor10: _Descriptor3.Descriptor10,
  /**
   * The Descriptor11 model constructor.
   * @property {module:model/Descriptor11}
   */
  Descriptor11: _Descriptor4.Descriptor11,
  /**
   * The Descriptor12 model constructor.
   * @property {module:model/Descriptor12}
   */
  Descriptor12: _Descriptor5.Descriptor12,
  /**
   * The Descriptor2 model constructor.
   * @property {module:model/Descriptor2}
   */
  Descriptor2: _Descriptor6.Descriptor2,
  /**
   * The Descriptor3 model constructor.
   * @property {module:model/Descriptor3}
   */
  Descriptor3: _Descriptor7.Descriptor3,
  /**
   * The Descriptor8 model constructor.
   * @property {module:model/Descriptor8}
   */
  Descriptor8: _Descriptor8.Descriptor8,
  /**
   * The Descriptor9 model constructor.
   * @property {module:model/Descriptor9}
   */
  Descriptor9: _Descriptor9.Descriptor9,
  /**
   * The End model constructor.
   * @property {module:model/End}
   */
  End: _End.End,
  /**
   * The End1 model constructor.
   * @property {module:model/End1}
   */
  End1: _End2.End1,
  /**
   * The Error model constructor.
   * @property {module:model/Error}
   */
  Error: _Error.Error,
  /**
   * The Filterparams model constructor.
   * @property {module:model/Filterparams}
   */
  Filterparams: _Filterparams.Filterparams,
  /**
   * The Fulfillment model constructor.
   * @property {module:model/Fulfillment}
   */
  Fulfillment: _Fulfillment.Fulfillment,
  /**
   * The Fulfillment1 model constructor.
   * @property {module:model/Fulfillment1}
   */
  Fulfillment1: _Fulfillment2.Fulfillment1,
  /**
   * The Initorder model constructor.
   * @property {module:model/Initorder}
   */
  Initorder: _Initorder.Initorder,
  /**
   * The Initorderrequest model constructor.
   * @property {module:model/Initorderrequest}
   */
  Initorderrequest: _Initorderrequest.Initorderrequest,
  /**
   * The Item model constructor.
   * @property {module:model/Item}
   */
  Item: _Item.Item,
  /**
   * The Item1 model constructor.
   * @property {module:model/Item1}
   */
  Item1: _Item2.Item1,
  /**
   * The Item3 model constructor.
   * @property {module:model/Item3}
   */
  Item3: _Item3.Item3,
  /**
   * The Item5 model constructor.
   * @property {module:model/Item5}
   */
  Item5: _Item4.Item5,
  /**
   * The Location model constructor.
   * @property {module:model/Location}
   */
  Location: _Location.Location,
  /**
   * The Location1 model constructor.
   * @property {module:model/Location1}
   */
  Location1: _Location2.Location1,
  /**
   * The Location3 model constructor.
   * @property {module:model/Location3}
   */
  Location3: _Location3.Location3,
  /**
   * The Location4 model constructor.
   * @property {module:model/Location4}
   */
  Location4: _Location4.Location4,
  /**
   * The Location5 model constructor.
   * @property {module:model/Location5}
   */
  Location5: _Location5.Location5,
  /**
   * The LocationDetails model constructor.
   * @property {module:model/LocationDetails}
   */
  LocationDetails: _LocationDetails.LocationDetails,
  /**
   * The LocationDetails1 model constructor.
   * @property {module:model/LocationDetails1}
   */
  LocationDetails1: _LocationDetails2.LocationDetails1,
  /**
   * The Message model constructor.
   * @property {module:model/Message}
   */
  Message: _Message.Message,
  /**
   * The Message1 model constructor.
   * @property {module:model/Message1}
   */
  Message1: _Message2.Message1,
  /**
   * The Message10 model constructor.
   * @property {module:model/Message10}
   */
  Message10: _Message3.Message10,
  /**
   * The Message12 model constructor.
   * @property {module:model/Message12}
   */
  Message12: _Message4.Message12,
  /**
   * The Message13 model constructor.
   * @property {module:model/Message13}
   */
  Message13: _Message5.Message13,
  /**
   * The Message15 model constructor.
   * @property {module:model/Message15}
   */
  Message15: _Message6.Message15,
  /**
   * The Message16 model constructor.
   * @property {module:model/Message16}
   */
  Message16: _Message7.Message16,
  /**
   * The Message19 model constructor.
   * @property {module:model/Message19}
   */
  Message19: _Message8.Message19,
  /**
   * The Message2 model constructor.
   * @property {module:model/Message2}
   */
  Message2: _Message9.Message2,
  /**
   * The Message20 model constructor.
   * @property {module:model/Message20}
   */
  Message20: _Message10.Message20,
  /**
   * The Message22 model constructor.
   * @property {module:model/Message22}
   */
  Message22: _Message11.Message22,
  /**
   * The Message23 model constructor.
   * @property {module:model/Message23}
   */
  Message23: _Message12.Message23,
  /**
   * The Message3 model constructor.
   * @property {module:model/Message3}
   */
  Message3: _Message13.Message3,
  /**
   * The Message5 model constructor.
   * @property {module:model/Message5}
   */
  Message5: _Message14.Message5,
  /**
   * The Message6 model constructor.
   * @property {module:model/Message6}
   */
  Message6: _Message15.Message6,
  /**
   * The Message7 model constructor.
   * @property {module:model/Message7}
   */
  Message7: _Message16.Message7,
  /**
   * The Message9 model constructor.
   * @property {module:model/Message9}
   */
  Message9: _Message17.Message9,
  /**
   * The OncancelorderErrorresponse model constructor.
   * @property {module:model/OncancelorderErrorresponse}
   */
  OncancelorderErrorresponse: _OncancelorderErrorresponse.OncancelorderErrorresponse,
  /**
   * The Onconfirm model constructor.
   * @property {module:model/Onconfirm}
   */
  Onconfirm: _Onconfirm.Onconfirm,
  /**
   * The OndcOrgStatutoryReqsPackagedCommodities model constructor.
   * @property {module:model/OndcOrgStatutoryReqsPackagedCommodities}
   */
  OndcOrgStatutoryReqsPackagedCommodities: _OndcOrgStatutoryReqsPackagedCommodities.OndcOrgStatutoryReqsPackagedCommodities,
  /**
   * The Ondeliveryaddress model constructor.
   * @property {module:model/Ondeliveryaddress}
   */
  Ondeliveryaddress: _Ondeliveryaddress.Ondeliveryaddress,
  /**
   * The OneOfCatalogId model constructor.
   * @property {module:model/OneOfCatalogId}
   */
  OneOfCatalogId: _OneOfCatalogId.OneOfCatalogId,
  /**
   * The OneOfDescriptor10Images model constructor.
   * @property {module:model/OneOfDescriptor10Images}
   */
  OneOfDescriptor10Images: _OneOfDescriptor10Images.OneOfDescriptor10Images,
  /**
   * The OneOfEnd1Contact model constructor.
   * @property {module:model/OneOfEnd1Contact}
   */
  OneOfEnd1Contact: _OneOfEnd1Contact.OneOfEnd1Contact,
  /**
   * The OneOfFulfillment1Customer model constructor.
   * @property {module:model/OneOfFulfillment1Customer}
   */
  OneOfFulfillment1Customer: _OneOfFulfillment1Customer.OneOfFulfillment1Customer,
  /**
   * The OneOfPriceValue model constructor.
   * @property {module:model/OneOfPriceValue}
   */
  OneOfPriceValue: _OneOfPriceValue.OneOfPriceValue,
  /**
   * The Oninit model constructor.
   * @property {module:model/Oninit}
   */
  Oninit: _Oninit.Oninit,
  /**
   * The Onquote model constructor.
   * @property {module:model/Onquote}
   */
  Onquote: _Onquote.Onquote,
  /**
   * The Onsearchbyproduct model constructor.
   * @property {module:model/Onsearchbyproduct}
   */
  Onsearchbyproduct: _Onsearchbyproduct.Onsearchbyproduct,
  /**
   * The Onsearchprovider model constructor.
   * @property {module:model/Onsearchprovider}
   */
  Onsearchprovider: _Onsearchprovider.Onsearchprovider,
  /**
   * The Onsupport model constructor.
   * @property {module:model/Onsupport}
   */
  Onsupport: _Onsupport.Onsupport,
  /**
   * The Ontrack model constructor.
   * @property {module:model/Ontrack}
   */
  Ontrack: _Ontrack.Ontrack,
  /**
   * The Order model constructor.
   * @property {module:model/Order}
   */
  Order: _Order.Order,
  /**
   * The Order1 model constructor.
   * @property {module:model/Order1}
   */
  Order1: _Order2.Order1,
  /**
   * The Order2 model constructor.
   * @property {module:model/Order2}
   */
  Order2: _Order3.Order2,
  /**
   * The OrderStatusRequest model constructor.
   * @property {module:model/OrderStatusRequest}
   */
  OrderStatusRequest: _OrderStatusRequest.OrderStatusRequest,
  /**
   * The Orderhistory model constructor.
   * @property {module:model/Orderhistory}
   */
  Orderhistory: _Orderhistory.Orderhistory,
  /**
   * The Organization model constructor.
   * @property {module:model/Organization}
   */
  Organization: _Organization.Organization,
  /**
   * The Params model constructor.
   * @property {module:model/Params}
   */
  Params: _Params.Params,
  /**
   * The Params1 model constructor.
   * @property {module:model/Params1}
   */
  Params1: _Params2.Params1,
  /**
   * The Params2 model constructor.
   * @property {module:model/Params2}
   */
  Params2: _Params3.Params2,
  /**
   * The Payment model constructor.
   * @property {module:model/Payment}
   */
  Payment: _Payment.Payment,
  /**
   * The Payment1 model constructor.
   * @property {module:model/Payment1}
   */
  Payment1: _Payment2.Payment1,
  /**
   * The Payment2 model constructor.
   * @property {module:model/Payment2}
   */
  Payment2: _Payment3.Payment2,
  /**
   * The Payment3 model constructor.
   * @property {module:model/Payment3}
   */
  Payment3: _Payment4.Payment3,
  /**
   * The Person model constructor.
   * @property {module:model/Person}
   */
  Person: _Person.Person,
  /**
   * The Person1 model constructor.
   * @property {module:model/Person1}
   */
  Person1: _Person2.Person1,
  /**
   * The Price model constructor.
   * @property {module:model/Price}
   */
  Price: _Price.Price,
  /**
   * The Price1 model constructor.
   * @property {module:model/Price1}
   */
  Price1: _Price2.Price1,
  /**
   * The Price2 model constructor.
   * @property {module:model/Price2}
   */
  Price2: _Price3.Price2,
  /**
   * The Price4 model constructor.
   * @property {module:model/Price4}
   */
  Price4: _Price4.Price4,
  /**
   * The Price9 model constructor.
   * @property {module:model/Price9}
   */
  Price9: _Price5.Price9,
  /**
   * The Product model constructor.
   * @property {module:model/Product}
   */
  Product: _Product.Product,
  /**
   * The Provider model constructor.
   * @property {module:model/Provider}
   */
  Provider: _Provider.Provider,
  /**
   * The Provider1 model constructor.
   * @property {module:model/Provider1}
   */
  Provider1: _Provider2.Provider1,
  /**
   * The Provider2 model constructor.
   * @property {module:model/Provider2}
   */
  Provider2: _Provider3.Provider2,
  /**
   * The Provider5 model constructor.
   * @property {module:model/Provider5}
   */
  Provider5: _Provider4.Provider5,
  /**
   * The ProviderDetails model constructor.
   * @property {module:model/ProviderDetails}
   */
  ProviderDetails: _ProviderDetails.ProviderDetails,
  /**
   * The ProviderDetails1 model constructor.
   * @property {module:model/ProviderDetails1}
   */
  ProviderDetails1: _ProviderDetails2.ProviderDetails1,
  /**
   * The ProviderDetails2 model constructor.
   * @property {module:model/ProviderDetails2}
   */
  ProviderDetails2: _ProviderDetails3.ProviderDetails2,
  /**
   * The ProviderLocation model constructor.
   * @property {module:model/ProviderLocation}
   */
  ProviderLocation: _ProviderLocation.ProviderLocation,
  /**
   * The Quantity model constructor.
   * @property {module:model/Quantity}
   */
  Quantity: _Quantity.Quantity,
  /**
   * The Quantity1 model constructor.
   * @property {module:model/Quantity1}
   */
  Quantity1: _Quantity2.Quantity1,
  /**
   * The Quantity5 model constructor.
   * @property {module:model/Quantity5}
   */
  Quantity5: _Quantity3.Quantity5,
  /**
   * The Quote model constructor.
   * @property {module:model/Quote}
   */
  Quote: _Quote.Quote,
  /**
   * The Quote1 model constructor.
   * @property {module:model/Quote1}
   */
  Quote1: _Quote2.Quote1,
  /**
   * The Quote2 model constructor.
   * @property {module:model/Quote2}
   */
  Quote2: _Quote3.Quote2,
  /**
   * The Quote4 model constructor.
   * @property {module:model/Quote4}
   */
  Quote4: _Quote4.Quote4,
  /**
   * The Quoterequest model constructor.
   * @property {module:model/Quoterequest}
   */
  Quoterequest: _Quoterequest.Quoterequest,
  /**
   * The Searchbycategoryrequest model constructor.
   * @property {module:model/Searchbycategoryrequest}
   */
  Searchbycategoryrequest: _Searchbycategoryrequest.Searchbycategoryrequest,
  /**
   * The Searchbyproduct model constructor.
   * @property {module:model/Searchbyproduct}
   */
  Searchbyproduct: _Searchbyproduct.Searchbyproduct,
  /**
   * The Searchbyproductrequest model constructor.
   * @property {module:model/Searchbyproductrequest}
   */
  Searchbyproductrequest: _Searchbyproductrequest.Searchbyproductrequest,
  /**
   * The Searchbyprovider model constructor.
   * @property {module:model/Searchbyprovider}
   */
  Searchbyprovider: _Searchbyprovider.Searchbyprovider,
  /**
   * The Searchbyproviderrequest model constructor.
   * @property {module:model/Searchbyproviderrequest}
   */
  Searchbyproviderrequest: _Searchbyproviderrequest.Searchbyproviderrequest,
  /**
   * The Selected model constructor.
   * @property {module:model/Selected}
   */
  Selected: _Selected.Selected,
  /**
   * The Support model constructor.
   * @property {module:model/Support}
   */
  Support: _Support.Support,
  /**
   * The Supportrequest model constructor.
   * @property {module:model/Supportrequest}
   */
  Supportrequest: _Supportrequest.Supportrequest,
  /**
   * The Track model constructor.
   * @property {module:model/Track}
   */
  Track: _Track.Track,
  /**
   * The Tracking model constructor.
   * @property {module:model/Tracking}
   */
  Tracking: _Tracking.Tracking,
  /**
   * The Trackrequest model constructor.
   * @property {module:model/Trackrequest}
   */
  Trackrequest: _Trackrequest.Trackrequest,
  /**
   * The Updatebillingaddress model constructor.
   * @property {module:model/Updatebillingaddress}
   */
  Updatebillingaddress: _Updatebillingaddress.Updatebillingaddress,
  /**
   * The Updatebillingaddressrequest model constructor.
   * @property {module:model/Updatebillingaddressrequest}
   */
  Updatebillingaddressrequest: _Updatebillingaddressrequest.Updatebillingaddressrequest,
  /**
   * The Updatedeliveryaddress model constructor.
   * @property {module:model/Updatedeliveryaddress}
   */
  Updatedeliveryaddress: _Updatedeliveryaddress.Updatedeliveryaddress,
  /**
   * The Updatedeliveryaddressrequest model constructor.
   * @property {module:model/Updatedeliveryaddressrequest}
   */
  Updatedeliveryaddressrequest: _Updatedeliveryaddressrequest.Updatedeliveryaddressrequest,
  /**
  * The BillingApi service constructor.
  * @property {module:api/BillingApi}
  */
  BillingApi: _BillingApi.BillingApi,
  /**
  * The CancelOrderApi service constructor.
  * @property {module:api/CancelOrderApi}
  */
  CancelOrderApi: _CancelOrderApi.CancelOrderApi,
  /**
  * The ConfirmOrderApi service constructor.
  * @property {module:api/ConfirmOrderApi}
  */
  ConfirmOrderApi: _ConfirmOrderApi.ConfirmOrderApi,
  /**
  * The DeliveryAddressApi service constructor.
  * @property {module:api/DeliveryAddressApi}
  */
  DeliveryAddressApi: _DeliveryAddressApi.DeliveryAddressApi,
  /**
  * The InitializeOrderApi service constructor.
  * @property {module:api/InitializeOrderApi}
  */
  InitializeOrderApi: _InitializeOrderApi.InitializeOrderApi,
  /**
  * The OrderHistoryApi service constructor.
  * @property {module:api/OrderHistoryApi}
  */
  OrderHistoryApi: _OrderHistoryApi.OrderHistoryApi,
  /**
  * The QuoteOrderApi service constructor.
  * @property {module:api/QuoteOrderApi}
  */
  QuoteOrderApi: _QuoteOrderApi.QuoteOrderApi,
  /**
  * The SearchApi service constructor.
  * @property {module:api/SearchApi}
  */
  SearchApi: _SearchApi.SearchApi,
  /**
  * The StatusApi service constructor.
  * @property {module:api/StatusApi}
  */
  StatusApi: _StatusApi.StatusApi,
  /**
  * The SupportApi service constructor.
  * @property {module:api/SupportApi}
  */
  SupportApi: _SupportApi.SupportApi,
  /**
  * The TrackOrderApi service constructor.
  * @property {module:api/TrackOrderApi}
  */
  TrackOrderApi: _TrackOrderApi.TrackOrderApi
};
exports["default"] = _default;
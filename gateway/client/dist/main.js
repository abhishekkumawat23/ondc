"use strict";

var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiClient = new _index["default"].ApiClient();
/*apiClient.authentications = {
  "GatewaySubscriberAuth": {
      "type": "oauth2",
      "accessToken": "1234qwer"
  }
}*/
// Configure API key authorization: GatewaySubscriberAuth
var GatewaySubscriberAuth = apiClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix['Proxy-Authorization'] = "Token"

// Configure API key authorization: GatewaySubscriberAuthNew
var GatewaySubscriberAuthNew = apiClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix['X-Gateway-Authorization'] = "Token"

// Configure API key authorization: SubscriberAuth
var SubscriberAuth = apiClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = "YOUR API KEY";
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new _index["default"].ONDCGatewayApi(apiClient);
var contextExample = {
  domain: "nic2004:52110",
  country: "IND",
  city: "std:080",
  action: "search",
  core_version: "0.9.3",
  bap_id: "buyer-app.ondc.org",
  bap_uri: "https://buyer-app.ondc.org/protocol/v1",
  transaction_id: "3e6802dc-055b-4a57-bcd4-d60d00213d8b",
  message_id: "c4b71e62-f51d-425a-892b-539920e945ca",
  timestamp: "2022-06-29T04:21:08.921Z"
};
var context = new _index["default"].Context(contextExample.domain, contextExample.country, contextExample.city, contextExample.action, contextExample.core_version, contextExample.bap_id, contextExample.bap_uri, contextExample.transaction_id, contextExample.message_id, contextExample.timestamp);
var opts = {
  'body': new _index["default"].OnSearchBody(context) // {OnSearchBody} Sellers provide their catalog in response to buyer search
};

var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
api.onSearchPOST(opts, callback);
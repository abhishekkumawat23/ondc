"use strict";

var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var api = new _index["default"].ONDCNetworkParticipantOnboardingApi();
var subscriberId = 'http:localhost:9090'; //seems URL of Buyer App
var country = 'IND';
var city = 'std:080';
var domain = 'nic2004:52110'; //Retail,nic2004:52110
var type = 'BPP';
var opts = {
  'body': new _index["default"].LookupBody(subscriberId, country, city, domain, type)
};
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + JSON.stringify(data));
  }
};
api.lookupPost(opts, callback);
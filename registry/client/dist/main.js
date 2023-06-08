"use strict";

var _index = _interopRequireDefault(require("./index.js"));
var _Context = require("./model/Context.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var api = new _index["default"].ONDCNetworkParticipantOnboardingApi();
var context = _index["default"].SubscribeContext.constructFromObject({
  operation: 1
});
var timestamp = '2022-07-08T13:44:54.101Z';
var entity = _index["default"].Entity.constructFromObject({});
var networkParticipant = [_index["default"].NetworkParticipant.constructFromObject({
  type: "sellerApp"
})];
var message = new _index["default"].SubscribeMessage(timestamp, entity, networkParticipant);
var opts = {
  'body': new _index["default"].SubscribeBody(context, message)
};
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subscribePost(opts, callback);
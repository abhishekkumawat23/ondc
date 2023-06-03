"use strict";

var _index = _interopRequireDefault(require("./index.js"));
var _Context = require("./model/Context.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var api = new _index["default"].ONDCNetworkParticipantOnboardingApi();

// var context = Context();
// var message = new OndcRegistry_.SubscribeMessage(timestamp, entity, networkParticipant);
var opts = {
  'body': new _index["default"].SubscribeBody({}, {})
};
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.subscribePost(opts, callback);
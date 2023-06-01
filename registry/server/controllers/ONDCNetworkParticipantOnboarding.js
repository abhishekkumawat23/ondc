'use strict';

var utils = require('../utils/writer.js');
var ONDCNetworkParticipantOnboarding = require('../service/ONDCNetworkParticipantOnboardingService');

module.exports.lookupPOST = function lookupPOST (req, res, next, body) {
  ONDCNetworkParticipantOnboarding.lookupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subscribePOST = function subscribePOST (req, res, next, body) {
  ONDCNetworkParticipantOnboarding.subscribePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.subscriber_urlOn_subscribePOST = function subscriber_urlOn_subscribePOST (req, res, next, body) {
  ONDCNetworkParticipantOnboarding.subscriber_urlOn_subscribePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

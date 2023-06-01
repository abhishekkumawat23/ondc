'use strict';

var utils = require('../utils/writer.js');
var KeyRotationOfNetworkParticipantBuyerAppOrSellerApp = require('../service/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppService');

module.exports.vlookupPOST = function vlookupPOST (req, res, next, body) {
  KeyRotationOfNetworkParticipantBuyerAppOrSellerApp.vlookupPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

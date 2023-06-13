'use strict';

var utils = require('../utils/writer.js');
var ONDCGateway = require('../service/ONDCGatewayService');

module.exports.on_searchPOST = function on_searchPOST (req, res, next, body) {
  ONDCGateway.on_searchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchPOST = function searchPOST (req, res, next, body) {
  ONDCGateway.searchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

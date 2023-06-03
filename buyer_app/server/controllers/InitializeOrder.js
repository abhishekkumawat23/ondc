'use strict';

var utils = require('../utils/writer.js');
var InitializeOrder = require('../service/InitializeOrderService');

module.exports.initorder = function initorder (req, res, next, body) {
  InitializeOrder.initorder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.oninit = function oninit (req, res, next, messageIds) {
  InitializeOrder.oninit(messageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

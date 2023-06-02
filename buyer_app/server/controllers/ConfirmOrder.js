'use strict';

var utils = require('../utils/writer.js');
var ConfirmOrder = require('../service/ConfirmOrderService');

module.exports.confirmorder = function confirmorder (req, res, next, body) {
  ConfirmOrder.confirmorder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.onconfirm = function onconfirm (req, res, next, messageIds) {
  ConfirmOrder.onconfirm(messageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

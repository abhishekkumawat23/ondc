'use strict';

var utils = require('../utils/writer.js');
var CancelOrder = require('../service/CancelOrderService');

module.exports.cancelorder = function cancelorder (req, res, next, body) {
  CancelOrder.cancelorder(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.oncancelorder = function oncancelorder (req, res, next, messageId) {
  CancelOrder.oncancelorder(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

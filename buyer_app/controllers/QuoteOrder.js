'use strict';

var utils = require('../utils/writer.js');
var QuoteOrder = require('../service/QuoteOrderService');

module.exports.onquote = function onquote (req, res, next, messageIds) {
  QuoteOrder.onquote(messageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.quote = function quote (req, res, next, body) {
  QuoteOrder.quote(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

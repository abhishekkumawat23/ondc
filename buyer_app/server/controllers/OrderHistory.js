'use strict';

var utils = require('../utils/writer.js');
var OrderHistory = require('../service/OrderHistoryService');

module.exports.orderhistory = function orderhistory (req, res, next, pageNumber, limit, contentType) {
  OrderHistory.orderhistory(pageNumber, limit, contentType)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

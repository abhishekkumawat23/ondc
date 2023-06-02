'use strict';

var utils = require('../utils/writer.js');
var Status = require('../service/StatusService');

module.exports.onorderstatus = function onorderstatus (req, res, next, orderIds) {
  Status.onorderstatus(orderIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.orderStatus = function orderStatus (req, res, next, body) {
  Status.orderStatus(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

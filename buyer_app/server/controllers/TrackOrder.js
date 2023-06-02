'use strict';

var utils = require('../utils/writer.js');
var TrackOrder = require('../service/TrackOrderService');

module.exports.ontrack = function ontrack (req, res, next, messageIds) {
  TrackOrder.ontrack(messageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.track = function track (req, res, next, body) {
  TrackOrder.track(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

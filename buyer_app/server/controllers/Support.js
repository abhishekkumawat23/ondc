'use strict';

var utils = require('../utils/writer.js');
var Support = require('../service/SupportService');

module.exports.onsupport = function onsupport (req, res, next, messageIds) {
  Support.onsupport(messageIds)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.support = function support (req, res, next, body) {
  Support.support(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

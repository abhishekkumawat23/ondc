'use strict';

var utils = require('../utils/writer.js');
var Search = require('../service/SearchService');

module.exports.filterparams = function filterparams (req, res, next, messageId) {
  Search.filterparams(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.onsearch = function onsearch (req, res, next, messageId) {
  Search.onsearch(messageId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchbyproduct = function searchbyproduct (req, res, next, body) {
  console.log(`request` + JSON.stringify(req.body));
  Search.searchbyproduct(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

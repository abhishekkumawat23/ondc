'use strict';

var utils = require('../utils/writer.js');
var BuyerAppMetaAPIs = require('../service/BuyerAppMetaAPIsService');

module.exports.cancellation_reasonsPOST = function cancellation_reasonsPOST (req, res, next, body) {
  BuyerAppMetaAPIs.cancellation_reasonsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedback_categoriesPOST = function feedback_categoriesPOST (req, res, next, body) {
  BuyerAppMetaAPIs.feedback_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.feedback_formPOST = function feedback_formPOST (req, res, next, body) {
  BuyerAppMetaAPIs.feedback_formPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.rating_categoriesPOST = function rating_categoriesPOST (req, res, next, body) {
  BuyerAppMetaAPIs.rating_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.return_reasonsPOST = function return_reasonsPOST (req, res, next, body) {
  BuyerAppMetaAPIs.return_reasonsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

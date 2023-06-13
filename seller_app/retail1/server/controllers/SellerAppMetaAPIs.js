'use strict';

var utils = require('../utils/writer.js');
var SellerAppMetaAPIs = require('../service/SellerAppMetaAPIsService');

module.exports.get_cancellation_reasonsPOST = function get_cancellation_reasonsPOST (req, res, next, body) {
  SellerAppMetaAPIs.get_cancellation_reasonsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_feedback_formPOST = function get_feedback_formPOST (req, res, next, body) {
  SellerAppMetaAPIs.get_feedback_formPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_rating_categoriesPOST = function get_rating_categoriesPOST (req, res, next, body) {
  SellerAppMetaAPIs.get_rating_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.get_return_reasonsPOST = function get_return_reasonsPOST (req, res, next, body) {
  SellerAppMetaAPIs.get_return_reasonsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

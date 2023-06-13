'use strict';

var utils = require('../utils/writer.js');
var SellerMetaAPIs = require('../service/SellerMetaAPIsService');

module.exports.get_feedback_categoriesPOST = function get_feedback_categoriesPOST (req, res, next, body) {
  SellerMetaAPIs.get_feedback_categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

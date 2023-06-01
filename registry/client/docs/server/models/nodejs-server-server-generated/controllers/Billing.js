'use strict';

var utils = require('../utils/writer.js');
var Billing = require('../service/BillingService');

module.exports.addbillingaddress = function addbillingaddress (req, res, next, body) {
  Billing.addbillingaddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.billingaddress = function billingaddress (req, res, next) {
  Billing.billingaddress()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatebillingaddress = function updatebillingaddress (req, res, next, body) {
  Billing.updatebillingaddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

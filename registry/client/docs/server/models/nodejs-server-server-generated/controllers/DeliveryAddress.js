'use strict';

var utils = require('../utils/writer.js');
var DeliveryAddress = require('../service/DeliveryAddressService');

module.exports.adddeliveryaddress = function adddeliveryaddress (req, res, next, body) {
  DeliveryAddress.adddeliveryaddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ondeliveryaddress = function ondeliveryaddress (req, res, next) {
  DeliveryAddress.ondeliveryaddress()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatedeliveryaddress = function updatedeliveryaddress (req, res, next, body) {
  DeliveryAddress.updatedeliveryaddress(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

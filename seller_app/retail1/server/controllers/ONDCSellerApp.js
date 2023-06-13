'use strict';

var utils = require('../utils/writer.js');
var ONDCSellerApp = require('../service/ONDCSellerAppService');

module.exports.cancelPOST = function cancelPOST (req, res, next, body) {
  ONDCSellerApp.cancelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.confirmPOST = function confirmPOST (req, res, next, body) {
  ONDCSellerApp.confirmPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.initPOST = function initPOST (req, res, next, body) {
  ONDCSellerApp.initPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.ratingPOST = function ratingPOST (req, res, next, body) {
  ONDCSellerApp.ratingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchPOST = function searchPOST (req, res, next, body) {
  ONDCSellerApp.searchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.selectPOST = function selectPOST (req, res, next, body) {
  ONDCSellerApp.selectPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.statusPOST = function statusPOST (req, res, next, body) {
  ONDCSellerApp.statusPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.supportPOST = function supportPOST (req, res, next, body) {
  ONDCSellerApp.supportPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.trackPOST = function trackPOST (req, res, next, body) {
  ONDCSellerApp.trackPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePOST = function updatePOST (req, res, next, body) {
  ONDCSellerApp.updatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

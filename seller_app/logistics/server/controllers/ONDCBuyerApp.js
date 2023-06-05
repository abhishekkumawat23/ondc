'use strict';

var utils = require('../utils/writer.js');
var ONDCBuyerApp = require('../service/ONDCBuyerAppService');

module.exports.on_cancelPOST = function on_cancelPOST (req, res, next, body) {
  ONDCBuyerApp.on_cancelPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_confirmPOST = function on_confirmPOST (req, res, next, body) {
  ONDCBuyerApp.on_confirmPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_initPOST = function on_initPOST (req, res, next, body) {
  ONDCBuyerApp.on_initPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_ratingPOST = function on_ratingPOST (req, res, next, body) {
  ONDCBuyerApp.on_ratingPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_searchPOST = function on_searchPOST (req, res, next, body) {
  ONDCBuyerApp.on_searchPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_selectPOST = function on_selectPOST (req, res, next, body) {
  ONDCBuyerApp.on_selectPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_statusPOST = function on_statusPOST (req, res, next, body) {
  ONDCBuyerApp.on_statusPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_supportPOST = function on_supportPOST (req, res, next, body) {
  ONDCBuyerApp.on_supportPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_trackPOST = function on_trackPOST (req, res, next, body) {
  ONDCBuyerApp.on_trackPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.on_updatePOST = function on_updatePOST (req, res, next, body) {
  ONDCBuyerApp.on_updatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

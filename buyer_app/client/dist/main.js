"use strict";

var _index = _interopRequireDefault(require("./index.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var apiClient = new _index["default"].ApiClient();
apiClient.authentications = {
  "bearer": {
    "type": "basic"
  }
};
var searchApi = new _index["default"].SearchApi(apiClient);
var body = new _index["default"].Searchbyproductrequest();
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
searchApi.searchbyproduct(body, callback);
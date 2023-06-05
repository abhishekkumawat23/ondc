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
var context = new _index["default"].Context('testdomain');
var searchString = "coffee";
var deliveryLocation = "12.974002,77.613458";
var criteria = new _index["default"].Criteria(searchString, deliveryLocation);
var message = new _index["default"].Message(criteria);
var body = new _index["default"].Searchbyproductrequest(context, message);
var callback = function callback(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
searchApi.searchbyproduct(body, callback);
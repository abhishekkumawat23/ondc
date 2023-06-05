import BuyerApp from './index.js';

var apiClient = new BuyerApp.ApiClient();
apiClient.authentications = {
    "bearer": {
        "type": "basic"
    }
}

var searchApi = new BuyerApp.SearchApi(apiClient);
let context = new BuyerApp.Context('testdomain');
let searchString = "coffee";
let deliveryLocation = "12.974002,77.613458";
let criteria = new BuyerApp.Criteria(searchString, deliveryLocation);
let message = new BuyerApp.Message(criteria);
var body = new BuyerApp.Searchbyproductrequest(context, message);

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
searchApi.searchbyproduct(body, callback);
import BuyerApp from './index.js';

var apiClient = new BuyerApp.ApiClient();
apiClient.authentications = {
    "bearer": {
        "type": "basic"
    }
}

var searchApi = new BuyerApp.SearchApi(apiClient);
var body = new BuyerApp.Searchbyproductrequest();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
searchApi.searchbyproduct(body, callback);
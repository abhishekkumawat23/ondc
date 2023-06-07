var OndcGateway = require('./index.js');
var defaultClient = new OndcGateway.ApiClient();

// Configure API key authorization: GatewaySubscriberAuth
var GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix['Proxy-Authorization'] = "Token"

// Configure API key authorization: GatewaySubscriberAuthNew
var GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix['X-Gateway-Authorization'] = "Token"

// Configure API key authorization: SubscriberAuth
var SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new OndcGateway.ONDCGatewayApi()
var opts = { 
  'body': new OndcGateway.OnSearchBody() // {OnSearchBody} Sellers provide their catalog in response to buyer search
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.onSearchPOST(opts, callback);
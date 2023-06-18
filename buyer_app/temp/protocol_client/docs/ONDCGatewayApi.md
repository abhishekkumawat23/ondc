# OndcProtocolApiForRetailGroceryFb.ONDCGatewayApi

All URIs are relative to *https://virtserver.swaggerhub.com/ONDC/ONDC-Protocol-Retail/1.0.29*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onSearchPost**](ONDCGatewayApi.md#onSearchPost) | **POST** /on_search | 
[**searchPost**](ONDCGatewayApi.md#searchPost) | **POST** /search | 

<a name="onSearchPost"></a>
# **onSearchPost**
> InlineResponse2001 onSearchPost(opts)



Send catalog

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCGatewayApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnSearchBody() // OnSearchBody | Sellers provide their catalog in response to buyer search
};
apiInstance.onSearchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**OnSearchBody**](OnSearchBody.md)| Sellers provide their catalog in response to buyer search | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchPost"></a>
# **searchPost**
> InlineResponse200 searchPost(opts)



Search for services by intent

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCGatewayApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.SearchBody() // SearchBody | Buyer searches for products and services
};
apiInstance.searchPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchBody**](SearchBody.md)| Buyer searches for products and services | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


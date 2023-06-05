# OndcProtocolApiForLogistics.SellerAppMetaAPIsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCancellationReasonsPost**](SellerAppMetaAPIsApi.md#getCancellationReasonsPost) | **POST** /get_cancellation_reasons | 
[**getFeedbackFormPost**](SellerAppMetaAPIsApi.md#getFeedbackFormPost) | **POST** /get_feedback_form | 
[**getRatingCategoriesPost**](SellerAppMetaAPIsApi.md#getRatingCategoriesPost) | **POST** /get_rating_categories | 
[**getReturnReasonsPost**](SellerAppMetaAPIsApi.md#getReturnReasonsPost) | **POST** /get_return_reasons | 

<a name="getCancellationReasonsPost"></a>
# **getCancellationReasonsPost**
> InlineResponse200 getCancellationReasonsPost(opts)



Get cancellation reasons from the Seller App

### Example
```javascript
import {OndcProtocolApiForLogistics} from 'ondc_protocol_api_for_logistics';
let defaultClient = OndcProtocolApiForLogistics.ApiClient.instance;

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

let apiInstance = new OndcProtocolApiForLogistics.SellerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForLogistics.GetCancellationReasonsBody() // GetCancellationReasonsBody | Context header is sent as the request
};
apiInstance.getCancellationReasonsPost(opts, (error, data, response) => {
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
 **body** | [**GetCancellationReasonsBody**](GetCancellationReasonsBody.md)| Context header is sent as the request | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFeedbackFormPost"></a>
# **getFeedbackFormPost**
> InlineResponse200 getFeedbackFormPost(opts)



Request a feedback form from the Seller App

### Example
```javascript
import {OndcProtocolApiForLogistics} from 'ondc_protocol_api_for_logistics';
let defaultClient = OndcProtocolApiForLogistics.ApiClient.instance;

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

let apiInstance = new OndcProtocolApiForLogistics.SellerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForLogistics.GetFeedbackFormBody() // GetFeedbackFormBody | The rating value and category is sent by the Buyer App
};
apiInstance.getFeedbackFormPost(opts, (error, data, response) => {
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
 **body** | [**GetFeedbackFormBody**](GetFeedbackFormBody.md)| The rating value and category is sent by the Buyer App | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRatingCategoriesPost"></a>
# **getRatingCategoriesPost**
> InlineResponse200 getRatingCategoriesPost(opts)



Get a list of categories that can be rated by the Seller App

### Example
```javascript
import {OndcProtocolApiForLogistics} from 'ondc_protocol_api_for_logistics';
let defaultClient = OndcProtocolApiForLogistics.ApiClient.instance;

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

let apiInstance = new OndcProtocolApiForLogistics.SellerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForLogistics.GetRatingCategoriesBody() // GetRatingCategoriesBody | Context header is sent as the request
};
apiInstance.getRatingCategoriesPost(opts, (error, data, response) => {
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
 **body** | [**GetRatingCategoriesBody**](GetRatingCategoriesBody.md)| Context header is sent as the request | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getReturnReasonsPost"></a>
# **getReturnReasonsPost**
> InlineResponse200 getReturnReasonsPost(opts)



Get return reasons from the Seller App

### Example
```javascript
import {OndcProtocolApiForLogistics} from 'ondc_protocol_api_for_logistics';
let defaultClient = OndcProtocolApiForLogistics.ApiClient.instance;

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

let apiInstance = new OndcProtocolApiForLogistics.SellerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForLogistics.GetReturnReasonsBody() // GetReturnReasonsBody | Context header is sent as the request
};
apiInstance.getReturnReasonsPost(opts, (error, data, response) => {
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
 **body** | [**GetReturnReasonsBody**](GetReturnReasonsBody.md)| Context header is sent as the request | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


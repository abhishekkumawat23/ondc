# OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ONDC/ONDC-Protocol-Retail/1.0.29*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancellationReasonsPost**](BuyerAppMetaAPIsApi.md#cancellationReasonsPost) | **POST** /cancellation_reasons | 
[**feedbackCategoriesPost**](BuyerAppMetaAPIsApi.md#feedbackCategoriesPost) | **POST** /feedback_categories | 
[**feedbackFormPost**](BuyerAppMetaAPIsApi.md#feedbackFormPost) | **POST** /feedback_form | 
[**ratingCategoriesPost**](BuyerAppMetaAPIsApi.md#ratingCategoriesPost) | **POST** /rating_categories | 
[**returnReasonsPost**](BuyerAppMetaAPIsApi.md#returnReasonsPost) | **POST** /return_reasons | 

<a name="cancellationReasonsPost"></a>
# **cancellationReasonsPost**
> InlineResponse200 cancellationReasonsPost(opts)



Get cancellation reasons from the Seller App

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

let apiInstance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.CancellationReasonsBody() // CancellationReasonsBody | List of cancellation reasons.
};
apiInstance.cancellationReasonsPost(opts, (error, data, response) => {
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
 **body** | [**CancellationReasonsBody**](CancellationReasonsBody.md)| List of cancellation reasons. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="feedbackCategoriesPost"></a>
# **feedbackCategoriesPost**
> InlineResponse200 feedbackCategoriesPost(opts)



Get a list of categories for which feedback can be given by the Buyer App

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

let apiInstance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.FeedbackCategoriesBody() // FeedbackCategoriesBody | Array of categories for which feedback can be given by the Buyer App
};
apiInstance.feedbackCategoriesPost(opts, (error, data, response) => {
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
 **body** | [**FeedbackCategoriesBody**](FeedbackCategoriesBody.md)| Array of categories for which feedback can be given by the Buyer App | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="feedbackFormPost"></a>
# **feedbackFormPost**
> InlineResponse200 feedbackFormPost(opts)



Get a feedback form from the Seller App

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

let apiInstance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.FeedbackFormBody() // FeedbackFormBody | Feedback form sent by the Buyer App
};
apiInstance.feedbackFormPost(opts, (error, data, response) => {
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
 **body** | [**FeedbackFormBody**](FeedbackFormBody.md)| Feedback form sent by the Buyer App | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ratingCategoriesPost"></a>
# **ratingCategoriesPost**
> InlineResponse200 ratingCategoriesPost(opts)



Get a list of categories that can be rated by the Buyer App

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

let apiInstance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.RatingCategoriesBody() // RatingCategoriesBody | Array of categories which can be rated
};
apiInstance.ratingCategoriesPost(opts, (error, data, response) => {
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
 **body** | [**RatingCategoriesBody**](RatingCategoriesBody.md)| Array of categories which can be rated | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="returnReasonsPost"></a>
# **returnReasonsPost**
> InlineResponse200 returnReasonsPost(opts)



Get return reasons from the Seller App

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

let apiInstance = new OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.ReturnReasonsBody() // ReturnReasonsBody | List of return reasons
};
apiInstance.returnReasonsPost(opts, (error, data, response) => {
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
 **body** | [**ReturnReasonsBody**](ReturnReasonsBody.md)| List of return reasons | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


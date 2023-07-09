# OndcProtocolApiForRetailGroceryFb.BuyerAppMetaAPIsApi

All URIs are relative to *http://localhost:9050/v1/protocol*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancellationReasonsPOST**](BuyerAppMetaAPIsApi.md#cancellationReasonsPOST) | **POST** /cancellation_reasons | 
[**feedbackCategoriesPOST**](BuyerAppMetaAPIsApi.md#feedbackCategoriesPOST) | **POST** /feedback_categories | 
[**feedbackFormPOST**](BuyerAppMetaAPIsApi.md#feedbackFormPOST) | **POST** /feedback_form | 
[**ratingCategoriesPOST**](BuyerAppMetaAPIsApi.md#ratingCategoriesPOST) | **POST** /rating_categories | 
[**returnReasonsPOST**](BuyerAppMetaAPIsApi.md#returnReasonsPOST) | **POST** /return_reasons | 

<a name="cancellationReasonsPOST"></a>
# **cancellationReasonsPOST**
> InlineResponse200 cancellationReasonsPOST(opts)



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
apiInstance.cancellationReasonsPOST(opts, (error, data, response) => {
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

<a name="feedbackCategoriesPOST"></a>
# **feedbackCategoriesPOST**
> InlineResponse200 feedbackCategoriesPOST(opts)



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
apiInstance.feedbackCategoriesPOST(opts, (error, data, response) => {
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

<a name="feedbackFormPOST"></a>
# **feedbackFormPOST**
> InlineResponse200 feedbackFormPOST(opts)



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
apiInstance.feedbackFormPOST(opts, (error, data, response) => {
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

<a name="ratingCategoriesPOST"></a>
# **ratingCategoriesPOST**
> InlineResponse200 ratingCategoriesPOST(opts)



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
apiInstance.ratingCategoriesPOST(opts, (error, data, response) => {
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

<a name="returnReasonsPOST"></a>
# **returnReasonsPOST**
> InlineResponse200 returnReasonsPOST(opts)



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
apiInstance.returnReasonsPOST(opts, (error, data, response) => {
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


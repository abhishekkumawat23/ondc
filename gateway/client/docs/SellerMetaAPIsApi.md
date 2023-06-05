# OndcProtocolCoreApi.SellerMetaAPIsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ONDCTech/ONDC-Protocol-Core/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFeedbackCategoriesPost**](SellerMetaAPIsApi.md#getFeedbackCategoriesPost) | **POST** /get_feedback_categories | 

<a name="getFeedbackCategoriesPost"></a>
# **getFeedbackCategoriesPost**
> InlineResponse200 getFeedbackCategoriesPost(opts)



Get a list of categories for which feedback can be given by the Buyer App

### Example
```javascript
import {OndcProtocolCoreApi} from 'ondc_protocol_core_api';
let defaultClient = OndcProtocolCoreApi.ApiClient.instance;

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

let apiInstance = new OndcProtocolCoreApi.SellerMetaAPIsApi();
let opts = { 
  'body': new OndcProtocolCoreApi.GetFeedbackCategoriesBody() // GetFeedbackCategoriesBody | Context header is sent as the request
};
apiInstance.getFeedbackCategoriesPost(opts, (error, data, response) => {
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
 **body** | [**GetFeedbackCategoriesBody**](GetFeedbackCategoriesBody.md)| Context header is sent as the request | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# SandboxClientSdk.OrderHistoryApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orderhistory**](OrderHistoryApi.md#orderhistory) | **GET** /v1/orders | order history

<a name="orderhistory"></a>
# **orderhistory**
> Orderhistory orderhistory(pageNumber, limit, contentType)

order history

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.OrderHistoryApi();
let pageNumber = 56; // Number | Number - from 1 to ....
let limit = 56; // Number | 
let contentType = "contentType_example"; // String | 

apiInstance.orderhistory(pageNumber, limit, contentType, (error, data, response) => {
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
 **pageNumber** | **Number**| Number - from 1 to .... | 
 **limit** | **Number**|  | 
 **contentType** | **String**|  | 

### Return type

[**Orderhistory**](Orderhistory.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


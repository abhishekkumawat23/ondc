# SandboxClientSdk.CancelOrderApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelorder**](CancelOrderApi.md#cancelorder) | **POST** /v1/cancel_order | cancel order
[**oncancelorder**](CancelOrderApi.md#oncancelorder) | **GET** /v1/on_cancel_order | on cancel order

<a name="cancelorder"></a>
# **cancelorder**
> Cancelorder cancelorder(body)

cancel order

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.CancelOrderApi();
let body = new SandboxClientSdk.Cancelorderrequest(); // Cancelorderrequest | 

apiInstance.cancelorder(body, (error, data, response) => {
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
 **body** | [**Cancelorderrequest**](Cancelorderrequest.md)|  | 

### Return type

[**Cancelorder**](Cancelorder.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="oncancelorder"></a>
# **oncancelorder**
> OncancelorderErrorresponse oncancelorder(messageId)

on cancel order

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.CancelOrderApi();
let messageId = "messageId_example"; // String | 

apiInstance.oncancelorder(messageId, (error, data, response) => {
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
 **messageId** | **String**|  | 

### Return type

[**OncancelorderErrorresponse**](OncancelorderErrorresponse.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


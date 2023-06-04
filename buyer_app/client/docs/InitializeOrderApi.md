# SandboxClientSdk.InitializeOrderApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**initorder**](InitializeOrderApi.md#initorder) | **POST** /v2/initialize_order | init order
[**oninit**](InitializeOrderApi.md#oninit) | **GET** /v2/on_initialize_order | on init

<a name="initorder"></a>
# **initorder**
> [Initorder] initorder(body)

init order

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.InitializeOrderApi();
let body = [new SandboxClientSdk.Initorderrequest()]; // [Initorderrequest] | 

apiInstance.initorder(body, (error, data, response) => {
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
 **body** | [**[Initorderrequest]**](Initorderrequest.md)|  | 

### Return type

[**[Initorder]**](Initorder.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="oninit"></a>
# **oninit**
> [Oninit] oninit(messageIds)

on init

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.InitializeOrderApi();
let messageIds = "messageIds_example"; // String | Comma separated message ids

apiInstance.oninit(messageIds, (error, data, response) => {
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
 **messageIds** | **String**| Comma separated message ids | 

### Return type

[**[Oninit]**](Oninit.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


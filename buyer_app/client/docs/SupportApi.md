# SandboxClientSdk.SupportApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onsupport**](SupportApi.md#onsupport) | **GET** /v2/on_support | on support
[**support**](SupportApi.md#support) | **POST** /v2/get_support | support

<a name="onsupport"></a>
# **onsupport**
> [Onsupport] onsupport(messageIds)

on support

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.SupportApi();
let messageIds = "messageIds_example"; // String | comma seaparated message ids

apiInstance.onsupport(messageIds, (error, data, response) => {
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
 **messageIds** | **String**| comma seaparated message ids | 

### Return type

[**[Onsupport]**](Onsupport.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="support"></a>
# **support**
> [Support] support(body)

support

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.SupportApi();
let body = [new SandboxClientSdk.Supportrequest()]; // [Supportrequest] | 

apiInstance.support(body, (error, data, response) => {
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
 **body** | [**[Supportrequest]**](Supportrequest.md)|  | 

### Return type

[**[Support]**](Support.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


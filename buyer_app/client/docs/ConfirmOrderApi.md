# SandboxClientSdk.ConfirmOrderApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmorder**](ConfirmOrderApi.md#confirmorder) | **POST** /v2/confirm_order | confirm order
[**onconfirm**](ConfirmOrderApi.md#onconfirm) | **GET** /v2/on_confirm_order | on confirm

<a name="confirmorder"></a>
# **confirmorder**
> [Confirmorder] confirmorder(body)

confirm order

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.ConfirmOrderApi();
let body = [new SandboxClientSdk.Confirmorderrequest()]; // [Confirmorderrequest] | 

apiInstance.confirmorder(body, (error, data, response) => {
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
 **body** | [**[Confirmorderrequest]**](Confirmorderrequest.md)|  | 

### Return type

[**[Confirmorder]**](Confirmorder.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onconfirm"></a>
# **onconfirm**
> [Onconfirm] onconfirm(messageIds)

on confirm

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.ConfirmOrderApi();
let messageIds = "messageIds_example"; // String | comma separated message ids

apiInstance.onconfirm(messageIds, (error, data, response) => {
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
 **messageIds** | **String**| comma separated message ids | 

### Return type

[**[Onconfirm]**](Onconfirm.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


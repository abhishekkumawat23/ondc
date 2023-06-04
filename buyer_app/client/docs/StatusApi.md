# SandboxClientSdk.StatusApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onorderstatus**](StatusApi.md#onorderstatus) | **GET** /v2/on_order_status | on order status
[**orderStatus**](StatusApi.md#orderStatus) | **POST** /v1/order_status | order Status

<a name="onorderstatus"></a>
# **onorderstatus**
> onorderstatus(orderIds)

on order status

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.StatusApi();
let orderIds = 56; // Number | Comma separated values

apiInstance.onorderstatus(orderIds, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderIds** | **Number**| Comma separated values | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="orderStatus"></a>
# **orderStatus**
> orderStatus(body)

order Status

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.StatusApi();
let body = [new SandboxClientSdk.OrderStatusRequest()]; // [OrderStatusRequest] | 

apiInstance.orderStatus(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**[OrderStatusRequest]**](OrderStatusRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


# SandboxClientSdk.SearchApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**filterparams**](SearchApi.md#filterparams) | **GET** /v1/getFilterParams | filter params
[**onsearch**](SearchApi.md#onsearch) | **GET** /v1/on_search | on search
[**searchbyproduct**](SearchApi.md#searchbyproduct) | **POST** /v1/search | search by product

<a name="filterparams"></a>
# **filterparams**
> Filterparams filterparams(messageId)

filter params

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.SearchApi();
let messageId = "messageId_example"; // String | 

apiInstance.filterparams(messageId, (error, data, response) => {
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

[**Filterparams**](Filterparams.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="onsearch"></a>
# **onsearch**
> Onsearchbyproduct onsearch(messageId)

on search

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.SearchApi();
let messageId = "messageId_example"; // String | 

apiInstance.onsearch(messageId, (error, data, response) => {
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

[**Onsearchbyproduct**](Onsearchbyproduct.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="searchbyproduct"></a>
# **searchbyproduct**
> Searchbyproduct searchbyproduct(body)

search by product

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.SearchApi();
let body = new SandboxClientSdk.Searchbyproductrequest(); // Searchbyproductrequest | 

apiInstance.searchbyproduct(body, (error, data, response) => {
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
 **body** | [**Searchbyproductrequest**](Searchbyproductrequest.md)|  | 

### Return type

[**Searchbyproduct**](Searchbyproduct.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


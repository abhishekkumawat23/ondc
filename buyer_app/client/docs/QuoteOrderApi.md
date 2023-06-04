# SandboxClientSdk.QuoteOrderApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onquote**](QuoteOrderApi.md#onquote) | **GET** /v2/on_get_quote | on quote
[**quote**](QuoteOrderApi.md#quote) | **POST** /v2/get_quote | quote

<a name="onquote"></a>
# **onquote**
> [Onquote] onquote(messageIds)

on quote

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.QuoteOrderApi();
let messageIds = "messageIds_example"; // String | Comma separated message ids

apiInstance.onquote(messageIds, (error, data, response) => {
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

[**[Onquote]**](Onquote.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="quote"></a>
# **quote**
> [Quote] quote(body)

quote

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.QuoteOrderApi();
let body = [new SandboxClientSdk.Quoterequest()]; // [Quoterequest] | 

apiInstance.quote(body, (error, data, response) => {
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
 **body** | [**[Quoterequest]**](Quoterequest.md)|  | 

### Return type

[**[Quote]**](Quote.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


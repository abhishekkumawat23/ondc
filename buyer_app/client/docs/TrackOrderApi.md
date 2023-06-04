# SandboxClientSdk.TrackOrderApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ontrack**](TrackOrderApi.md#ontrack) | **GET** /v2/on_track | on track
[**track**](TrackOrderApi.md#track) | **POST** /v2/track | track

<a name="ontrack"></a>
# **ontrack**
> [Ontrack] ontrack(messageIds)

on track

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.TrackOrderApi();
let messageIds = "messageIds_example"; // String | comma separated ids

apiInstance.ontrack(messageIds, (error, data, response) => {
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
 **messageIds** | **String**| comma separated ids | 

### Return type

[**[Ontrack]**](Ontrack.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="track"></a>
# **track**
> [Track] track(body)

track

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.TrackOrderApi();
let body = [new SandboxClientSdk.Trackrequest()]; // [Trackrequest] | 

apiInstance.track(body, (error, data, response) => {
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
 **body** | [**[Trackrequest]**](Trackrequest.md)|  | 

### Return type

[**[Track]**](Track.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


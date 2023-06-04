# SandboxClientSdk.DeliveryAddressApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adddeliveryaddress**](DeliveryAddressApi.md#adddeliveryaddress) | **POST** /v1/delivery_address | add delivery address
[**ondeliveryaddress**](DeliveryAddressApi.md#ondeliveryaddress) | **GET** /v1/delivery_address | on delivery address
[**updatedeliveryaddress**](DeliveryAddressApi.md#updatedeliveryaddress) | **POST** /v1/update_delivery_address/c2201e38-dd37-4da8-b19f-2ac730e0e8f2 | update delivery address

<a name="adddeliveryaddress"></a>
# **adddeliveryaddress**
> Adddeliveryaddress adddeliveryaddress(body)

add delivery address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.DeliveryAddressApi();
let body = new SandboxClientSdk.Adddeliveryaddressrequest(); // Adddeliveryaddressrequest | 

apiInstance.adddeliveryaddress(body, (error, data, response) => {
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
 **body** | [**Adddeliveryaddressrequest**](Adddeliveryaddressrequest.md)|  | 

### Return type

[**Adddeliveryaddress**](Adddeliveryaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="ondeliveryaddress"></a>
# **ondeliveryaddress**
> [Ondeliveryaddress] ondeliveryaddress()

on delivery address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.DeliveryAddressApi();
apiInstance.ondeliveryaddress((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ondeliveryaddress]**](Ondeliveryaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatedeliveryaddress"></a>
# **updatedeliveryaddress**
> Updatedeliveryaddress updatedeliveryaddress(body)

update delivery address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.DeliveryAddressApi();
let body = new SandboxClientSdk.Updatedeliveryaddressrequest(); // Updatedeliveryaddressrequest | 

apiInstance.updatedeliveryaddress(body, (error, data, response) => {
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
 **body** | [**Updatedeliveryaddressrequest**](Updatedeliveryaddressrequest.md)|  | 

### Return type

[**Updatedeliveryaddress**](Updatedeliveryaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


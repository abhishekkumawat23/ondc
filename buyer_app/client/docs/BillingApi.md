# SandboxClientSdk.BillingApi

All URIs are relative to *https://buyer-app.ondc.org/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addbillingaddress**](BillingApi.md#addbillingaddress) | **POST** /v1/billing_details | add billing address
[**billingaddress**](BillingApi.md#billingaddress) | **GET** /v1/billing_details | billing address
[**updatebillingaddress**](BillingApi.md#updatebillingaddress) | **POST** /v1/update_billing_details/de1ae14e-aea9-40a6-9b42-cd04f9febb9 | update billing address

<a name="addbillingaddress"></a>
# **addbillingaddress**
> Addbillingaddress addbillingaddress(body)

add billing address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.BillingApi();
let body = new SandboxClientSdk.Addbillingaddressrequest(); // Addbillingaddressrequest | 

apiInstance.addbillingaddress(body, (error, data, response) => {
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
 **body** | [**Addbillingaddressrequest**](Addbillingaddressrequest.md)|  | 

### Return type

[**Addbillingaddress**](Addbillingaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="billingaddress"></a>
# **billingaddress**
> [Billingaddress] billingaddress()

billing address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.BillingApi();
apiInstance.billingaddress((error, data, response) => {
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

[**[Billingaddress]**](Billingaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatebillingaddress"></a>
# **updatebillingaddress**
> Updatebillingaddress updatebillingaddress(body)

update billing address

### Example
```javascript
import {SandboxClientSdk} from 'sandbox_client_sdk';
let defaultClient = SandboxClientSdk.ApiClient.instance;


let apiInstance = new SandboxClientSdk.BillingApi();
let body = new SandboxClientSdk.Updatebillingaddressrequest(); // Updatebillingaddressrequest | 

apiInstance.updatebillingaddress(body, (error, data, response) => {
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
 **body** | [**Updatebillingaddressrequest**](Updatebillingaddressrequest.md)|  | 

### Return type

[**Updatebillingaddress**](Updatebillingaddress.md)

### Authorization

[bearer](../README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


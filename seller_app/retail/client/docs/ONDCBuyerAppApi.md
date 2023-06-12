# OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi

All URIs are relative to *http://localhost:9060/ONDC/ONDC-Protocol-Hyperlocal/1.0.13*

Method | HTTP request | Description
------------- | ------------- | -------------
[**onCancelPOST**](ONDCBuyerAppApi.md#onCancelPOST) | **POST** /on_cancel | 
[**onConfirmPOST**](ONDCBuyerAppApi.md#onConfirmPOST) | **POST** /on_confirm | 
[**onInitPOST**](ONDCBuyerAppApi.md#onInitPOST) | **POST** /on_init | 
[**onRatingPOST**](ONDCBuyerAppApi.md#onRatingPOST) | **POST** /on_rating | 
[**onSearchPOST**](ONDCBuyerAppApi.md#onSearchPOST) | **POST** /on_search | 
[**onSelectPOST**](ONDCBuyerAppApi.md#onSelectPOST) | **POST** /on_select | 
[**onStatusPOST**](ONDCBuyerAppApi.md#onStatusPOST) | **POST** /on_status | 
[**onSupportPOST**](ONDCBuyerAppApi.md#onSupportPOST) | **POST** /on_support | 
[**onTrackPOST**](ONDCBuyerAppApi.md#onTrackPOST) | **POST** /on_track | 
[**onUpdatePOST**](ONDCBuyerAppApi.md#onUpdatePOST) | **POST** /on_update | 

<a name="onCancelPOST"></a>
# **onCancelPOST**
> InlineResponse200 onCancelPOST(opts)



Send cancellation request_id with reasons list in case of cancellation request. Else send cancelled order object

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnCancelBody() // OnCancelBody | Seller provides response to cancellation request
};
apiInstance.onCancelPOST(opts, (error, data, response) => {
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
 **body** | [**OnCancelBody**](OnCancelBody.md)| Seller provides response to cancellation request | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onConfirmPOST"></a>
# **onConfirmPOST**
> InlineResponse200 onConfirmPOST(opts)



Send active order object

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnConfirmBody() // OnConfirmBody | Seller confirms order
};
apiInstance.onConfirmPOST(opts, (error, data, response) => {
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
 **body** | [**OnConfirmBody**](OnConfirmBody.md)| Seller confirms order | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onInitPOST"></a>
# **onInitPOST**
> InlineResponse200 onInitPOST(opts)



Send order object with payment details updated

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnInitBody() // OnInitBody | Seller provides terms and conditions for an order
};
apiInstance.onInitPOST(opts, (error, data, response) => {
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
 **body** | [**OnInitBody**](OnInitBody.md)| Seller provides terms and conditions for an order | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onRatingPOST"></a>
# **onRatingPOST**
> InlineResponse200 onRatingPOST(opts)



Provide feedback on a service

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnRatingBody() // OnRatingBody | Seller provides response to rating provided by buyer
};
apiInstance.onRatingPOST(opts, (error, data, response) => {
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
 **body** | [**OnRatingBody**](OnRatingBody.md)| Seller provides response to rating provided by buyer | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onSearchPOST"></a>
# **onSearchPOST**
> InlineResponse2001 onSearchPOST(opts)



Send catalog

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnSearchBody() // OnSearchBody | Sellers provide their catalog in response to buyer search
};
apiInstance.onSearchPOST(opts, (error, data, response) => {
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
 **body** | [**OnSearchBody**](OnSearchBody.md)| Sellers provide their catalog in response to buyer search | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onSelectPOST"></a>
# **onSelectPOST**
> InlineResponse200 onSelectPOST(opts)



Send draft order object with quoted price for selected items

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnSelectBody() // OnSelectBody | Seller provides quote for selected items
};
apiInstance.onSelectPOST(opts, (error, data, response) => {
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
 **body** | [**OnSelectBody**](OnSelectBody.md)| Seller provides quote for selected items | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onStatusPOST"></a>
# **onStatusPOST**
> InlineResponse200 onStatusPOST(opts)



Fetch the status of a Service

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnStatusBody() // OnStatusBody | Seller provides status information for order
};
apiInstance.onStatusPOST(opts, (error, data, response) => {
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
 **body** | [**OnStatusBody**](OnStatusBody.md)| Seller provides status information for order | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onSupportPOST"></a>
# **onSupportPOST**
> InlineResponse200 onSupportPOST(opts)



Contact Support

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnSupportBody() // OnSupportBody | Seller provides Contact Support details
};
apiInstance.onSupportPOST(opts, (error, data, response) => {
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
 **body** | [**OnSupportBody**](OnSupportBody.md)| Seller provides Contact Support details | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onTrackPOST"></a>
# **onTrackPOST**
> InlineResponse200 onTrackPOST(opts)



Send tracking details of an active order

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnTrackBody() // OnTrackBody | Seller provides tracking details for an order
};
apiInstance.onTrackPOST(opts, (error, data, response) => {
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
 **body** | [**OnTrackBody**](OnTrackBody.md)| Seller provides tracking details for an order | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="onUpdatePOST"></a>
# **onUpdatePOST**
> InlineResponse200 onUpdatePOST(opts)



Returns updated service with updated runtime object

### Example
```javascript
import {OndcProtocolApiForRetailGroceryFb} from 'ondc_protocol_api_for_retail__grocery_fb';
let defaultClient = OndcProtocolApiForRetailGroceryFb.ApiClient.instance;

// Configure API key authorization: GatewaySubscriberAuth
let GatewaySubscriberAuth = defaultClient.authentications['GatewaySubscriberAuth'];
GatewaySubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuth.apiKeyPrefix = 'Token';

// Configure API key authorization: GatewaySubscriberAuthNew
let GatewaySubscriberAuthNew = defaultClient.authentications['GatewaySubscriberAuthNew'];
GatewaySubscriberAuthNew.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//GatewaySubscriberAuthNew.apiKeyPrefix = 'Token';

// Configure API key authorization: SubscriberAuth
let SubscriberAuth = defaultClient.authentications['SubscriberAuth'];
SubscriberAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//SubscriberAuth.apiKeyPrefix = 'Token';

let apiInstance = new OndcProtocolApiForRetailGroceryFb.ONDCBuyerAppApi();
let opts = { 
  'body': new OndcProtocolApiForRetailGroceryFb.OnUpdateBody() // OnUpdateBody | Seller provides response to order update
};
apiInstance.onUpdatePOST(opts, (error, data, response) => {
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
 **body** | [**OnUpdateBody**](OnUpdateBody.md)| Seller provides response to order update | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[GatewaySubscriberAuth](../README.md#GatewaySubscriberAuth), [GatewaySubscriberAuthNew](../README.md#GatewaySubscriberAuthNew), [SubscriberAuth](../README.md#SubscriberAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


# OndcRegistry_.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi

All URIs are relative to *https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**vlookupPost**](KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi.md#vlookupPost) | **POST** /vlookup | Get public keys of network participants

<a name="vlookupPost"></a>
# **vlookupPost**
> [InlineResponse2003] vlookupPost(opts)

Get public keys of network participants

The network participant will trigger the lookup call to the registry to fetch its public keys.

### Example
```javascript
import {OndcRegistry_} from 'ondc_registry_';

let apiInstance = new OndcRegistry_.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi();
let opts = { 
  'body': new OndcRegistry_.VlookupBody() // VlookupBody | vlookup
};
apiInstance.vlookupPost(opts, (error, data, response) => {
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
 **body** | [**VlookupBody**](VlookupBody.md)| vlookup | [optional] 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


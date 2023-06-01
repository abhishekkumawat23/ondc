# OndcRegistry_.ONDCNetworkParticipantOnboardingApi

All URIs are relative to *https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5*

Method | HTTP request | Description
------------- | ------------- | -------------
[**lookupPost**](ONDCNetworkParticipantOnboardingApi.md#lookupPost) | **POST** /lookup | 
[**subscribePost**](ONDCNetworkParticipantOnboardingApi.md#subscribePost) | **POST** /subscribe | 
[**subscriberUrlOnSubscribePost**](ONDCNetworkParticipantOnboardingApi.md#subscriberUrlOnSubscribePost) | **POST** /subscriber_url/on_subscribe | 

<a name="lookupPost"></a>
# **lookupPost**
> [InlineResponse2002] lookupPost(opts)



subscriber

### Example
```javascript
import {OndcRegistry_} from 'ondc_registry_';

let apiInstance = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi();
let opts = { 
  'body': new OndcRegistry_.LookupBody() // LookupBody | Onboard
};
apiInstance.lookupPost(opts, (error, data, response) => {
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
 **body** | [**LookupBody**](LookupBody.md)| Onboard | [optional] 

### Return type

[**[InlineResponse2002]**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscribePost"></a>
# **subscribePost**
> InlineResponse200 subscribePost(opts)



subscriber

### Example
```javascript
import {OndcRegistry_} from 'ondc_registry_';

let apiInstance = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi();
let opts = { 
  'body': new OndcRegistry_.SubscribeBody() // SubscribeBody | Onboard
};
apiInstance.subscribePost(opts, (error, data, response) => {
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
 **body** | [**SubscribeBody**](SubscribeBody.md)| Onboard | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="subscriberUrlOnSubscribePost"></a>
# **subscriberUrlOnSubscribePost**
> InlineResponse2001 subscriberUrlOnSubscribePost(opts)



to be hosted by subscriber

### Example
```javascript
import {OndcRegistry_} from 'ondc_registry_';

let apiInstance = new OndcRegistry_.ONDCNetworkParticipantOnboardingApi();
let opts = { 
  'body': new OndcRegistry_.SubscriberUrlOnSubscribeBody() // SubscriberUrlOnSubscribeBody | Onboard
};
apiInstance.subscriberUrlOnSubscribePost(opts, (error, data, response) => {
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
 **body** | [**SubscriberUrlOnSubscribeBody**](SubscriberUrlOnSubscribeBody.md)| Onboard | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


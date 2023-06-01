# ondc_registry_

OndcRegistry_ - JavaScript client for ondc_registry_
ONDC Participant Management API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.5
- Package version: 2.0.5
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install ondc_registry_ --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OndcRegistry_ = require('ondc_registry_');

var api = new OndcRegistry_.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi()
var opts = { 
  'body': new OndcRegistry_.VlookupBody() // {VlookupBody} vlookup
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.vlookupPost(opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to *https://virtserver.swaggerhub.com/ONDC/ONDC-Registry-Onboarding/2.0.5*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OndcRegistry_.KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi* | [**vlookupPost**](docs/KeyRotationOfNetworkParticipantBuyerAppOrSellerAppApi.md#vlookupPost) | **POST** /vlookup | Get public keys of network participants
*OndcRegistry_.ONDCNetworkParticipantOnboardingApi* | [**lookupPost**](docs/ONDCNetworkParticipantOnboardingApi.md#lookupPost) | **POST** /lookup | 
*OndcRegistry_.ONDCNetworkParticipantOnboardingApi* | [**subscribePost**](docs/ONDCNetworkParticipantOnboardingApi.md#subscribePost) | **POST** /subscribe | 
*OndcRegistry_.ONDCNetworkParticipantOnboardingApi* | [**subscriberUrlOnSubscribePost**](docs/ONDCNetworkParticipantOnboardingApi.md#subscriberUrlOnSubscribePost) | **POST** /subscriber_url/on_subscribe | 

## Documentation for Models

 - [OndcRegistry_.Ack](docs/Ack.md)
 - [OndcRegistry_.City](docs/City.md)
 - [OndcRegistry_.Context](docs/Context.md)
 - [OndcRegistry_.Entity](docs/Entity.md)
 - [OndcRegistry_.EntityGst](docs/EntityGst.md)
 - [OndcRegistry_.EntityPan](docs/EntityPan.md)
 - [OndcRegistry_.Error](docs/Error.md)
 - [OndcRegistry_.InlineResponse200](docs/InlineResponse200.md)
 - [OndcRegistry_.InlineResponse2001](docs/InlineResponse2001.md)
 - [OndcRegistry_.InlineResponse2002](docs/InlineResponse2002.md)
 - [OndcRegistry_.InlineResponse2003](docs/InlineResponse2003.md)
 - [OndcRegistry_.InlineResponse200Message](docs/InlineResponse200Message.md)
 - [OndcRegistry_.KeyPair](docs/KeyPair.md)
 - [OndcRegistry_.LookupBody](docs/LookupBody.md)
 - [OndcRegistry_.NetworkParticipant](docs/NetworkParticipant.md)
 - [OndcRegistry_.SellerOnRecord](docs/SellerOnRecord.md)
 - [OndcRegistry_.SubscribeBody](docs/SubscribeBody.md)
 - [OndcRegistry_.SubscribeContext](docs/SubscribeContext.md)
 - [OndcRegistry_.SubscribeMessage](docs/SubscribeMessage.md)
 - [OndcRegistry_.SubscriberUrlOnSubscribeBody](docs/SubscriberUrlOnSubscribeBody.md)
 - [OndcRegistry_.VlookupBody](docs/VlookupBody.md)
 - [OndcRegistry_.VlookupKeyPair](docs/VlookupKeyPair.md)
 - [OndcRegistry_.VlookupNetworkParticipant](docs/VlookupNetworkParticipant.md)
 - [OndcRegistry_.VlookupSearchParameters](docs/VlookupSearchParameters.md)
 - [OndcRegistry_.VlookupSellerOnRecord](docs/VlookupSellerOnRecord.md)

## Documentation for Authorization

 All endpoints do not require authorization.

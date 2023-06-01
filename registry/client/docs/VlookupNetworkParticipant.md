# OndcRegistry_.VlookupNetworkParticipant

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriberUrl** | **String** | URL to be verified and configured for network participation.The given URL should have valid SSL Certificate that should be able to pass OCSP check. https://certificatetools.com/ocsp-checker can be used to check prior to submitting the request. | [optional] 
**domain** | **String** | Industry domain of the subscriber. | [optional] 
**type** | **String** | buyerApp or sellerApp | [optional] 
**msn** | **Boolean** | true or false | [optional] 
**cityCode** | **String** | City code | [optional] 
**sellerOnRecord** | [**[VlookupSellerOnRecord]**](VlookupSellerOnRecord.md) |  | [optional] 

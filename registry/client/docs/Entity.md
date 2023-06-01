# OndcRegistry_.Entity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gst** | [**EntityGst**](EntityGst.md) |  | [optional] 
**pan** | [**EntityPan**](EntityPan.md) |  | [optional] 
**nameOfAuthorisedSignatory** | **String** |  | [optional] 
**addressOfAuthorisedSignatory** | **String** |  | [optional] 
**emailId** | **String** |  | [optional] 
**mobileNo** | **String** |  | [optional] 
**country** | **String** | Country code as per ISO 3166-1 and ISO 3166-2 format | [optional] 
**subscriberId** | **String** |  | [optional] 
**callbackUrl** | **String** | it should be relative to subscriber_id mentioned domain. In below example with subscriber _id as abc.com, regsitry will call https://abc.com/ondc/onboarding/on_subscribe | [optional] 
**keyPair** | [**KeyPair**](KeyPair.md) |  | [optional] 

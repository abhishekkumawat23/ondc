# OndcGateway.Provider

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**ProviderId**](ProviderId.md) |  | 
**descriptor** | [**Descriptor**](Descriptor.md) |  | 
**categoryId** | **String** | Category Id of the provider | [optional] 
**ondcorgfssaiLicenseNo** | **String** | FSSAI license no. Mandatory for category_id \&quot;F&amp;B\&quot; | 
**time** | [**Time**](Time.md) |  | [optional] 
**categories** | [**[Category]**](Category.md) |  | [optional] 
**fulfillments** | [**[Fulfillment]**](Fulfillment.md) |  | [optional] 
**payments** | [**[Payment]**](Payment.md) |  | [optional] 
**locations** | **[AllOfProviderLocationsItems]** |  | [optional] 
**offers** | [**[Offer]**](Offer.md) |  | [optional] 
**items** | [**[Item]**](Item.md) |  | [optional] 
**ttl** | **String** | Validity of catalog in ISO8601 durations format after which it has to be refreshed e.g. &#x27;P7D&#x27; indicates validity of 7 days; value of 0 indicates catalog is not cacheable | 
**exp** | **Date** | Time after which catalog has to be refreshed | [optional] 
**rateable** | [**Rateable**](Rateable.md) |  | [optional] 
**tags** | [**Tags**](Tags.md) |  | [optional] 

# OndcProtocolApiForRetailGroceryFb.Item

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | This is the most unique identifier of a service item. An example of an Item ID could be the SKU of a product. | 
**parentItemId** | [**Itempropertiesid**](Itempropertiesid.md) |  | [optional] 
**descriptor** | [**Descriptor**](Descriptor.md) |  | 
**price** | [**Price**](Price.md) |  | 
**quantity** | [**ItemQuantity**](ItemQuantity.md) |  | [optional] 
**categoryId** | [**Categorypropertiesid**](Categorypropertiesid.md) |  | 
**fulfillmentId** | [**Fulfillmentpropertiesid**](Fulfillmentpropertiesid.md) |  | 
**rating** | [**Ratingpropertiesvalue**](Ratingpropertiesvalue.md) |  | [optional] 
**locationId** | [**Locationpropertiesid**](Locationpropertiesid.md) |  | 
**time** | [**Time**](Time.md) |  | [optional] 
**rateable** | [**Rateable**](Rateable.md) |  | [optional] 
**matched** | **Boolean** |  | 
**related** | **Boolean** |  | [optional] 
**recommended** | **Boolean** |  | [optional] 
**ondcorgreturnable** | **Boolean** | whether the item is returnable | 
**ondcorgsellerPickupReturn** | **Boolean** | in case of return, whether the item should be picked up by seller | 
**ondcorgreturnWindow** | **String** | return window for the item in ISO8601 durations format e.g. &#x27;PT24H&#x27; indicates 24 hour return window. Mandatory if \&quot;@ondc/org/returnable\&quot; is \&quot;true\&quot; | 
**ondcorgcancellable** | **Boolean** | whether the item is cancellable | 
**ondcorgtimeToShip** | **String** | time from order confirmation by which item ready to ship in ISO8601 durations format (e.g. &#x27;PT30M&#x27; indicates item ready to ship in 30 mins). Mandatory for category_id \&quot;F&amp;B\&quot; | 
**ondcorgavailableOnCod** | **Boolean** | whether the catalog item is available on COD | 
**ondcorgcontactDetailsConsumerCare** | **String** | contact details for consumer care | 
**ondcorgstatutoryReqsPackagedCommodities** | [**ItemOndcorgstatutoryReqsPackagedCommodities**](ItemOndcorgstatutoryReqsPackagedCommodities.md) |  | 
**ondcorgstatutoryReqsPrepackagedFood** | [**ItemOndcorgstatutoryReqsPrepackagedFood**](ItemOndcorgstatutoryReqsPrepackagedFood.md) |  | 
**ondcorgmandatoryReqsVeggiesFruits** | **Object** | mandatory for category_id \&quot;Fruits and Vegetables\&quot; required attributes include the following - net_quantity | 
**tags** | [**Tags**](Tags.md) |  | [optional] 

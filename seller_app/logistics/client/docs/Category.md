# OndcProtocolApiForLogistics.Category

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique id of the category | [optional] 
**parentCategoryId** | **String** | Unique id of the parent category - Express delivery - Standard Delivery | [optional] 
**descriptor** | [**Descriptor**](Descriptor.md) |  | [optional] 
**time** | [**Time**](Time.md) |  | [optional] 
**tags** | [**Tags**](Tags.md) |  | [optional] 

<a name="IdEnum"></a>
## Enum: IdEnum

* `expressDelivery` (value: `"Express Delivery"`)
* `standardDelivery` (value: `"Standard Delivery"`)
* `immediateDelivery` (value: `"Immediate Delivery"`)
* `sameDayDelivery` (value: `"Same Day Delivery"`)
* `nextDayDelivery` (value: `"Next Day Delivery"`)


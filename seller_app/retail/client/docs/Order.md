# OndcProtocolApiForRetailGroceryFb.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for Order across the network, Will be created by buyer app in confirm API | [optional] 
**state** | **String** |  | [optional] 
**provider** | [**OrderProvider**](OrderProvider.md) |  | [optional] 
**items** | [**[OrderItems]**](OrderItems.md) |  | [optional] 
**addOns** | [**[OrderAddOns]**](OrderAddOns.md) |  | [optional] 
**offers** | [**[OrderOffers]**](OrderOffers.md) |  | [optional] 
**documents** | [**[Document]**](Document.md) |  | [optional] 
**billing** | [**Billing**](Billing.md) |  | [optional] 
**fulfillment** | [**Fulfillment**](Fulfillment.md) |  | [optional] 
**quote** | [**Quotation**](Quotation.md) |  | [optional] 
**payment** | [**Payment**](Payment.md) |  | [optional] 
**ondcorgcancellation** | [**Cancellation**](Cancellation.md) |  | [optional] 
**ondcorglinkedOrders** | [**[OrderOndcorglinkedOrders]**](OrderOndcorglinkedOrders.md) | payload for cascaded orders e.g. order for logistics services linked to a retail order | [optional] 
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 

<a name="StateEnum"></a>
## Enum: StateEnum

* `created` (value: `"Created"`)
* `shipped` (value: `"Shipped"`)
* `delivered` (value: `"Delivered"`)
* `updated` (value: `"Updated"`)
* `returned` (value: `"Returned"`)
* `replaced` (value: `"Replaced"`)
* `cancelled` (value: `"Cancelled"`)


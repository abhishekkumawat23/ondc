# OndcProtocolApiForLogistics.Order

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for Order across network, will be created by buyer app in confirm API | [optional] 
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
**createdAt** | **Date** |  | [optional] 
**updatedAt** | **Date** |  | [optional] 
**ondcorgcreatedBy** | **String** | order created by | [optional] 
**ondcorgcancellation** | [**Cancellation**](Cancellation.md) |  | [optional] 
**ondcorglinkedOrder** | [**OrderOndcorglinkedOrder**](OrderOndcorglinkedOrder.md) |  | [optional] 

<a name="StateEnum"></a>
## Enum: StateEnum

* `active` (value: `"Active"`)
* `updated` (value: `"Updated"`)
* `completed` (value: `"Completed"`)
* `cancelled` (value: `"Cancelled"`)
* `shipped` (value: `"Shipped"`)
* `rTOInit` (value: `"RTO_Init"`)
* `rTODelivered` (value: `"RTO_Delivered"`)


<a name="OndcorgcreatedByEnum"></a>
## Enum: OndcorgcreatedByEnum

* `buyerApp` (value: `"buyer-app"`)
* `sellerApp` (value: `"seller-app"`)


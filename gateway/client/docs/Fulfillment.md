# OndcGateway.Fulfillment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**FulfillmentId**](FulfillmentId.md) |  | 
**type** | **String** | This describes the type of fulfillment (\&quot;Pickup\&quot; - Buyer picks up from store by themselves or through their logistics provider; \&quot;Delivery\&quot; - seller delivers to buyer) | 
**ondcorgcategory** | **String** | Fulfillment Category | [optional] 
**ondcorgTAT** | **String** | fulfillment turnaround time in ISO8601 durations format e.g. &#x27;PT24H&#x27; indicates 24 hour TAT | [optional] 
**providerId** | [**Providerpropertiesid**](Providerpropertiesid.md) |  | [optional] 
**ondcorgproviderName** | **String** |  | [optional] 
**state** | [**State**](State.md) |  | [optional] 
**tracking** | **Boolean** | Indicates whether the fulfillment allows tracking | [optional] [default to false]
**customer** | [**FulfillmentCustomer**](FulfillmentCustomer.md) |  | [optional] 
**agent** | [**Agent**](Agent.md) |  | [optional] 
**person** | [**Person**](Person.md) |  | [optional] 
**contact** | [**Contact**](Contact.md) |  | [optional] 
**vehicle** | [**Vehicle**](Vehicle.md) |  | [optional] 
**start** | [**FulfillmentStart**](FulfillmentStart.md) |  | [optional] 
**end** | [**FulfillmentEnd**](FulfillmentEnd.md) |  | [optional] 
**rateable** | [**Rateable**](Rateable.md) |  | [optional] 
**tags** | [**Tags**](Tags.md) |  | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `delivery` (value: `"Delivery"`)
* `pickup` (value: `"Pickup"`)
* `deliveryAndPickup` (value: `"Delivery and Pickup"`)
* `reverseQC` (value: `"Reverse QC"`)


# OndcProtocolApiForLogistics.Fulfillment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique reference ID to the fulfillment of an order | [optional] 
**type** | **String** | This describes the type of fulfillment | [optional] 
**ondcorgawbNo** | **String** |  | [optional] 
**ondcorgewaybillno** | **String** |  | [optional] 
**ondcorgebnexpirydate** | **Date** |  | [optional] 
**providerId** | [**Providerpropertiesid**](Providerpropertiesid.md) |  | [optional] 
**rating** | [**Ratingpropertiesvalue**](Ratingpropertiesvalue.md) |  | [optional] 
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

* `coD` (value: `"CoD"`)
* `prepaid` (value: `"Prepaid"`)
* `RTO` (value: `"RTO"`)
* `reverseQC` (value: `"Reverse QC"`)


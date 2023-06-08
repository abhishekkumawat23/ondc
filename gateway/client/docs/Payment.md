# OndcGateway.Payment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **String** | A payment uri to be called by the Buyer App. If empty, then the payment is to be done offline. The details of payment should be present in the params object. If &#x60;&#x60;&#x60;tl_method&#x60;&#x60;&#x60; &#x3D; http/get, then the payment details will be sent as url params. Two url param values, &#x60;&#x60;&#x60;$transaction_id&#x60;&#x60;&#x60; and &#x60;&#x60;&#x60;$amount&#x60;&#x60;&#x60; are mandatory. And example url would be : https://www.example.com/pay?txid&#x3D;$transaction_id&amp;amount&#x3D;$amount&amp;vpa&#x3D;upiid&amp;payee&#x3D;shopez&amp;billno&#x3D;1234 | [optional] 
**tlMethod** | **String** |  | [optional] 
**params** | [**PaymentParams**](PaymentParams.md) |  | [optional] 
**type** | **String** |  | [optional] 
**status** | **String** |  | [optional] 
**time** | [**Time**](Time.md) |  | [optional] 
**collectedBy** | **String** |  | [optional] 
**ondcorgcollectedByStatus** | **String** |  | [optional] 
**ondcorgbuyerAppFinderFeeType** | **String** |  | [optional] 
**ondcorgbuyerAppFinderFeeAmount** | [**DecimalValue**](DecimalValue.md) |  | [optional] 
**ondcorgwithholdingAmount** | [**DecimalValue**](DecimalValue.md) |  | [optional] 
**ondcorgwithholdingAmountStatus** | **String** |  | [optional] 
**ondcorgreturnWindow** | **String** | return window for withholding amount in ISO8601 durations format e.g. &#x27;PT24H&#x27; indicates 24 hour return window | [optional] 
**ondcorgreturnWindowStatus** | **String** |  | [optional] 
**ondcorgsettlementBasis** | **String** | In case of prepaid payment, whether settlement between counterparties should be on the basis of collection, shipment or delivery | [optional] 
**ondcorgsettlementBasisStatus** | **String** |  | [optional] 
**ondcorgsettlementWindow** | **String** | settlement window for the counterparty in ISO8601 durations format e.g. &#x27;PT48H&#x27; indicates 48 hour return window | [optional] 
**ondcorgsettlementWindowStatus** | **String** |  | [optional] 
**ondcorgsettlementDetails** | [**[PaymentOndcorgsettlementDetails]**](PaymentOndcorgsettlementDetails.md) |  | [optional] 

<a name="TlMethodEnum"></a>
## Enum: TlMethodEnum

* `httpget` (value: `"http/get"`)
* `httppost` (value: `"http/post"`)
* `payto` (value: `"payto"`)
* `upi` (value: `"upi"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `ON_ORDER` (value: `"ON-ORDER"`)
* `PRE_FULFILLMENT` (value: `"PRE-FULFILLMENT"`)
* `ON_FULFILLMENT` (value: `"ON-FULFILLMENT"`)
* `POST_FULFILLMENT` (value: `"POST-FULFILLMENT"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `PAID` (value: `"PAID"`)
* `NOT_PAID` (value: `"NOT-PAID"`)
* `PENDING` (value: `"PENDING"`)


<a name="CollectedByEnum"></a>
## Enum: CollectedByEnum

* `BAP` (value: `"BAP"`)
* `BPP` (value: `"BPP"`)


<a name="OndcorgcollectedByStatusEnum"></a>
## Enum: OndcorgcollectedByStatusEnum

* `assert` (value: `"Assert"`)
* `agree` (value: `"Agree"`)
* `disagree` (value: `"Disagree"`)
* `terminate` (value: `"Terminate"`)


<a name="OndcorgbuyerAppFinderFeeTypeEnum"></a>
## Enum: OndcorgbuyerAppFinderFeeTypeEnum

* `amount` (value: `"Amount"`)
* `percent` (value: `"Percent"`)


<a name="OndcorgwithholdingAmountStatusEnum"></a>
## Enum: OndcorgwithholdingAmountStatusEnum

* `assert` (value: `"Assert"`)
* `agree` (value: `"Agree"`)
* `disagree` (value: `"Disagree"`)
* `terminate` (value: `"Terminate"`)


<a name="OndcorgreturnWindowStatusEnum"></a>
## Enum: OndcorgreturnWindowStatusEnum

* `assert` (value: `"Assert"`)
* `agree` (value: `"Agree"`)
* `disagree` (value: `"Disagree"`)
* `terminate` (value: `"Terminate"`)


<a name="OndcorgsettlementBasisEnum"></a>
## Enum: OndcorgsettlementBasisEnum

* `collection` (value: `"Collection"`)
* `shipment` (value: `"Shipment"`)
* `delivery` (value: `"Delivery"`)


<a name="OndcorgsettlementBasisStatusEnum"></a>
## Enum: OndcorgsettlementBasisStatusEnum

* `assert` (value: `"Assert"`)
* `agree` (value: `"Agree"`)
* `disagree` (value: `"Disagree"`)
* `terminate` (value: `"Terminate"`)


<a name="OndcorgsettlementWindowStatusEnum"></a>
## Enum: OndcorgsettlementWindowStatusEnum

* `assert` (value: `"Assert"`)
* `agree` (value: `"Agree"`)
* `disagree` (value: `"Disagree"`)
* `terminate` (value: `"Terminate"`)


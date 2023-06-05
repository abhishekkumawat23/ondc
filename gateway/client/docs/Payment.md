# OndcProtocolCoreApi.Payment

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


<a name="CollectedByEnum"></a>
## Enum: CollectedByEnum

* `BAP` (value: `"BAP"`)
* `BPP` (value: `"BPP"`)


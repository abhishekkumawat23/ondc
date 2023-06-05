# OndcProtocolApiForLogistics.PaymentOndcorgcodsettlementDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementCounterparty** | **String** |  | [optional] 
**settlementType** | **String** |  | [optional] 
**settlementBankAccountNo** | **String** |  | [optional] 
**settlementIfscCode** | **String** |  | [optional] 
**upiAddress** | **String** | UPI payment address e.g. VPA | [optional] 
**settlementStatus** | **String** |  | [optional] 
**settlementReference** | **String** | Settlement transaction reference number | [optional] 
**settlementTimestamp** | **Date** | Settlement transaction timestamp | [optional] 

<a name="SettlementCounterpartyEnum"></a>
## Enum: SettlementCounterpartyEnum

* `buyerApp` (value: `"buyer-app"`)
* `sellerApp` (value: `"seller-app"`)


<a name="SettlementTypeEnum"></a>
## Enum: SettlementTypeEnum

* `neft` (value: `"neft"`)
* `rtgs` (value: `"rtgs"`)
* `upi` (value: `"upi"`)


<a name="SettlementStatusEnum"></a>
## Enum: SettlementStatusEnum

* `PAID` (value: `"PAID"`)
* `NOT_PAID` (value: `"NOT-PAID"`)


# OndcProtocolApiForRetailGroceryFb.PaymentOndcorgsettlementDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settlementCounterparty** | **String** |  | [optional] 
**settlementPhase** | **String** |  | [optional] 
**settlementType** | **String** |  | [optional] 
**settlementBankAccountNo** | **String** |  | [optional] 
**settlementIfscCode** | **String** |  | [optional] 
**upiAddress** | **String** | UPI payment address e.g. VPA | [optional] 
**bankName** | **String** | Bank name | [optional] 
**branchName** | **String** | Branch name | [optional] 
**beneficiaryAddress** | **String** | Beneficiary Address | [optional] 
**settlementStatus** | **String** |  | [optional] 
**settlementReference** | **String** | Settlement transaction reference number | [optional] 
**settlementTimestamp** | **Date** | Settlement transaction timestamp | [optional] 

<a name="SettlementCounterpartyEnum"></a>
## Enum: SettlementCounterpartyEnum

* `buyerApp` (value: `"buyer-app"`)
* `sellerApp` (value: `"seller-app"`)
* `logisticsProvider` (value: `"logistics-provider"`)


<a name="SettlementPhaseEnum"></a>
## Enum: SettlementPhaseEnum

* `saleAmount` (value: `"sale-amount"`)
* `withholdingAmount` (value: `"withholding-amount"`)


<a name="SettlementTypeEnum"></a>
## Enum: SettlementTypeEnum

* `neft` (value: `"neft"`)
* `rtgs` (value: `"rtgs"`)
* `upi` (value: `"upi"`)


<a name="SettlementStatusEnum"></a>
## Enum: SettlementStatusEnum

* `PAID` (value: `"PAID"`)
* `NOT_PAID` (value: `"NOT-PAID"`)


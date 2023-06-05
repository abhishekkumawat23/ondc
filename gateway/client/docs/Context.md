# OndcProtocolCoreApi.Context

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | [**Domain**](Domain.md) |  | 
**country** | [**Countrypropertiescode**](Countrypropertiescode.md) |  | 
**city** | [**Citypropertiescode**](Citypropertiescode.md) |  | 
**action** | **String** | Defines the ONDC API call. Any actions other than the enumerated actions are not supported by ONDC Protocol | 
**coreVersion** | **String** | Version of ONDC core API specification being used | 
**bapId** | **String** | Unique id of the Buyer App. By default it is the fully qualified domain name of the Buyer App | 
**bapUri** | **String** | URI of the Seller App for accepting callbacks. Must have the same domain name as the bap_id | 
**bppId** | **String** | Unique id of the Seller App. By default it is the fully qualified domain name of the Seller App | [optional] 
**bppUri** | **String** | URI of the Seller App. Must have the same domain name as the bap_id | [optional] 
**transactionId** | **String** | This is a unique value which persists across all API calls from search through confirm | 
**messageId** | **String** | This is a unique value which persists during a request / callback cycle | 
**timestamp** | **Date** | Time of request generation in RFC3339 format | 
**key** | **String** | The encryption public key of the sender | [optional] 
**ttl** | **String** | The duration in ISO8601 format after timestamp for which this message holds valid. | [optional] 

<a name="ActionEnum"></a>
## Enum: ActionEnum

* `search` (value: `"search"`)
* `select` (value: `"select"`)
* `init` (value: `"init"`)
* `confirm` (value: `"confirm"`)
* `update` (value: `"update"`)
* `status` (value: `"status"`)
* `track` (value: `"track"`)
* `cancel` (value: `"cancel"`)
* `rating` (value: `"rating"`)
* `support` (value: `"support"`)
* `onSearch` (value: `"on_search"`)
* `onSelect` (value: `"on_select"`)
* `onInit` (value: `"on_init"`)
* `onConfirm` (value: `"on_confirm"`)
* `onUpdate` (value: `"on_update"`)
* `onStatus` (value: `"on_status"`)
* `onTrack` (value: `"on_track"`)
* `onCancel` (value: `"on_cancel"`)
* `onRating` (value: `"on_rating"`)
* `onSupport` (value: `"on_support"`)


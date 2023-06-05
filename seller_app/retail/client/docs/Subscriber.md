# OndcProtocolApiForRetailGroceryFb.Subscriber

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscriberId** | **String** | Registered domain name of the subscriber. Must have a valid SSL certificate issued by a Certificate Authority of the operating region | [optional] 
**type** | **String** |  | [optional] 
**cbUrl** | **String** | Callback URL of the subscriber. The Registry will call this URL&#x27;s on_subscribe API to validate the subscriber\\&#x27;s credentials | [optional] 
**domain** | [**Domain**](Domain.md) |  | [optional] 
**city** | [**Citypropertiescode**](Citypropertiescode.md) |  | [optional] 
**country** | [**Countrypropertiescode**](Countrypropertiescode.md) |  | [optional] 
**signingPublicKey** | **String** | Signing Public key of the subscriber. &lt;br/&gt;&lt;br/&gt;Any subscriber platform (Buyer App, Seller App, Gateway) who wants to transact on the network must digitally sign the &#x60;&#x60;&#x60;requestBody&#x60;&#x60;&#x60; using the corresponding private key of this public key and send it in the transport layer header. In case of &#x60;&#x60;&#x60;HTTP&#x60;&#x60;&#x60; it is the &#x60;&#x60;&#x60;Authorization&#x60;&#x60;&#x60; header. &lt;br&gt;&lt;br/&gt;The &#x60;&#x60;&#x60;Authorization&#x60;&#x60;&#x60; will be used to validate the signature of a Buyer App or Seller App.&lt;br/&gt;&lt;br/&gt;Furthermore, if an API call is being proxied or multicast by a ONDC Gateway, the Gateway must use it\\&#x27;s signing key to digitally sign the &#x60;&#x60;&#x60;requestBody&#x60;&#x60;&#x60; using the corresponding private key of this public key and send it in the &#x60;&#x60;&#x60;X-Gateway-Authorization&#x60;&#x60;&#x60; header. | [optional] 
**encryptionPublicKey** | **String** | Encryption public key of the Buyer App. Any Seller App must encrypt the &#x60;&#x60;&#x60;requestBody.message&#x60;&#x60;&#x60; value of the &#x60;&#x60;&#x60;on_search&#x60;&#x60;&#x60; API using this public key. | [optional] 
**status** | **String** |  | [optional] 
**created** | **Date** | Timestamp when a subscriber was added to the registry with status &#x3D; INITIATED | [optional] 
**updated** | **Date** |  | [optional] 
**expires** | **Date** | Expiry timestamp in UTC derived from the &#x60;&#x60;&#x60;lease_time&#x60;&#x60;&#x60; of the subscriber | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `bap` (value: `"bap"`)
* `bpp` (value: `"bpp"`)
* `bg` (value: `"bg"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `INITIATED` (value: `"INITIATED"`)
* `UNDER_SUBSCRIPTION` (value: `"UNDER_SUBSCRIPTION"`)
* `SUBSCRIBED` (value: `"SUBSCRIBED"`)
* `INVALID_SSL` (value: `"INVALID_SSL"`)
* `UNSUBSCRIBED` (value: `"UNSUBSCRIBED"`)


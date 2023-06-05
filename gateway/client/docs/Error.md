# OndcProtocolCoreApi.Error

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** |  | 
**code** | **String** | ONDC specific error code. For full list of error codes, refer to docs/drafts/Error Codes.md of this repo | 
**path** | **String** | Path to json schema generating the error. Used only during json schema validation errors | [optional] 
**message** | **String** | Human readable message describing the error | [optional] 

<a name="TypeEnum"></a>
## Enum: TypeEnum

* `CONTEXT_ERROR` (value: `"CONTEXT-ERROR"`)
* `CORE_ERROR` (value: `"CORE-ERROR"`)
* `DOMAIN_ERROR` (value: `"DOMAIN-ERROR"`)
* `POLICY_ERROR` (value: `"POLICY-ERROR"`)
* `JSON_SCHEMA_ERROR` (value: `"JSON-SCHEMA-ERROR"`)


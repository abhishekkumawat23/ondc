# OndcProtocolApiForLogistics.FeedbackFormElement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | [optional] 
**parentId** | [**FeedbackFormElementpropertiesid**](FeedbackFormElementpropertiesid.md) |  | [optional] 
**question** | **String** | Specifies the question to which the answer options will be contained in the child FeedbackFormElements | [optional] 
**answer** | **String** | Specifies an answer option to which the question will be in the FeedbackFormElement specified in parent_id | [optional] 
**answerType** | **String** | Specifies how the answer option should be rendered. | [optional] 

<a name="AnswerTypeEnum"></a>
## Enum: AnswerTypeEnum

* `radio` (value: `"radio"`)
* `checkbox` (value: `"checkbox"`)
* `text` (value: `"text"`)


# OpenapiClient::CommentsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ys-office-me/harmony-for-job-tree-japan/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**comments_get**](CommentsApi.md#comments_get) | **GET** /comments | Return comments



## comments_get

> Array&lt;Comment&gt; comments_get(opts)

Return comments

Return comments on a post with postId={id}.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::CommentsApi.new
opts = {
  post_id: 'post_id_example' # String | The postId which we want the comments
}

begin
  #Return comments
  result = api_instance.comments_get(opts)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling CommentsApi->comments_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post_id** | **String**| The postId which we want the comments | [optional] 

### Return type

[**Array&lt;Comment&gt;**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


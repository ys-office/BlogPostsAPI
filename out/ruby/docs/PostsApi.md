# OpenapiClient::PostsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ys-office-me/harmony-for-job-tree-japan/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**posts_get**](PostsApi.md#posts_get) | **GET** /posts | Return all the posts
[**posts_id_delete**](PostsApi.md#posts_id_delete) | **DELETE** /posts/{id} | Deletes a post
[**posts_id_get**](PostsApi.md#posts_id_get) | **GET** /posts/{id} | Return a post
[**posts_id_patch**](PostsApi.md#posts_id_patch) | **PATCH** /posts/{id} | Update a post
[**posts_id_put**](PostsApi.md#posts_id_put) | **PUT** /posts/{id} | Update a post
[**posts_post**](PostsApi.md#posts_post) | **POST** /posts | 



## posts_get

> Array&lt;Post&gt; posts_get

Return all the posts

Return all the posts that are in our blog.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new

begin
  #Return all the posts
  result = api_instance.posts_get
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_get: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;Post&gt;**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## posts_id_delete

> posts_id_delete(id)

Deletes a post

Deletes the post with id.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new
id = 'id_example' # String | The postId requested by user.

begin
  #Deletes a post
  api_instance.posts_id_delete(id)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_id_delete: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## posts_id_get

> Post posts_id_get(id)

Return a post

Return a post with postId equals to id.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new
id = 'id_example' # String | The postId requested by user.

begin
  #Return a post
  result = api_instance.posts_id_get(id)
  p result
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_id_get: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## posts_id_patch

> posts_id_patch(id, patch_post)

Update a post

Update the post with id partially.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new
id = 'id_example' # String | The postId requested by user.
patch_post = OpenapiClient::PatchPost.new # PatchPost | 

begin
  #Update a post
  api_instance.posts_id_patch(id, patch_post)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_id_patch: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 
 **patch_post** | [**PatchPost**](PatchPost.md)|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## posts_id_put

> posts_id_put(id, post)

Update a post

A  complete replacement of a post with id.

### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new
id = 'id_example' # String | The postId requested by user.
post = OpenapiClient::Post.new # Post | 

begin
  #Update a post
  api_instance.posts_id_put(id, post)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_id_put: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 
 **post** | [**Post**](Post.md)|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## posts_post

> posts_post(post)



### Example

```ruby
# load the gem
require 'openapi_client'

api_instance = OpenapiClient::PostsApi.new
post = OpenapiClient::Post.new # Post | 

begin
  api_instance.posts_post(post)
rescue OpenapiClient::ApiError => e
  puts "Exception when calling PostsApi->posts_post: #{e}"
end
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post** | [**Post**](Post.md)|  | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


# BlogPostsApi.PostsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ys-office-me/harmony-for-job-tree-japan/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postsGet**](PostsApi.md#postsGet) | **GET** /posts | Return all the posts
[**postsIdDelete**](PostsApi.md#postsIdDelete) | **DELETE** /posts/{id} | Deletes a post
[**postsIdGet**](PostsApi.md#postsIdGet) | **GET** /posts/{id} | Return a post
[**postsIdPatch**](PostsApi.md#postsIdPatch) | **PATCH** /posts/{id} | Update a post
[**postsIdPut**](PostsApi.md#postsIdPut) | **PUT** /posts/{id} | Update a post
[**postsPost**](PostsApi.md#postsPost) | **POST** /posts | 



## postsGet

> [Post] postsGet()

Return all the posts

Return all the posts that are in our blog.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
apiInstance.postsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postsIdDelete

> postsIdDelete(id)

Deletes a post

Deletes the post with id.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
let id = "id_example"; // String | The postId requested by user.
apiInstance.postsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postsIdGet

> Post postsIdGet(id)

Return a post

Return a post with postId equals to id.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
let id = "id_example"; // String | The postId requested by user.
apiInstance.postsIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## postsIdPatch

> postsIdPatch(id, patchPost)

Update a post

Update the post with id partially.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
let id = "id_example"; // String | The postId requested by user.
let patchPost = new BlogPostsApi.PatchPost(); // PatchPost | 
apiInstance.postsIdPatch(id, patchPost, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 
 **patchPost** | [**PatchPost**](PatchPost.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postsIdPut

> postsIdPut(id, post)

Update a post

A  complete replacement of a post with id.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
let id = "id_example"; // String | The postId requested by user.
let post = new BlogPostsApi.Post(); // Post | 
apiInstance.postsIdPut(id, post, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The postId requested by user. | 
 **post** | [**Post**](Post.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## postsPost

> postsPost(post)



### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.PostsApi();
let post = new BlogPostsApi.Post(); // Post | 
apiInstance.postsPost(post, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **post** | [**Post**](Post.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


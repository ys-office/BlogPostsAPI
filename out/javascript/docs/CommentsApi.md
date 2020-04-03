# BlogPostsApi.CommentsApi

All URIs are relative to *https://virtserver.swaggerhub.com/ys-office-me/harmony-for-job-tree-japan/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**commentsGet**](CommentsApi.md#commentsGet) | **GET** /comments | Return comments



## commentsGet

> [Comment] commentsGet(opts)

Return comments

Return comments on a post with postId&#x3D;{id}.

### Example

```javascript
import BlogPostsApi from 'blog_posts_api';

let apiInstance = new BlogPostsApi.CommentsApi();
let opts = {
  'postId': "postId_example" // String | The postId which we want the comments
};
apiInstance.commentsGet(opts, (error, data, response) => {
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
 **postId** | **String**| The postId which we want the comments | [optional] 

### Return type

[**[Comment]**](Comment.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


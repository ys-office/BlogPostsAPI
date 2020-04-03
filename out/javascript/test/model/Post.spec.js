/**
 * Blog Posts API
 * This is an example API for blog posts using OpenApi Specification. --- Using this API you can retrieve blog posts, comments on each blog post and delete or update the posts. 
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: amirm.lavasani@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.BlogPostsApi);
  }
}(this, function(expect, BlogPostsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new BlogPostsApi.Post();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Post', function() {
    it('should create an instance of Post', function() {
      // uncomment below and update the code to test Post
      //var instane = new BlogPostsApi.Post();
      //expect(instance).to.be.a(BlogPostsApi.Post);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new BlogPostsApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new BlogPostsApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new BlogPostsApi.Post();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new BlogPostsApi.Post();
      //expect(instance).to.be();
    });

  });

}));

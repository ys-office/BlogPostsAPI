=begin
#Blog Posts API

#This is an example API for blog posts using OpenApi Specification. --- Using this API you can retrieve blog posts, comments on each blog post and delete or update the posts. 

The version of the OpenAPI document: 1.0.0
Contact: amirm.lavasani@gmail.com
Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.3.1-SNAPSHOT

=end

require 'spec_helper'
require 'json'

# Unit tests for OpenapiClient::CommentsApi
# Automatically generated by openapi-generator (https://openapi-generator.tech)
# Please update as you see appropriate
describe 'CommentsApi' do
  before do
    # run before each test
    @api_instance = OpenapiClient::CommentsApi.new
  end

  after do
    # run after each test
  end

  describe 'test an instance of CommentsApi' do
    it 'should create an instance of CommentsApi' do
      expect(@api_instance).to be_instance_of(OpenapiClient::CommentsApi)
    end
  end

  # unit tests for comments_get
  # Return comments
  # Return comments on a post with postId&#x3D;{id}.
  # @param [Hash] opts the optional parameters
  # @option opts [String] :post_id The postId which we want the comments
  # @return [Array<Comment>]
  describe 'comments_get test' do
    it 'should work' do
      # assertion here. ref: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers
    end
  end

end
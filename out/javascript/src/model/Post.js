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

import ApiClient from '../ApiClient';

/**
 * The Post model module.
 * @module model/Post
 * @version 1.0.0
 */
class Post {
    /**
     * Constructs a new <code>Post</code>.
     * @alias module:model/Post
     * @param id {String} The post id.
     * @param userId {String} The post userId.
     * @param title {String} The title of the post
     * @param body {String} The body content of the post
     */
    constructor(id, userId, title, body) { 
        
        Post.initialize(this, id, userId, title, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, userId, title, body) { 
        obj['id'] = id;
        obj['userId'] = userId;
        obj['title'] = title;
        obj['body'] = body;
    }

    /**
     * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Post} obj Optional instance to populate.
     * @return {module:model/Post} The populated <code>Post</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Post();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The post id.
 * @member {String} id
 */
Post.prototype['id'] = undefined;

/**
 * The post userId.
 * @member {String} userId
 */
Post.prototype['userId'] = undefined;

/**
 * The title of the post
 * @member {String} title
 */
Post.prototype['title'] = undefined;

/**
 * The body content of the post
 * @member {String} body
 */
Post.prototype['body'] = undefined;






export default Post;

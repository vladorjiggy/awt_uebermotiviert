const Post = require('../models/Post').Post
const Category = require('../models/Category').Category

/**
 * 
 * Datenbankzugriff für das beziehen aller Posts
 */
exports.getPosts = function (callback) {
    let query = Post.find()
        .populate('categories', '-posts')
        .sort('-createdAt')
    query.exec((err, posts) => {
        if (err) {
            return callback(500, err, null)
        }
        else {
            return callback(200, null, posts)
        }
    })
}

/**
 * 
 * Datenbankzugriff für das beziehen eines bestimmten Posts
 */
exports.findPostById = function (id, callback) {
    if (!id) {
        return callback(400, 'Id not provided', null)
    }
    else {
        let query = Post.findOne({ _id: id })
            .populate('categories', '-posts')
        query.exec((err, post) => {
            if (err) {
                return callback(404, "Post not found", null)
            }
            else {
                if (post) {
                    callback(200, null, post)
                }
            }
        })
    }
}

/**
 * 
 * Datenbankzugriff für das beziehen eines bestimmten Posts anhand eines Suchparameters
 */

exports.searchPosts = function (searchquery, callback) {
    if (!searchquery) {
        return callback(400, 'Id not provided', null)
    }
    else {
        let regex = searchquery;
        var queryOptions = {
            $or: [{
                title: {
                    '$regex': regex,
                    '$options': 'i'
                }
            }, {
                content: {
                    '$regex': regex,
                    '$options': 'i'
                }
            }]
        }
        let query = Post.find(queryOptions)
            .populate('categories', '-posts')
            .sort('-createdAt')
        query.exec((err, post) => {
            if (err) {
                return callback(404, "Post not found", null)
            }
            else {
                if (post) {
                    callback(200, null, post)
                }
            }
        })
    }
}

/**
 * 
 * Datenbankzugriff für das updaten eines bestimmten Posts
 */

exports.updatePost = function (id, data, callback) {
    if (!id) {
        return callback(400, 'No ID', null)
    }
    else {
        if (!data) {
            return callback(400, 'No Data', null)
        }
        else {
            let query = Post.findOneAndUpdate({ _id: id }, data, {
                new: true
            })
            query.exec((err, post) => {
                if (err) {
                    return callback(500, "cannot update Post: " + err, null)
                }
                else {
                    return callback(200, null, post)
                }
            })
        }
    }
}

/**
 * 
 * Datenbankzugriff für das erstellen eines bestimmten Posts
 */

exports.createPost = function (data, callback) {
    if (!data) {
        return callback(400, 'no Data', null)
    }
    else {
        Post.find({}, (err, posts) => {
            let postId = posts.length + 1
            Post.findOne({ title: data.title }, function (err, user) {
                if (user) {
                    return callback(400, 'Post with this Title already exists', null, null)
                }
                else {
                    let newPost = new Post()
                    newPost._id = postId
                    newPost.title = data.title
                    newPost.content = data.content
                    if (data.post_image) {
                        newPost.post_image = data.post_image
                    }

                    newPost.categories = data.categories
                    newPost.save(err => {
                        if (err) {
                            callback(500, "Could not save Post: " + err, null)
                        }
                        else {
                            data.categories.forEach(cat => {
                                let categoryRef = Category.findOne({ _id: cat })
                                categoryRef.exec((err, category) => {
                                    category.posts.push(newPost._id)
                                    category.save()

                                })
                            })
                            callback(201, null, newPost)

                        }
                    })
                }
            })
        })

    }
}

/**
 * 
 * Datenbankzugriff für das löschen eines bestimmten Posts
 */

exports.deletePost = function (id, callback) {
    if (id) {
        Post.findByIdAndRemove(id, function (err, docs) {
            if (err) {
                callback(404, 'Post not found', null)
            }
            else {
                callback(200, null, 'Post removed')
            }
        });
    }
}
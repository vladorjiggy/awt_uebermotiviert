const Post = require('../models/Post').Post
const Category = require('../models/Category').Category
exports.getPosts = function (callback) {
    Post.find((err, posts) => {
        if (err) {
            console.log("Fehler bei Suche: " + err)
            return callback(500, err, null)
        }
        else {
            return callback(200, null, posts)
        }
    })
}
exports.findPostById = function (id, callback) {
    if (!id) {
        return callback(400, 'Id not provided', null)
    }
    else {
        let query = Post.findOne({ _id: id })
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
                console.log(post)
                if (err) {
                    return callback(500, "cannot update Post: " +err, null)
                }
                else {
                    return callback(200, null, post)
                }
            })
        }
    }
}

exports.createPost = function (data, callback) {
    if (!data) {
        return callback(400, 'no Data', null)
    }
    else {
        Post.findOne({ title: data.title }, function (err, user) {
            if (user) {
                return callback(400, 'Post with this Title already exists', null, null)
            }
            else {
                let newPost = new Post()
                newPost.title = data.title
                newPost.content = data.content
                newPost.categories = data.categories
                newPost.save(err => {
                    if (err) {
                        console.log("Could not save Post", err)
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
    }
}

exports.deletePost = function (id, callback) {
    if (id) {
        Post.findByIdAndRemove(id, function (err, docs) {
            if (err) {
                console.log(err)
                callback(404, 'Post not found', null)
            }
            else {
                console.log("Removed Post : ", docs)
                callback(200, null, 'Post removed')
            }
        });
    }
}
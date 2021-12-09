let postservice = require('../services/posts')

exports.getPosts = function(req, res){
    postservice.getPosts((status, err, posts) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (posts) {
                res.status(status).json({ posts: posts })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

exports.getSinglePost = function(req, res){
    let id = req.params.id
    postservice.findPostById(id, (status, err, post) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (post) {
                res.status(status).json({ post: post })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

exports.updatePost = function(req, res){
    let id = req.params.id
    let data = req.body
    postservice.updatePost(id, data, (status, err, post) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (post) {
                res.status(status).json({ post: post })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

exports.createPost = function(req, res){
    let data = req.body
    postservice.createPost(data, (status, err, post) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (post) {
                res.status(status).json({ post: post })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

exports.deletePost = function(req, res){
    let id = req.params.id
    postservice.deletePost(id, (status, err, post) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (post) {
                res.status(status).json({ post: post })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

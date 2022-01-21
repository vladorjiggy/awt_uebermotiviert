let postservice = require('../services/posts')

/**
 * 
 * Bezieht alle Posts
 */

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

/**
 * 
 * Bezieht einen bestimmten Post
 */
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

/**
 * 
 * Bezieht einen bestimmten Post anhand eines Suchparameters
 */

exports.searchPosts = function(req, res){
    let searchquery = req.body.searchquery
    postservice.searchPosts(searchquery, (status, err, posts) => {
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
/**
 * 
 * Updatet einen bestimmten Post
 */
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

/**
 * 
 * Erstellt einen Post anhand der mitgeschickten Daten
 */

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

/**
 * 
 *Löscht einen bestimmten Post
 */

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

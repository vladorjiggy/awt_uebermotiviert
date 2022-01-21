let mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    content: String,
    post_image: String,
    categories: [{
        type: Number,
        ref: 'Category'
    }],
    created: {type: Date, default: Date.now()},
}, {timestamps: true})
const Post = mongoose.model('Post', PostSchema)
module.exports = {
    Post : Post
};
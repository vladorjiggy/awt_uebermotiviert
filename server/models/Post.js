let mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    post_image: String,
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }],
    created: {type: Date, default: Date.now()},
}, {timestamps: true})
const Post = mongoose.model('Post', PostSchema)
module.exports = {
    Post : Post
};
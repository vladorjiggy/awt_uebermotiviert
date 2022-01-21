let mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    _id: Number,
    name: String,
    posts: [{ type: Number, ref: 'Post' }],
}, {timestamps: true})
const Category = mongoose.model('Category', CategorySchema)
module.exports = {
    Category : Category
};
let mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    name: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
}, {timestamps: true})
const Category = mongoose.model('Category', CategorySchema)
module.exports = {
    Category : Category
};
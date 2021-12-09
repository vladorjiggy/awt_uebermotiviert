const Category = require('../models/Category').Category

exports.getCategories = function (callback){
    Category.find((err, categories) => {
        if(err){
            console.log("Fehler bei Suche: " + err)
            return callback(500, err, null)
        }
        else{
            return callback(200, null, categories)
        }
    }).select('-posts')
}

exports.getCategoryPosts = function (id, callback){
    let query = Category.findOne({_id: id})
    .populate('posts', '-categories')
        query.exec((err, category) => {
            if(err){
                return callback(404, "Category not found", null)
            }
            else{
                if(category){
                    callback(200, null, category)
                }
            }
        })
}
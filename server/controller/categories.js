let categoryservice = require('../services/categories')

/**
 * 
 * Alle Kategorien beziehen
 */

exports.getCategories = function(req, res){
    categoryservice.getCategories((status, err, categories) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (categories) {
                res.status(status).json({ categories: categories })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

/**
 * 
 * Alle Posts einer bestimmten Kategorie beziehen
 */

exports.getCategoryPosts = function(req, res){
    let id = req.params.id
    categoryservice.getCategoryPosts(id, (status, err, category) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (category) {
                res.status(status).json({ category: category })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}
let express = require('express')
let router = express.Router()
let categoriesController =  require('../controller/categories')

/**
 * Routen für Kategorien
 */

router.get("/get", categoriesController.getCategories)
router.get("/get/:id", categoriesController.getCategoryPosts)

module.exports = router
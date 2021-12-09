let express = require('express')
let router = express.Router()

//let middleware = require("../middleware/Middleware")

let categoriesController =  require('../controller/categories')

router.get("/get", categoriesController.getCategories)

router.get("/get/:id", categoriesController.getCategoryPosts)
/*
router.post("/create", categoriesController.create)
router.put("/update/:id", categoriesController.update)
router.delete("/delete/:id", categoriesController.delete)
*/
module.exports = router
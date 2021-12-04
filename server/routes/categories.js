let express = require('express')
let router = express.Router()

//let middleware = require("../middleware/Middleware")

let categoriesController =  require('../controller/categories')
/*
router.get("/getAll", categoriesController.getAll)
router.get("/get/:id", categoriesController.get)
router.post("/create", categoriesController.create)
router.put("/update/:id", categoriesController.update)
router.delete("/delete/:id", categoriesController.delete)
*/
module.exports = router
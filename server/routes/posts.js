let express = require('express')
let router = express.Router()

//let middleware = require("../middleware/Middleware")

const postsController =  require('../controller/posts')
/*
router.get("/getAll", postsController.getAll)
router.get("/get/:id", postsController.get)
router.post("/create", postsController.create)
router.put("/update/:id", postsController.update)
router.delete("/delete/:id", postsController.delete)
*/
module.exports = router
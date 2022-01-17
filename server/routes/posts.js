let express = require('express')
let router = express.Router()

const postsController =  require('../controller/posts')
const checkLogin = require('../services/authentication')

router.get("/get", postsController.getPosts)
router.get("/get/:id", postsController.getSinglePost)
router.post("/search", postsController.searchPosts)
router.post("/create", checkLogin.checkLogin, postsController.createPost)
router.put("/update/:id", checkLogin.checkLogin, postsController.updatePost)
router.delete("/delete/:id", checkLogin.checkLogin, postsController.deletePost)

module.exports = router
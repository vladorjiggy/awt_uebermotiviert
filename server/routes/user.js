let express = require('express')
let router = express.Router()

const userController =  require('../controller/user')
const checkLogin = require('../services/authentication')

router.post("/login", userController.login)
router.post("/logout", checkLogin.checkLogin, userController.logout)
router.put("/changePassword", checkLogin.checkLogin, userController.changePassword)
/*
router.get("/getAll", userController.getAll)
router.get("/get/:id", userController.get)
router.post("/create", userController.create)
router.put("/update/:id", userController.update)
router.delete("/delete/:id", userController.delete)
*/
module.exports = router
let express = require('express')
let router = express.Router()

const userController =  require('../controller/user')
const checkLogin = require('../services/authentication')

/**
 * Routen für User
 */

router.post("/login", userController.login)
router.post("/logout", checkLogin.checkLogin, userController.logout)
router.put("/changePassword", checkLogin.checkLogin, userController.changePassword)

module.exports = router
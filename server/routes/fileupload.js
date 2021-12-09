let express = require('express')
let router = express.Router()

const fileController =  require('../controller/fileUpload')
const checkLogin = require('../services/authentication')

router.post("/upload", checkLogin.checkLogin, fileController)
module.exports = router
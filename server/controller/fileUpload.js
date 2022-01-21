const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const dotenv = require('dotenv');
dotenv.config();

let postservice = require('../services/posts')

/**
 * 
 * Prüft ob ankommende Dateien den passenden Dateitypen haben
 */

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"]
    if (!allowedTypes.includes(file.mimetype)){
        const error = new Error("Incorrect file")
        error.code = "INCORRECT_FILETYPE"
        return cb(error, false)
    }
    cb(null, true)
}

/**
 * Legt das Speicherziel fest
 */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '/uploads/'));
    },
    fileFilter,
    filename: function(req, file, cb){
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage: storage })


router.post('/:post_id', upload.single('post_image'), userUpload)

/**
 * 
 * Updatet den Post mit der Adresse des Bildes
 */

function userUpload(req, res){
    let post_id = req.params.post_id
    let data = {
        post_image: process.env.SERVERHOST + '/uploads/' + req.file.filename
    }
    postservice.updatePost(post_id, data, (status, err, post) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (post) {
                res.status(status).json({ post: post })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })

}
module.exports = router
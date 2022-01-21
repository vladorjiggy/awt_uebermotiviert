let authservice = require('../services/authentication')
let userservice = require('../services/user')

/**
 * 
 * Login anhand mitgeschickter Userdaten
 * 
 */

exports.login = function (req, res) {
    const authHeader = req.headers.authorization
    if (!authHeader || authHeader.indexOf('Basic') === -1) {
        res.status(401).send({ error: "No Authorization Header provided" })
    }
    const credentials = authHeader.split(" ")[1]
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':')
    authservice.checkPassword(username, password, (status, err, user) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else {
            if (user) {
                req.session.regenerate(function (err) {
                    req.session.isLoggedIn = true
                    req.session.user_id = user._id.toString()
                    res.status(status).json({ message: "user successfully logged in" })    
                })
            }
            else {
                res.status(status).json({ error: err })
            }
        }
    })
}

/**
 * 
 * Logout eines eingeloggten Users
 */

exports.logout = function (req, res) {
    req.session.destroy()
    res.clearCookie("connect.sid", { path: "/" })
    res.status(200).json({ message: "user successfully logged out" })
}

/**
 * 
 * Ändert das Passwort eines Users
 */

exports.changePassword = function (req, res) {
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const id = req.session.user_id
    userservice.changeUserPassword(id, oldPassword, newPassword, (status, err, success) => {
        if (err) {
            res.status(status).json({ error: err })
        }
        else if (success) {
            res.status(status).json({ success: success })
        }

    })
}
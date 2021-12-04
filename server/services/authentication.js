let userservice = require('./user')

exports.checkPassword = function (username, password, callback) {

    if (!username || !password) {
        return callback('No Data', false)
    }
    else {

        userservice.findUserByName(username, function (err, user) {
            if (err) {
                return callback(500, err, false)
            }
            if (user) {
                user.comparePassword(password, (err, isMatch) => {
                    if (err) {
                        callback(403, err, false)
                    }
                    else {
                        if (isMatch) {
                            return callback(200, null, user)
                        }
                        else {
                            return callback(401, 'wrong Password', false)
                        }
                    }
                })

            }
            else {
                return callback(404, "User not found", false)
            }
        })
    }
}


exports.checkLogin = function (req, res, next) {
    if (req.session?.isLoggedIn) {
        next()
    }
    else {
        res.status(403).json({ error: 'not allowed' })
    }
}
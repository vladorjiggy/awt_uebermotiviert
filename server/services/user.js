const User = require('../models/User').User
exports.getUsers = function (callback){
    User.find((err, users) => {
        if(err){
            console.log("Fehler bei Suche: " + err)
            return callback(err,null)
        }
        else{
            return callback(null, users)
        }
    }).select('-password')
}
exports.findUserByName = function (userName, callback){
    if(!userName){
        return callback(err, null)
    }
    else{
        let query = User.findOne({username: userName})
        query.exec((err, user) => {
            if(err){
                return callback(err, null)
            }
            else{
                if(user){
                    callback(null, user)
                }
                else{
                    return callback("User not found", null)
                }
            }
        })
    }
}
exports.findUserById = function (id, callback){
    if(!id){
        return callback('Id not provided', null)
    }
    else{
        let query = User.findOne({_id: id}).select('-password')
        query.exec((err, user) => {
            if(err){
                return callback("User not found", null)
            }
            else{
                if(user){
                    callback(null, user)
                }
            }
        })
    }
}
exports.updateUser = function (id, data, callback){
    if(!id){
        return callback('No ID', null)
    }
    else{
        if(!data){
            return callback('No Data', null)
        }
        else{
            let query = User.findOneAndUpdate({_id:id}, data)
            query.exec((err, user) => {
                if(err){
                    return callback("cannot update User", null)
                }
                else{
                    return callback(null, 'User successfully updated')
                }
            })
        }
    }
}

exports.createUser = function (data, callback){
    if(!data){
        return callback('no Data', null)
    }
    else{
        User.findOne({ username: username }, function (err, user) {
            if(user){
                return callback('User already exists', null, null)
            }
            else{
                let newUser = new User()
                newUser.password = data.password
                newUser.username = data.username
                newUser.save()
            }
        })
    }
}
exports.changeUserPassword = function (id, oldPassword, newPassword, callback){
    if(!id){
        return callback(400, 'No User provided', null)
    }
    else{
        User.findOne({_id:id}, (err, user) =>{
            if(err){
                callback(500, err, null)
            }
            if(user){
                user.comparePassword(oldPassword, (err, isMatch) => {
                    if(err){
                        return callback(401, 'Wrong Password', null)
                    }
                    if(isMatch){
                        user.password = newPassword
                        user.save()
                        callback(200, null, 'Password successfully updated')
                    }
                    else{
                        callback(401, 'Password not true', null)
                    }
                })
            }
        })
        
    }
}
exports.deleteUser = function (id, callback){
    if(id){
        User.findByIdAndRemove(id, function (err, docs) {
            if (err){
                console.log(err)
                callback('User not found', null)
            }
            else{
                console.log("Removed User : ", docs)
                callback(null, 'User removed')
            }
        });
    }
}
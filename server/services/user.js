const User = require('../models/User').User

/**
 * 
 * Datenbankzugriff für das ändern des Passwortes
 */

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
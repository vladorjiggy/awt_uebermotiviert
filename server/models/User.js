let mongoose = require('mongoose')
let bcrypt = require('bcrypt')
const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    created: {type: Date, default: Date.now()},
}, {timestamps: true})
UserSchema.pre('save', function(next){
    let user = this;
    if (!user.isModified('password')){return next()};
    bcrypt.hash(user.password,10).then(hashedPassword =>{
        user.password = hashedPassword;
        next();
    })
}), function(err){
    next(err)
}
UserSchema.methods.comparePassword = function(enteredPassword, next){
    bcrypt.compare(enteredPassword, this.password, function(err, isMatch){
        if(err){
            return next(err)
        }
        else{
            return next(null, isMatch)
        }
        
    })
}
const User = mongoose.model('User', UserSchema)
module.exports = {
    User : User
};
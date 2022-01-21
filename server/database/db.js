
dotenv.config();
const mongoose = require('mongoose')
const {buildCategories, buildUsers, buildFirstPosts} = require('./initData')

/**
 * Initialisiert die Datenbank und erste Kategorien, Posts und einen Admin-User
 */


let _db;
function initDB(callback){
    if(_db){
        if(callback){
            return callback(null, _db)
        }
        else{
            return _db
        }
    }
    else{
        mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
        _db = mongoose.connection

        _db.on('error', console.error.bind(console, 'connection error:'))
        _db.once('open', function(){
            buildUsers()
            buildCategories().then(() => {
                buildFirstPosts()
            })
            
            
            callback(null, _db)
        })
    }
}
module.exports = {
    initDB
}
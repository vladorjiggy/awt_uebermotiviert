const config = require('config');
const dBConnectionString = config.get('dbConfig.connectionString')
const mongoose = require('mongoose')
const {buildCategories, buildUsers, buildFirstPosts} = require('./initData')

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
        mongoose.connect(dBConnectionString, {useNewUrlParser: true, useUnifiedTopology: true})
        _db = mongoose.connection

        _db.on('error', console.error.bind(console, 'connection error:'))
        _db.once('open', function(){
            buildCategories()
            buildUsers()
            buildFirstPosts()
            callback(null, _db)
        })
    }
}
module.exports = {
    initDB
}
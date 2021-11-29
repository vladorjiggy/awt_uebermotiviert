let fs = require('fs')
const Category = require('../models/Category').Category
const User = require('../models/User').User
function buildCategories(){
    Category.find({},function(err,doc){
        if(!doc.length){
            fs.readFile('./database/default/Categories.json', 'utf-8', (err, data) => {
                if (err){
                    console.log(err)
                }
                let datafromfile = JSON.parse(data);
                Object.values(datafromfile).forEach(function(obj){            
                    let cat = new Category(obj)
                    cat.save()
                })     
            })
        }
    });
}
function buildUsers(){
    User.find({},function(err,doc){
        if(!doc.length){
            fs.readFile('./database/default/User.json', 'utf-8', (err, data) => {
                if (err){
                    console.log(err)
                }
                let datafromfile = JSON.parse(data);
                Object.values(datafromfile).forEach(function(obj){            
                    let user = new User(obj)
                    user.save()            
                })        
            })
        }
        
    })
    
}
module.exports = {
    buildCategories,
    buildUsers
}
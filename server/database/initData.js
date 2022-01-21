let fs = require('fs')
const Category = require('../models/Category').Category
const User = require('../models/User').User
const Post = require('../models/Post').Post
function buildCategories(){

    return new Promise((resolve, reject) => {
        Category.find({},function(err,doc){
            if(!doc.length){
                fs.readFile('./database/default/Categories.json', 'utf-8', (err, data) => {
                    if (err){
                        reject(error)
                    }
                    let datafromfile = JSON.parse(data);
                    Object.values(datafromfile).forEach((obj, index) => {            
                        let cat = new Category(obj)
                        //console.log(cat)
                        cat.save()
                        if (index === Object.values(datafromfile).length -1) resolve();
                    })   
                    console.log('CAT')  
                })
            }
        })
        //resolve()
    })


    
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

function buildFirstPosts() {
    console.log('POSTS') 
    Post.find({},function(err,doc){
        if(!doc.length){
            fs.readFile('./database/default/Posts.json', 'utf-8', (err, data) => {
                if (err){
                    console.log(err)
                }
                let datafromfile = JSON.parse(data);
                Object.values(datafromfile).forEach(function(obj){  

                        
                        
                            let post = new Post(obj)
                            post.save()  
                            
                        
                    })
                    
                    
                     
                      
            })
        }
        
    })
    
}
module.exports = {
    buildCategories,
    buildUsers,
    buildFirstPosts
}
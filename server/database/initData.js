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
                })
            }
        });
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
    
    Post.find({},function(err,doc){
        if(!doc.length){
            fs.readFile('./database/default/Posts.json', 'utf-8', (err, data) => {
                if (err){
                    console.log(err)
                }
                let datafromfile = JSON.parse(data);
                Object.values(datafromfile).forEach(function(obj){  

                    Category.findOne({name: obj.categories},(err, categories) => {
                        if(err){
                            console.log("Fehler bei Suche: " + err)
                            
                        }
                        else{
                            let post = new Post()
                            post.post_image = obj.post_image
                            post.title = obj.title
                            post.content = obj.content
                            post.categories.push(categories._id)
                            post.save()  
                            categories.posts.push(post._id)
                            categories.save()
                        }
                    })
                    
                    
                     
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
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const config = require('config');
const dBConnectionString = config.get('dbConfig.connectionString')
const sessionSecret = config.get('session.secret')
const database = require('./database/db')
const UserRouter = require('./routes/user')
const PostRouter = require('./routes/posts')
const CategoryRouter = require('./routes/categories')

const session = require('express-session');
const MongoStore = require('connect-mongo');
let cors = require('cors')


app.use(cors())
database.initDB((err, db) => {
  if(db){
    console.log("Datenbank angebunden")
  }
  else{
    console.log("Datenbank konnte nicht angebunden werden")
  }
})
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use(session({
  secret: sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: dBConnectionString }),
  cookie: {
    secure: 'auto',
    httpOnly: true,
    sameSite: true,
    maxAge: 4.32e+7,
    path: '/',
    //domain: process.env.DOMAIN
  },
}));

/**
 * API
 */

app.use('/api/user', UserRouter)
app.use('/api/post', PostRouter)
app.use('/api/category', CategoryRouter)



if (process.env.NODE_ENV === 'production'){
    // static folder
    app.use(express.static(__dirname + '/dist/'))

    // Handle SPA 
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/dist/index.html'))
}

// start server instant
const port = process.env.PORT 
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
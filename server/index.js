const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const config = require('config');
const dBConnectionString = config.get('dbConfig.connectionString')
const bodyParser = require('body-parser');
const sessionSecret = config.get('session.secret')
const database = require('./database/db')
const UserRouter = require('./routes/user')
const PostRouter = require('./routes/posts')
const CategoryRouter = require('./routes/categories')
const cookieParser = require('cookie-parser')

const session = require('express-session');
const MongoStore = require('connect-mongo');
let cors = require('cors')
app.set('trust proxy', 1)
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const apphost = process.env.APPHOST.split(' ')
let allowedDomains = apphost;
app.use(cors());

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
  
  cookie: {
    secure: 'auto',
    httpOnly: true,
    sameSite: true,
    maxAge: 4.32e+7
  },
  store: MongoStore.create({ mongoUrl: dBConnectionString }),
}));

/**
 * API
 */

app.use('/user', UserRouter)
app.use('/post', PostRouter)
app.use('/category', CategoryRouter)
app.use('/file/upload', require('./controller/fileUpload'))
app.use('/uploads',express.static(__dirname + '/uploads/'))


if (process.env.NODE_ENV === 'production'){
    // static folder
    app.use(express.static(__dirname + '/dist/'))

    // Handle SPA 
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/dist/index.html'))
}

// start server instant
const port = process.env.PORT 
app.listen(4000, function () {
    console.log('Server listening on port 4000');
});
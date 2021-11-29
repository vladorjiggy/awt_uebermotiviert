const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
let database = require('./database/db')

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
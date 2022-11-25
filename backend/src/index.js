const express = require ("express");
const mysql = require('./mysql.js');
const cors = require("cors");
const router = require('./api.js');

// express() = node js web application framework that 
// helps us to build the web application
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// listen() - binds and listens the connections on the specified host and port
// apelez functia pe care am creato o in mysql.js


app.listen (4201, () => { 
    console.log("merge portul");

    mysql.connect((error, result) => {
        if (error) {
            throw error;
        }
        else {
            console.log('conectat la baza de date');
        }
    });
});
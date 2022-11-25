const handlers = require ('./handlers/handlers.js');
const express = require ('express');


let router = express.Router(); // creates a new router object

// req object is one half of the request and response cycle to examine 
//calls from the client side, make HTTP requests, and handle incoming 
// data whether in a string or JSON objec

// Express servers receive data from the client side through the req 
// object in three instances: the req.params, req.query, and req.body objects

// POST requests
router.post('/', (req, res, next) => {
    let object = req.body.method; // req.body - allows to access data in a string or JSON object
    object = object.split("."); // divides the string into an array of substrings
    let handler = object[0];
    let method = object[1];

    if(!handler || !method) {
        res.json({id: req.body.id, error: {message: 'Not JSON-RPC'}, result: null});
        return;
    }

    if(handlers[handler] && handlers[handler][method]) {
        handlers[handler][method](req, res, next);
    }
});

module.exports = router;
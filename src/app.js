const express = require('express');
const bodyParser =require('body-parser');
const morgan = require('morgan');

function initiateServer () {

    let app = express();
    app.use(morgan('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // parse application/json
    app.use(bodyParser.json());



    app.listen(3030,()=>{
        console.log('Server Initiated!');
    })


}


module.exports = {
    initiateServer
}
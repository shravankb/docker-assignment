const express = require('express');
const bodyParser =require('body-parser');
const morgan = require('morgan');
const userRoute = require('../src/api/user/user-route');

function initiateServer () {

    let app = express();
    app.use(morgan('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // parse application/json
    app.use(bodyParser.json());

    app.use('/api/user',userRoute);
    console.log(process.env.PORT)
    
    app.listen(process.env.PORT,()=>{
        console.log('Server Initiated!');
    })


}


module.exports = {
    initiateServer
}
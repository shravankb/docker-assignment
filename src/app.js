const express = require('express');
const bodyParser =require('body-parser');
const morgan = require('morgan');
const userRoute = require('../src/api/user/user-route');
const dbConnect = require('../src/databaseConfig/initiateDB');

async function initiateServer () {

    let app = express();
    app.use(morgan('dev'));

    //Database Connect
    await dbConnect.dbConnect();

    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: false }));
    
    // parse application/json
    app.use(bodyParser.json());

    app.get('/health/check', (req,res)=> {
        res.send({status:"up"});
    });

    app.use('/api/user',userRoute);
    
    app.listen(process.env.PORT,()=>{
        console.log('Server Initiated!', process.env.PORT);
    });

}


module.exports = {
    initiateServer
}
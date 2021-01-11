const server = require('./src/app');
const dotenv = require('dotenv');

console.log("Running on Environment: " + process.env.NODE_ENV);
server.initiateServer();

const server = require('./src/app');
const dotenv = require('dotenv');

console.log(process.env.PORT);
server.initiateServer();

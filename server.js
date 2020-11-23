const server = require('./src/app');
const dotenv = require('dotenv');
dotenv.config({ 'path': './.env' });

server.initiateServer();
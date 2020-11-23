const mongoose = require('mongoose');


/*----------------------------------------------*
 *                                               *
 *             DATABASE CONFIGURATION            *
 *                                               *
 *-----------------------------------------------*/
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    // If not connected, return errors immediately rather than waiting for reconnect
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6
    useUnifiedTopology: true, // Removes support for several connection options that are no longer relevant to new topology engine
};


module.exports.dbConnect = () => {
    
    // Connecting to the database
    mongoose.connect(process.env.DBURL, options)
        .then((data) => {
            console.log(`Successfully connected to the database`);
        })
        .catch(err => {
            console.error(`{ 'ErrorName' :'${err.name}',\n\t'ErrorMessage':'${err.message}',\n\t'ErrorTrace':'${err.stack.split(')')[0]}'}`);
        });
}
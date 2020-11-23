const statusCode = require('../constants/constants').STATUS_CODES;

//! #TODO: ### **Clean up the functions**
// - [ # ] Refactor the JSON data for send params 
// - [  ] refactor functions

//Success Responses
exports.success = async (data,req,res) => {

        res.status(statusCode.SUCCESS).send({
            timestamp : new Date(),
            status: statusCode.SUCCESS,
            message : req.message||'SUCCESS',
            payload : data,
            endpoint : req.originalUrl
        });    
}

exports.created = (data,req,res) => {
    
    res.status(statusCode.CREATED).send({
        timestamp : new Date(),
        status: statusCode.CREATED,
        message : req.message||'CREATED',
        payload : data,
        endpoint : req.originalUrl
    });    
}

exports.noContent = (data,req,res) => {
    
    res.status(statusCode.NO_CONTENT).send({
        timestamp : new Date(),
        status: statusCode.NO_CONTENT,
        message : 'NO_CONTENT',
        payload : data,
        endpoint : req.originalUrl
    });    
}

exports.resetContent = (data,req,res) => {
    
    res.status(statusCode.RESET_CONTENT).send({
        timestamp : new Date(),
        status: statusCode.RESET_CONTENT,
        message : req.message||'RESET_CONTENT',
        payload : data,
        endpoint : req.originalUrl
    });    
}

//Client Error Responses
exports.badRequest = (err,req,res) => {
    
    res.status(statusCode.BAD_REQUEST).send({
        timestamp : new Date(),
        status: statusCode.BAD_REQUEST,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}

exports.unauthorized = async (err,req,res) => {
 
    res.status(statusCode.UNAUTHORIZED).send({
        timestamp : new Date(),
        status: statusCode.UNAUTHORIZED,
        error:{
                name : err.name,
                message: err.message
            },
        payload : null,
        endpoint : req.originalUrl
    });    

}

exports.notFound = (err,req,res) => {
    
    res.status(statusCode.NOT_FOUND).send({
        timestamp : new Date(),
        status: statusCode.NOT_FOUND,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}

exports.conflict = (err,req,res) => {
    
    res.status(statusCode.CONFLICT).send({
        timestamp : new Date(),
        status: statusCode.CONFLICT,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}

exports.unprocessableEntity = (err,req,res) => {
    
    res.status(statusCode.UNPROCESSABLE_ENTITY).send({
        timestamp : new Date(),
        status: statusCode.UNPROCESSABLE_ENTITY,
        error:{
            name : err.name,
            message: err.message
        }, 
        payload : null,
        endpoint : req.originalUrl
        });    
}

exports.internalServerError = (err,req,res) => {
    
    res.status(statusCode.INTERNAL_SERVER_ERROR).send({
        timestamp : new Date(),
        status: statusCode.INTERNAL_SERVER_ERROR,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}

exports.forbidden = (err,req,res) => {
    
    res.status(statusCode.FORBIDDEN).send({
        timestamp : new Date(),
        status: statusCode.FORBIDDEN,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}


exports.gone = (err,req,res) => {
    
    res.status(statusCode.GONE).send({
        timestamp : new Date(),
        status: statusCode.GONE,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}


exports.unknownCause = (err,req,res) => {
    
    res.status(statusCode.UNKNOWN_ERROR).send({
        timestamp : new Date(),
        status: statusCode.UNKNOWN_ERROR,
        error:{
            name : err.name,
            message: err.message
        },
        payload : null,
        endpoint : req.originalUrl
    });    
}

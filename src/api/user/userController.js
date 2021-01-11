const userService = require('./userService');
const ValidationSchema = require('./userValidation'); 
const Joi = require('joi');
const responseEnvelope = require('../../middlewares/responseEnvelope');
const sendError = require('../../middlewares/errorHandler');
const addNewUser = async (req, res, next) => {

    try {
        await Joi.validate(req.body, ValidationSchema.userValidation, { abortEarly: false });
        let response = await userService.addNewUser(req.body);
        responseEnvelope.created(response,req,res);
    
    } catch (err) {
        sendError.errorHandler(err, req, res, next);
    }
}


const findUser = async (req, res, next) => {

    try {
        await Joi.validate(req.params, ValidationSchema.userIdValidation, { abortEarly: false });
        let response = await userService.findUser(req.params);
        responseEnvelope.success(response,req,res);
    } catch (err) {
        sendError.errorHandler(err, req, res, next);    
    }

}

const fetchUsers = async (req, res, next) => {

    try {
        let response = await userService.fetchUsers();
        responseEnvelope.success(response,req,res);
    } catch (err) {
        sendError.errorHandler(err, req, res, next);
    }

}


module.exports = {
    findUser, addNewUser, fetchUsers
};
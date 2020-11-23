const userService = require('./userService');
const ValidationSchema = require('./userValidation'); 
const Joi = require('joi');


const addNewUser = async (req, res, next) => {

    try {
        await Joi.validate(req.body, ValidationSchema.userValidation, { abortEarly: false });
        let response = await userService.addNewUser(req.body);
        res.send(response);
    
    } catch (e) {
        res.send(e)
    }
}


const findUser = async (req, res, next) => {

    try {
        console.log(231)
        await Joi.validate(req.params, ValidationSchema.userIdValidation, { abortEarly: false });
        let response = await userService.findUser(req.params);
        res.send(response);
    } catch (e) {
        res.send(e)
    }

}

const fetchUsers = async (req, res, next) => {

    try {
        let response = await userService.fetchUsers();
        res.send(response);

    } catch (e) {
        console.log(e)
    }

}


const deleteUser = async (req, res, next) => {

    try {
        await Joi.validate(req.params, ValidationSchema.userIdValidation, { abortEarly: false });
        let response = await userService.deleteUser(req.params);
        res.send(response);   
    } catch (e) {
    
    }

}

module.exports = {
    findUser, addNewUser, fetchUsers, deleteUser
};
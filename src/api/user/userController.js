const userService = require('./userService');
const ValidationSchema = require('./userValidation'); 



const addNewUser = async (req, res, next) => {

    try {
    
        await Joi.validate(req.body, ValidationSchema.userValidation, { abortEarly: false });
        let response = await userService.addNewUser(req.body);
        res.send(response);
    
    } catch (e) {
    
    }
}


const findUser = (req, res, next) => {

    try {
        await Joi.validate(req.params, ValidationSchema.userIdValidation, { abortEarly: false });
        let response = await userService.findUser(req.params);
        res.send(response);
    } catch (e) {
    
    }

}

const fetchUsers = (req, res, next) => {

    try {
    
        let response = await userService.fetchUsers();
        res.send(response);

    } catch (e) {
    
    }

}


const deleteUser = (req, res, next) => {

    try {
        await Joi.validate(req.params, ValidationSchema.userIdValidation, { abortEarly: false });
        let response = await userService.deleteUser(req.body);
        res.send(response);   
    } catch (e) {
    
    }

}

module.exports = {
    findUser, addNewUser, fetchUsers, deleteUser
};
const Joi = require('joi');

/**
 *      User Validation 
 */

exports.userValidation = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required() 
});


/**
 *      UserID Validation 
 */

exports.userIdValidation = Joi.object({
    userId: Joi.string().hex().required() 
});
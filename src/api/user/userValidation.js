const Joi = require('joi');

/**
 *      User Validation 
 */

exports.userValidation = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required() 
});


/**
 *      UserID Validation 
 */

exports.userIdValidation = Joi.object().keys({
    userId: Joi.string().hex().required() 
});
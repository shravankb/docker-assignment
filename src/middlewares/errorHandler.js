const errorResponseEnvelope = require('./responseEnvelope');
const SUCCESS = 200; // OK Sucess
const NO_CONTENT = 204; //No Content
const BAD_REQUEST = 400; // type validation
const UNAUTHORIZED = 401;
const NOT_FOUND = 404;
const CONFLICT = 409; //inserting data already exist
const UNPROCESSABLE_ENTITY = 422; // 
const INTERNAL_SERVER_ERROR = 500; //
const FORBIDDEN = 403; //
const errorType = require('../constants/constants').ERROR_TYPES;

exports.errorHandler = (err, req, res, next) => {


    let setError = true
    if (err.name == errorType.BAD_REQUEST) {
        setError = false;
        errorResponseEnvelope.badRequest(err, req, res);
    }
    if (err.type == errorType.UNAUTHORIZED) {
        setError = false;
        errorResponseEnvelope.unauthorized(err, req, res);
    }


    if (err.type == errorType.UNPROCESSABLE_ENTITY) {
        setError = false;
        errorResponseEnvelope.unprocessableEntity(err, req, res);
    }

    if (err.type == errorType.CONFLICT) {
        setError = false;
        errorResponseEnvelope.conflict(err, req, res);
    }

    if (err.type == errorType.INTERNAL_SERVER_ERROR) {
        setError = false;
        errorResponseEnvelope.internalServerError(err, req, res);
    }

    if (err.type == errorType.FORBIDDEN) {
        setError = false;
        errorResponseEnvelope.forbidden(err, req, res);
    }

    if (err.type == errorType.GONE) {
        setError = false;
        errorResponseEnvelope.gone(err, req, res);
    }

    if (setError == true)
        errorResponseEnvelope.unknownCause(err, req, res);

}
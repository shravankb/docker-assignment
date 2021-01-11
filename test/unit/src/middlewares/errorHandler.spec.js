const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const should = chai.should;
chai.use(chaiAsPromised);                 

const errorHandler = require('../../../../src/middlewares/errorHandler');
const responseEnvelope = require('../../../../src/middlewares/responseEnvelope');
const ERROR_TYPES = require('../../../../src/constants/constants').ERROR_TYPES;
const ERROR_MESSAGES = require('../../../../src/constants/constants').ERROR_MESSAGES;
const STATUS_CODES = require('../../../../src/constants/constants').STATUS_CODES;


describe('Global Error Handler Middlewares - Unit Tests', function() {


    context('Test Suites for Middleware #errorHandler()', function()  {
        
        let stub = sinon.stub;

        afterEach(function(){
            sinon.restore();
        });

        it('a) handling BadRequest - it should be able be able to accept three parameters and call corresponding response envelope to send response on BAD_REQUEST', async function () {
            
            let err = {
                name: ERROR_TYPES.BAD_REQUEST,
                type: ERROR_TYPES.BAD_REQUEST,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'badRequest').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.badRequest);
            sinon.assert.calledOnce(responseEnvelope.badRequest);
        });

        it('b) handling Unauthorised Error - it should be able be able to accept three parameters and call corresponding response envelope to send response on UNAUTHORIZED_ERR', async function () {
            
            let err = {
                name: ERROR_TYPES.UNAUTHORIZED,
                type: ERROR_TYPES.UNAUTHORIZED,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'unauthorized').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.unauthorized);
            sinon.assert.calledOnce(responseEnvelope.unauthorized);
        });

        it('c) handling Error caused due to some unprocessable entity - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_UNPROCESSABLE_ENTITY', async function () {
            
            let err = {
                name: ERROR_TYPES.UNPROCESSABLE_ENTITY,
                type: ERROR_TYPES.UNPROCESSABLE_ENTITY,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'unprocessableEntity').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.unprocessableEntity);
            sinon.assert.calledOnce(responseEnvelope.unprocessableEntity);
        });

        it('d) handling Error caused due to some conflicts caused in the current state of server  - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_CONFLICT', async function () {
            
            let err = {
                name: ERROR_TYPES.CONFLICT,
                type: ERROR_TYPES.CONFLICT,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'conflict').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.conflict);
            sinon.assert.calledOnce(responseEnvelope.conflict);
        });

        it('e) handling Error caused due to internal server error  - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_INTERNAL_SERVER', async function () {
            
            let err = {
                name: ERROR_TYPES.INTERNAL_SERVER_ERROR,
                type: ERROR_TYPES.INTERNAL_SERVER_ERROR,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'internalServerError').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.internalServerError);
            sinon.assert.calledOnce(responseEnvelope.internalServerError);
        });

        it('f) handling Error caused when tried forbidden access  - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_FORBIDDEN_ACCESS', async function () {
            
            let err = {
                name: ERROR_TYPES.FORBIDDEN,
                type: ERROR_TYPES.FORBIDDEN,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'forbidden').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.forbidden);
            sinon.assert.calledOnce(responseEnvelope.forbidden);
        });

        it('g) handling Error caused when tried retreieve resource which is no more part of the server  - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_GONE', async function () {
            
            let err = {
                name: ERROR_TYPES.GONE,
                type: ERROR_TYPES.GONE,
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'gone').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.gone);
            sinon.assert.calledOnce(responseEnvelope.gone);
        });
        

        it('h) handling Error caused is something server is not able to understand  - it should be able be able to accept three parameters and call corresponding response envelope to send response on ERR_UNKNOWN', async function () {
            
            let err = {
                name: '',
                type: 'ERR_TYPE',
                message: 'ERR_MSG'
            };
            let req = sinon.stub();
            let res = sinon.stub();
            let next = sinon.stub();
            stub(responseEnvelope, 'unknownCause').resolves();
            
            errorHandler.errorHandler(err,req,res, next);
            sinon.assert.called(responseEnvelope.unknownCause);
            sinon.assert.calledOnce(responseEnvelope.unknownCause);
        });

    });

})


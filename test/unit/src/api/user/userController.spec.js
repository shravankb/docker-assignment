const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const should = chai.should;
chai.use(chaiAsPromised);  
const userController = require('../../../../../src/api/user/userController');
const userService = require('../../../../../src/api/user/userService');
const joi = require('joi');
const responseEnvelope = require('../../../../../src/middlewares/responseEnvelope');
const sendError = require('../../../../../src/middlewares/errorHandler');

describe('User Flow Controller Unit Tests', function() {
   
    context('Test Suites for #addNewUser()', function() {
        
        let stub = sinon.stub;
        
        beforeEach(function() {
            stub(sendError, 'errorHandler').resolves();
            stub(responseEnvelope, 'success').resolves();   
            stub(responseEnvelope, 'created').resolves();              
        });

        afterEach(function(){
            sinon.restore();
        });
               
        it('a) add a new user and return the user document as success response', async function()  {
            
            let body = {
                "name":"Shanthi Rajendran",
                "email":"shanthi.r@nineleaps.com"
            };
            let req = { body : body };
            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = {
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            };

            stub(joi, 'validate').resolves(body);
            stub(userService,'addNewUser').resolves(serviceData);
            
            await userController.addNewUser(req, res, next);
            sinon.assert.called(joi.validate);
            sinon.assert.called(userService.addNewUser);
            sinon.assert.called(responseEnvelope.created);
        

        });

        it('b) should throw an error if the user data is not in valid format,  as an error with name ValidationError', async function() {
            let body = {
                "name":"Shanthi Rajendran",
                "email":"shanthi.r@nineleaps.com"
            };

            let req = { body : body };
            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = {
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            };
            let validationError =  {
                "name": "ValidationError",
                "message": "child \"name\" fails because [\"name\" is required]"
            };

            stub(joi, 'validate').throws(validationError);
            stub(userService,'addNewUser').resolves(serviceData);

            expect(userController.addNewUser(req, res, next)).to.be.eventually.rejected;
            expect(()=> userController.addNewUser(req, res, next).to.throw()); 
            await userController.addNewUser(req, res, next);
            sinon.assert.called(joi.validate);
            sinon.assert.called(sendError.errorHandler);
            
        });

        it('c) should throw an error if the user data already exists, as an error with name DuplicationError', async function() {
            let body = {
                "name":"Shanthi Rajendran",
                "email":"shanthi.r@nineleaps.com"
            };

            let req = { body : body };
            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = {
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            };
            
            let duplicationError =  {
                "name": "Duplicated Value",
                "message": "Email already exists. Email cannot be duplicated"
            };

            stub(joi, 'validate').resolves(body);
            stub(userService,'addNewUser').throws(duplicationError);

            expect(userController.addNewUser(req, res, next)).to.be.eventually.rejected;
            expect(()=> userController.addNewUser(req, res, next).to.throw()); 
            await userController.addNewUser(req, res, next) ;
            sinon.assert.called(joi.validate);
            sinon.assert.called(sendError.errorHandler);
            
        });
    });


    context('Test Suites for #findUser()', function() {
        
        let stub = sinon.stub;
        
        beforeEach(function() {
            stub(sendError, 'errorHandler').resolves();
            stub(responseEnvelope, 'success').resolves();   
            stub(responseEnvelope, 'created').resolves();              
        });

        afterEach(function(){
            sinon.restore();
        });
               
        it('a) find a new user by userId and return the user document as success response', async function()  {
            

            let userId = "5ffb2ce151ec23237be6ff20"
            let req = { 
                params : 
                { 
                    userId: userId
                } 
            };

            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = {
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            };

            stub(joi, 'validate').resolves(userId);
            stub(userService,'findUser').resolves(serviceData);
            
            await userController.findUser(req, res, next);
            
            sinon.assert.called(joi.validate);
            sinon.assert.called(userService.findUser);
            sinon.assert.called(responseEnvelope.success);

        });

        it('b) should throw an error if the user data is does not exist,  as an error', async function() {

            let userId = "5ffb2ce151ec23237be6ff20"
            let req = { 
                params : 
                { 
                    userId: userId
                } 
            };
            
            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = {
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            };

            let error =  {
                "name": "NotFoundError",
                "message": "DATA_NOT_FOUND"
            };

            stub(joi, 'validate').throws(userId);
            stub(userService,'findUser').throws(error);

            expect(userController.findUser(req, res, next)).to.be.eventually.rejected;
            expect(()=> userController.findUser(req, res, next).to.throw()); 
            sinon.assert.called(joi.validate);
            sinon.assert.calledOnce(sendError.errorHandler);
        }); 
    });


    context('Test Suites for #fetchUsers()', function() {
        
        let stub = sinon.stub;
        
        beforeEach(function() {
            stub(sendError, 'errorHandler').resolves();
            stub(responseEnvelope, 'success').resolves();   
            stub(responseEnvelope, 'created').resolves();              
        });

        afterEach(function(){
            sinon.restore();
        });
               
        it('a) fetch list of users and return the documents as success response', async function()  {
            

            let req = stub.sinon;
            let res = stub.sinon;
            let next = stub.sinon;

            let serviceData = [{
                "_id": "5ffb2ce151ec23237be6ff20",
                "name": "Shanthi Rajendran",
                "email": "shanthi.r@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T16:35:45.686Z",
                "updatedAt": "2021-01-10T16:35:45.686Z",
                "__v": 0
            }];

            stub(userService,'fetchUsers').resolves(serviceData);
            
            await userController.fetchUsers(req, res, next);
            sinon.assert.called(userService.fetchUsers);
            sinon.assert.called(responseEnvelope.success);

        });

        it('b) should throw an error if the user data is does not exist,  as an error', async function() {

            let req = stub.sinon;           
            let res = stub.sinon;
            let next = stub.sinon;

            let error =  {
                "name": "NotFoundError",
                "message": "DATA_NOT_FOUND"
            };

            stub(userService,'findUser').throws(error);

            expect(userController.fetchUsers(req, res, next)).to.be.eventually.rejected;
            expect(()=> userController.fetchUsers(req, res, next).to.throw()); 
            
        }); 
    });



});
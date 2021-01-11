const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const should = chai.should;
chai.use(chaiAsPromised);  
const userDAL = require('../../../../../src/api/user/userDAL');
const userService = require('../../../../../src/api/user/userService');
const joi = require('joi');
const customError = require('../../../../../src/utils/error');

describe('User Flow Service Unit Tests', function() {

    context('Test Suites for #addNewUser()', function() {
        /* Declare Stubs */
        let stub = sinon.stub;

        afterEach(() => {
            /* Unwrap the Stubs */
            sinon.restore();
        });


      it('a) should create and user return the created document successfully', async function ()  {

        let userData = {
            "_id": "5ffb423f93d4306381e60b2d",
            "name": "KSJ",
            "email": "karthik.s.j@nineleaps.com",
            "isArchived": false,
            "createdAt": "2021-01-10T18:06:55.643Z",
            "updatedAt": "2021-01-10T18:06:55.643Z",
            "__v": 0
        };
        let body = {
            "name":"KSJ",
            "email":"karthik.s.j@nineleaps.com"
        };
        stub(userDAL, "createUser").resolves(userData);

        let serviceData = await userService.addNewUser(body);
        sinon.assert.calledOnce(userDAL.createUser);
        expect(userData).to.be.deep.equal(serviceData);
      });


      it('b) should throw an error when duplicated entry of user details is added', async function(){

        let userData = {
            "_id": "5ffb423f93d4306381e60b2d",
            "name": "KSJ",
            "email": "karthik.s.j@nineleaps.com",
            "isArchived": false,
            "createdAt": "2021-01-10T18:06:55.643Z",
            "updatedAt": "2021-01-10T18:06:55.643Z",
            "__v": 0
        };
        let body = {
            "name":"KSJ",
            "email":"karthik.s.j@nineleaps.com"
        };
        let error = new customError("Duplicated Value", "Email already exists. Email cannot be duplicated", 409, "CONFLICT" );

        stub(userDAL, "createUser").throws(error);


        expect(() => userService.addNewUser(body).to.throw());
        expect(()=> userService.addNewUser(body).to.throw());
        expect(userService.addNewUser(body)).to.be.eventually.rejected;
        sinon.assert.calledOnce(userDAL.createUser);
      });

    });

    context('Test Suites for #findUser()', function() {
        /* Declare Stubs */
        let stub = sinon.stub;

        afterEach(() => {
            /* Unwrap the Stubs */
            sinon.restore();
        });

        it('a) should return a user based on UserId, as successful response', async function(){

            let userData = {
                "_id": "5ffb423f93d4306381e60b2d",
                "name": "KSJ",
                "email": "karthik.s.j@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T18:06:55.643Z",
                "updatedAt": "2021-01-10T18:06:55.643Z",
                "__v": 0
            };
            let params = {
                "userId": "5ffb423f93d4306381e60b2d",            
            };
    
            stub(userDAL, "findById").resolves(userData);

            let serviceData = await userService.findUser(params);
            sinon.assert.calledOnce(userDAL.findById);
            expect(userData).to.be.deep.equal(serviceData);
        });

        it('b) should throw an error when throw user with that userId does not exist', async function () {
    

            let params = {
                "userId": "5ffb423f93d4306381e60b2d",            
            };
    
            stub(userDAL, "findById").returns(null);
    

            expect(()=> userService.findUser(params).to.throw());
            expect(userService.findUser(params)).to.be.eventually.rejected;
            sinon.assert.calledOnce(userDAL.findById);
        });
    });



    context('Test Suites for #fetchUsers()', function() {
        /* Declare Stubs */
        let stub = sinon.stub;

        afterEach(() => {
            /* Unwrap the Stubs */
            sinon.restore();
        });

        it('a) should return an array of users, as successful response', async function(){

            let userData = [{
                "_id": "5ffb423f93d4306381e60b2d",
                "name": "KSJ",
                "email": "karthik.s.j@nineleaps.com",
                "isArchived": false,
                "createdAt": "2021-01-10T18:06:55.643Z",
                "updatedAt": "2021-01-10T18:06:55.643Z",
                "__v": 0
            }];
    
            stub(userDAL, "getAllUsers").resolves(userData);

            let serviceData = await userService.fetchUsers();
            sinon.assert.calledOnce(userDAL.getAllUsers);
            expect(userData).to.be.deep.equal(serviceData);
        });

        it('b) should throw an error when unknown params/unsanitized params passed', async function () {
    
            stub(userDAL, "getAllUsers").throws(null);
            expect(()=> userService.fetchUsers().to.throw());
            expect(userService.fetchUsers()).to.be.eventually.rejected;
            sinon.assert.calledOnce(userDAL.getAllUsers);
        });
    });




});
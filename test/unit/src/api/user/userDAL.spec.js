const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const should = chai.should;
chai.use(chaiAsPromised);  
const userDAL = require('../../../../../src/api/user/userDAL');
const userModel = require('../../../../../src/api/user/userModel');
const customError = require('../../../../../src/utils/error');

describe('User Flow DAL Unit Tests', function(){ 

    context('Test Suites for #createUser()', function() {
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
        
        stub(userModel, "create").resolves(userData);

        let dalData = await userDAL.createUser(body);
        sinon.assert.calledOnce(userModel.create);
        expect(userData).to.be.deep.equal(dalData);
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

        stub(userModel, "create").throws(error);


        expect(() => userDAL.createUser(body).to.throw());
        expect(()=> userDAL.createUser(body).to.throw());
        expect(userDAL.createUser(body)).to.be.eventually.rejected;
        sinon.assert.calledOnce(userModel.create);
      });
    });




    context('Test Suites for #findById()', function() {
        /* Declare Stubs */
        let stub = sinon.stub;

        afterEach(() => {
            /* Unwrap the Stubs */
            sinon.restore();
        });


      it('a) should return a user documents successfully after finding based on ID', async function ()  {

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
            userId:"5ffb423f93d4306381e60b2d"
        };
        
        stub(userModel, "findById").resolves(userData);

        let dalData = await userDAL.findById(body);
        sinon.assert.calledOnce(userModel.findById);
        expect(userData).to.be.deep.equal(dalData);
      });


      it('b) should throw an error when invalid params are passed for user details', async function(){

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
        let error = new customError("ValidationError", "Invalid Params", 409, "CONFLICT" );

        stub(userModel, "findById").throws(error);

        expect(() => userDAL.findById(body).to.throw());
        expect(()=> userDAL.findById(body).to.throw());
        expect(userDAL.findById(body)).to.be.eventually.rejected;
        sinon.assert.calledOnce(userModel.findById);
      });
    });




    context('Test Suites for #getAllUsers()', function() {
        /* Declare Stubs */
        let stub = sinon.stub;

        afterEach(() => {
            /* Unwrap the Stubs */
            sinon.restore();
        });


      it('a) should return an array of user documents successfully', async function ()  {

        let userData = [{
            "_id": "5ffb423f93d4306381e60b2d",
            "name": "KSJ",
            "email": "karthik.s.j@nineleaps.com",
            "isArchived": false,
            "createdAt": "2021-01-10T18:06:55.643Z",
            "updatedAt": "2021-01-10T18:06:55.643Z",
            "__v": 0
        }];

        stub(userModel, "find").resolves(userData);

        let dalData = await userDAL.getAllUsers({},{});
        sinon.assert.calledOnce(userModel.find);
        expect(userData).to.be.deep.equal(dalData);
      });


      it('b) should throw an error when invalid params are passed to the functions', async function(){

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
        let error = new customError("ValidationError", "Invalid Params", 409, "CONFLICT" );

        stub(userModel, "find").throws(error);

        expect(() => userDAL.getAllUsers({},{}).to.throw());
        expect(()=> userDAL.getAllUsers({},{}).to.throw());
        expect(userDAL.getAllUsers({},{})).to.be.eventually.rejected;
        sinon.assert.calledOnce(userModel.find);
      });
    });





});
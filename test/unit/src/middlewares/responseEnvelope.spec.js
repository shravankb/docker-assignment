const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
const should = chai.should;
chai.use(chaiAsPromised);                 

const responseEnvelope = require('../../../../src/middlewares/responseEnvelope');

const ERROR_TYPES = require('../../../../src/constants/constants').ERROR_TYPES;
const ERROR_MESSAGES = require('../../../../src/constants/constants').ERROR_MESSAGES;
const STATUS_CODES = require('../../../../src/constants/constants').STATUS_CODES;


describe('Response Envelope Middleware - Unit Tests ', () => {
   
    context('Test Suites for #success', function()  {

        let stub = sinon.stub;

        afterEach(function(){
            sinon.restore();
        });

        it('a) upon on a success response call, should return an successful response with status code 200', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };



            responseEnvelope.success(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('b) upon on a creating a item/data this is the response call,which should return an successful response with status code 201', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };
            responseEnvelope.created(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });


        it('c) upon on a deletion of a item/data this is the response call, which should return an successful response with status code 204', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };
            responseEnvelope.noContent(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('d) upon on a reset view/UI, this is the response call, which should return an successful response with status code 205', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.resetContent(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('e) upon on a server unable to process the request due to failure in data-validation, this is the response call, which should return an successful response with status code 400', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.badRequest(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });


        it('f) upon on a invalid authentication credentials, this is the response call, which should return an successful response with status code 401', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.unauthorized(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });


        it('g) upon on a not finding the requested resource/invalid endpoint, this is the response call, which should return an successful response with status code 404', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.notFound(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('h) upon on a conflict with the current state of the server, this is the response call, which should return an successful response with status code 409', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.conflict(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('i) upon on a content type which is invalid for the current request, this is the response call, which should return an successful response with status code 422', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.unprocessableEntity(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('j) upon on server encountering an situation it does not know how to handle, this is the response call, which should return an successful response with status code 500', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.internalServerError(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('k) upon on a client trying  to access content to which he does not have authorization, this is the response call, which should return an successful response with status code 403', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.forbidden(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });

        it('l) upon on a response is sent whose content has been permanently delete from server, this is the response call, which should return an successful response with status code 410', async function() {

            let res = {
                status: sinon.stub().returns({
                    send: sinon.stub().resolves()
                })
            };
            
            let req = {

            };

            let data = {

            };

            responseEnvelope.gone(data,req,res);
            sinon.assert.called(res.status);
            sinon.assert.called(res.status().send);
            sinon.assert.calledOnce(res.status().send);

        });


    });
   
    it('d) upon on a server facing an unknown error which does not fall in any expected class , this is the response call, which should return an successful response with status code 500', async function() {

        let res = {
            status: sinon.stub().returns({
                send: sinon.stub().resolves()
            })
        };
        
        let req = {

        };

        let data = {

        };

        responseEnvelope.unknownCause(data,req,res);
        sinon.assert.called(res.status);
        sinon.assert.called(res.status().send);
        sinon.assert.calledOnce(res.status().send);

    });
    
});
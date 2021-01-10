const userModel = require('./userModel');


const createUser = async (data) => {

    try {
        return await userModel.create(data);
    } catch (e) {
        throw e;
    }

}

const findById = async (query, filter) => {

    try {
        return await userModel.findById(query, filter);
    } catch (e) {
        throw e;
    }

}

const getAllUsers = async (query, filter) => {

    try {
        return await userModel.find(query,filter);
    } catch (e) {
        throw e;
    }

}


module.exports = {
    getAllUsers, findById, createUser
}


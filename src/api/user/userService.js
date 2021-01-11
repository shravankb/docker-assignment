const userDAL = require('./userDAL');
const customError = require('../../utils/error');


const addNewUser = async (body) => {

    try {
        body.isArchived = false;
        return await userDAL.createUser(body);
    } catch (e) {
    
        throw new customError("Duplicated Value", "Email already exists. Email cannot be duplicated", 409, "CONFLICT");

    }
}


const findUser = async (paramBody) => {

    try {

        let user = await userDAL.findById( {_id:paramBody.userId} );
        
        if(!user){
            throw new customError("Resource Not Found", "Resource Not Found | Resource has been removed", 409, "CONFLICT");
        }
        
        return user;

    } catch (e) {

        throw e;
    
    }

}

const fetchUsers = async () => {

    try {
        
        return await userDAL.getAllUsers({ isArchived:false },{});
        
    } catch (e) {
        throw e;
    }

}



module.exports = {
    findUser, addNewUser, fetchUsers
};
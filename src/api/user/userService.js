const userDAL = require('./userDAL');



const addNewUser = async (body) => {

    try {
        body.isArchived = false;
        return await userDAL.createUser(body);
    } catch (e) {
        throw e;
    }
}


const findUser = async (paramBody) => {

    try {

        let user = await userDAL.findById( {_id:paramBody.userId} );
        
        if(!user){
            throw new Error('User Not Found');
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


const deleteUser = async (paramBody) => {

    try {
        
        return await userDAL.deleteUserById({_id:paramBody.userId}, { isArchived: true }); 
        
    } catch (e) {
        throw e;
    }

}

module.exports = {
    findUser, addNewUser, fetchUsers, deleteUser
};
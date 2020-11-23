const userDAL = require('./userDAL');



const addNewUser = async (body) => {

    try {
        return await userDAL.createUser(body);
    } catch (e) {
        throw e;
    }
}


const findUser = (paramBody) => {

    try {

        let user = await userDAL.findById( {_id:paramBody} );
        if(!user){
            throw new Error('User Not Found');
        }

    } catch (e) {

        throw e;
    
    }

}

const fetchUsers = () => {

    try {
        
        return await userDAL.getAllUsers();
        
    } catch (e) {
        throw e;
    }

}


const deleteUser = (paramBody) => {

    try {
        
        return deleteUser = await userDAL.deleteUserById({_id:paramBody}); 
        
    } catch (e) {
        throw e;
    }

}

module.exports = {
    findUser, addNewUser, fetchUsers, deleteUser
};
const userDAL = require('./userDAL');



const addNewUser = async (body) => {

    try {
        return await userDAL.createUser(body);
    } catch (e) {
        throw e;
    }
}


const findUser = async (paramBody) => {

    try {

        let user = await userDAL.findById( {_id:paramBody} );
        if(!user){
            throw new Error('User Not Found');
        }

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
        
        return deleteUser = await userDAL.deleteUserById({_id:paramBody}, { isArchived: true }); 
        
    } catch (e) {
        throw e;
    }

}

module.exports = {
    findUser, addNewUser, fetchUsers, deleteUser
};
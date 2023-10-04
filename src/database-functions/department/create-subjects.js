const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db=admin.firestore();

const createSubjects = async data =>{
   try {
        await db.collection(COLLECTIONS.DEPARTMENT).doc(data.departId).collection(COLLECTIONS.SUBJECT).doc(data.id).create(data);
        return true;
    }   catch (error) {
        return error;
    }   

};
module.exports={createSubjects};
const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createFaculty = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).set(collegeData);   

    
    return true;
  } catch (error) {
    return error;
  }
};


module.exports = { createFaculty };
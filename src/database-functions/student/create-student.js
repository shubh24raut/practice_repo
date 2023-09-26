const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createStudent = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.STUDENT).doc(collegeData.id).set(collegeData); 
    return true;
  } catch (error) {
    return error;
  }
};
module.exports = { createStudent };


const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createStudent = async (stuData) => {
  try {
    await db.collection(COLLECTIONS.STUDENT).doc(stuData.id).set(stuData);   
    
    return true;
  } catch (error) {
    return error;
  }
};

module.exports = { createStudent };
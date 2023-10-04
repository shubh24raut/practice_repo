const admin=require('../../config/firebase_config');
const {COLLECTIONS}= require('../../constants/collection-constants');
const db= admin.firestore();

const updateFaculty = async collegeData => {
    try {
      await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).update(collegeData);
      return true;
    } catch (error) {
      return error;
    }
  };
  module.exports = {updateFaculty};
  
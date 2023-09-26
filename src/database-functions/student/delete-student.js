const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');

const db = admin.firestore();

const deleteStudent = async (collegeData )=> {
  try {
    await db.collection(COLLECTIONS.STUDENT).doc(collegeData.id).set(collegeData);   
    await deletedStudentCount(collegeData.departId);
    return true;
  } catch (error) {
    return error;
  }
};
module.exports = {deleteStudent};

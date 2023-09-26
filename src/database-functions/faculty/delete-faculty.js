const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const generateResponse = require('../../utils/generate-response');
const db = admin.firestore();

const deleteFaculty = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).delete(collegeData);   
    await deletedFacultyCount(collegeData.departId);
    return true;
  } catch (error) {
    return error;
  }
};
const deletedFacultyCount = async (departmentId) => {
  try {
    const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departmentId);
    const departmentDoc = await departmentRef.get();

    if (departmentDoc.exists) {
      const currentTotalFaculty = departmentDoc.data().total_faculties || 0;
      await departmentRef.update({ total_faculties: currentTotalFaculty - 1 });
      //return res.send(generateResponse("faculty count decremented"))
    } else {
      throw new Error('Department document does not exist.');
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { deleteFaculty };






















//const admin = require('../../config/firebase_config');
//const { COLLECTIONS } = require('../../constants/collection-constants');

//const db = admin.firestore();

//const deleteFaculty = async deptData => {
//        try {
  //        await db.collection(COLLECTIONS.FACULTY).doc(deptData.id).delete(deptData);
    //      return true;
      //  } catch (error) {
        ////  return error;
        //}
//};
//module.exports = {deleteFaculty};

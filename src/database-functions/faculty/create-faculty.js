const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createFaculty = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).set(collegeData);   
    await updateDepartmentFacultyCount(collegeData.departId);
    
    return true;
  } catch (error) {
    return error;
  }
};
const updateDepartmentFacultyCount = async (departmentId,res) => {
  try {
    const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departmentId);
    const departmentDoc = await departmentRef.get();

    if (departmentDoc.exists) {
      const currentTotalFaculties = departmentDoc.data().total_faculties || 0;
      await departmentRef.update({ total_faculties: currentTotalFaculties + 1 });
     // return res.send(generateResponse("faculty count updated"));
    } else {
      throw new Error('Department document does not exist.');
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { createFaculty };




//const admin = require('../../config/firebase_config');
//const { COLLECTIONS } = require('../../constants/collection-constants');
//const db = admin.firestore();


//const createFaculty = async collegeData => {
 // try {
    
  //  await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).create(collegeData);
    //await db.collection(COLLECTIONS.DEPARTMENT).doc(collegeData.id).create(collegeData);
    //return true;
 // } catch (error) {
   // return error;
  //}
//};

//module.exports = {createFaculty};


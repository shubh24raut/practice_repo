const admin = require('../../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createStudent = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.STUDENT).doc(collegeData.id).set(collegeData);   
    await updateDepartmentStudentCount(collegeData.departId);
    return true;
  } catch (error) {
    return error;
  }
};
const updateDepartmentStudentCount = async (departmentId) => {
  try {
    const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departmentId);
    const departmentDoc = await departmentRef.get();

    if (departmentDoc.exists) {
      const currentTotalStudents = departmentDoc.data().total_students || 0;
      await departmentRef.update({ total_students: currentTotalStudents + 1 });
    } else {
      throw new Error('Department document does not exist.');
    }
  } catch (error) {
    throw error;
  }
};

module.exports = { createStudent };


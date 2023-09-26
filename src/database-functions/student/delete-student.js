const admin = require('../../../config/firebase_config');
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
const deletedStudentCount = async (departmentId,res) => {
  try {
    const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departmentId);
    const departmentDoc = await departmentRef.get();

    if (departmentDoc.exists) {
      const currentTotalStudents = departmentDoc.data().total_students || 0;
      await departmentRef.update({ total_students: currentTotalStudents - 1 });
      return res.send(generateResponse("student count decremented"))
    } else {
      throw new Error('Department document does not exist.');
    }
  } catch (error) {
    throw error;
  }
};
module.exports = {deleteStudent};

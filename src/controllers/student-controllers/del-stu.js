const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();
const generateResponse = require('../../utils/generate-response');
const { updateDepartment } = require('../../database-functions/department/update-department');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const delStuController = async (req, res, next) => {
  
try {
  const {body:
              {id = ''}}=req;
  const data ={id}; 


  const student = await db.collection(COLLECTIONS.STUDENT).doc(id).get();

  if (!student.exists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Student not found');}

  const studentData = student.data();
  const departId = studentData.departId;
  const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departId);
  const department = await departmentRef.get();
  if (!department.exists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Dept not found');
  }

  const deptData = department.data();
  const { total_students: prevStudentCount } = deptData;
  await updateDepartment({ id: departId, total_students: prevStudentCount - 1 });

  // Delete the faculty document
  await db.collection(COLLECTIONS.STUDENT).doc(id).delete();
  return res.send(generateResponse('Student deleted'));

} catch (error) {}
};
    
module.exports = delStuController;


const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();
const generateResponse = require('../../utils/generate-response');
const { updateDepartment } = require('../../database-functions/department/update-department');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const delFacController = async (req, res, next) => {
  
try {
  const {body:
              {id = ''}}=req;
  const data ={id}; 

  const faculty = await db.collection(COLLECTIONS.FACULTY).doc(id).get();

  if (!faculty.exists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Faculty not found');
  }
  const facultyData = faculty.data();
  const departId = facultyData.departId;

  const departmentRef = db.collection(COLLECTIONS.DEPARTMENT).doc(departId);
  const department = await departmentRef.get();

  if (!department.exists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Dept not found');
  }

  const deptData = department.data();
  const { total_faculties: totalFaculty } = deptData;
  await updateDepartment({ id: departId, total_faculties: totalFaculty - 1 });

  await db.collection(COLLECTIONS.FACULTY).doc(id).delete();
  return res.send(generateResponse('Faculty is deleted'));
} catch (error) {}
};
module.exports = delFacController;

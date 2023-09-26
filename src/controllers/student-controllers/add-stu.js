const uuid = require('uuid');
const {createStudent} = require('../../database-functions/student/create-student');
const generateResponse = require('../../utils/generate-response');
const { updateDepartment } = require('../../database-functions/department/update-department');
const { getDeptById } = require('../../database-functions/department/get-dept-by-id');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const addStuController = async (req, res, next) => {
  try {
    const {
      body: {
        address='',
        contact = '',
        admission_year = '',
        departId = '',
        email= '',
        name= '',
        
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      address,
      contact,
      admission_year,
      departId,
      email,
      name,
    };
    await createStudent(data);
    const department = await getDeptById(departId);
    if(!department.exists){
      throw new ApiError(httpStatus.NOT_FOUND, 'Dept not found')
    }
  const deptData = department.data();
  const { total_students: prevStudentCount } = deptData;
  await updateDepartment({id: departId, total_students: prevStudentCount + 1}); 
  return res.send(generateResponse("student added"));
  } catch (error) {
    return next(error);
  }
  
};
module.exports = addStuController;

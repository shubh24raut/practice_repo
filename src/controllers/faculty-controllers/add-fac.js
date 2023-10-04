const uuid = require('uuid');
const {createFaculty} = require('../../database-functions/faculty/create-faculty');
const generateResponse = require('../../utils/generate-response');
const { updateDepartment } = require('../../database-functions/department/update-department');
const { getDeptById } = require('../../database-functions/department/get-dept-by-id');
const ApiError = require('../../utils/ApiError');
const httpStatus = require('http-status');

const addFacController = async (req, res, next) => {
  try {
    const {
      body: {
        
        contact = '',
        country_code = '',
        departId = '',
        designation = '',
        email= '',
        name,
        
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      contact,
      country_code,
      departId,
      designation,
      email,
      name,
    };
    await createFaculty(data);
    const department = await getDeptById(departId);
    if(!department.exists){
      throw new ApiError(httpStatus.NOT_FOUND, 'Dept not found')
    }
  const deptData = department.data();
  const { total_faculties: totalFaculty } = deptData;
  await updateDepartment({id: departId, total_faculties: totalFaculty + 1}); 
  return res.send(generateResponse("faculty added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addFacController;



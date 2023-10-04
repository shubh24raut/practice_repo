const uuid = require('uuid');
const { updateDepartment } = require('../../database-functions/department/update-department');
const generateResponse = require('../../utils/generate-response');
const lodash = require('lodash');


const updDeptController = async (req, res, next) => {
  try {
    const {
      body: {
        id ,
        name ,
        total_classrooms ,
        total_faculties ,
        total_students ,
        total_lab,
      },
    } = req;
    
    let data = {
      id,
      name,
      total_classrooms,
      total_faculties,
      total_students,
      total_lab
    };
    data = lodash.pickBy(data, lodash.identity);
    await updateDepartment(data);
    

    return res.send(generateResponse("dept is updated"));
  } catch (error) {
    return next(error);
  }
};
module.exports = updDeptController;

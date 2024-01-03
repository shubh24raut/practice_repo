const uuid = require('uuid');
const { createDepartment } = require('../../database-functions/department/create-department');
const generateResponse = require('../../utils/generate-response');

const addDeptController = async (req, res, next) => {
  try {
    const {
      body: {
        
        name = 'name',
        total_classrooms = '',
        total_faculties = '',
        total_students = '',
        total_lab= '',
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      name,
      total_classrooms,
      total_faculties,
      total_students,
      total_lab
    };
    await createDepartment(data);

    return res.send(generateResponse("dept added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addDeptController;

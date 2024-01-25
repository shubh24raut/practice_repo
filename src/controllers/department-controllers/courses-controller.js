const uuid = require('uuid');
const { createCourses } = require('../../database-functions/department/create-courses');
const generateResponse = require('../../utils/generate-response');

const addCourseController = async (req, res, next) => {
  try {
    const {
      body: {
        
        name = '',
        marks = '',
        departId='',
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      name,
      marks,
      departId
    };
    await createCourses(data);

    return res.send(generateResponse("course added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addCourseController;

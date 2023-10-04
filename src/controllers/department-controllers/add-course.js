const uuid = require('uuid');
const { createCourses } = require('../../database-functions/department/create-courses');
const generateResponse = require('../../utils/generate-response');

const addCourseController = async (req, res, next) => {
  try {
    const {
      body: {
        
        name = '',
        course_fees = '',
        departId='',
        course_year =''
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      name,
      course_fees,
      departId,
      course_year
    };
    await createCourses(data);

    return res.send(generateResponse("course added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addCourseController;

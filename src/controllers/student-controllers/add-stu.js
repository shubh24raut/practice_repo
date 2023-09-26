const uuid = require('uuid');
const {createStudent} = require('../../database-functions/student/create-student');
const generateResponse = require('../../utils/generate-response');

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

    return res.send(generateResponse("student added"));
  } catch (error) {
    return next(error);
  }
  
};
module.exports = addStuController;

const uuid = require('uuid');
const {updateStudent} = require('../../database-functions/student/update-student');
const generateResponse = require('../../utils/generate-response');

const updStuController = async (req, res, next) => {
  try {
    const {
      body: {
        address,
        contact ,
        admission_year ,
        departId ,
        email,
        name,
        
      },
    } = req;
    
    const data = {
      id,
      address,
      contact,
      admission_year,
      departId,
      email,
      name,
    };
    await updateStudent(data);

    return res.send(generateResponse("student updated"));
  } catch (error) {
    return next(error);
  }
  
};
module.exports = updStuController;

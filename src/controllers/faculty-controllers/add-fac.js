const uuid = require('uuid');
const {createFaculty} = require('../../database-functions/faculty/create-faculty');
const generateResponse = require('../../utils/generate-response');

const addFacController = async (req, res, next) => {
  try {
    const {
      body: {
        
        contact = '',
        country_code = '',
        departId = '',
        designation = '',
        email= '',
        name= '',
        
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
    return res.send(generateResponse("faculty added"));
  } catch (error) {
    return next(error);
  }
};


module.exports = addFacController;


const {updateFaculty} = require('../../database-functions/faculty/update-faculty');
const generateResponse = require('../../utils/generate-response');
const lodash = require('lodash');
const updFacController = async (req, res, next) => {
  try {
    const {
      body: {
        
        contact ,
        country_code ,
        departId ,
        designation ,
        email,
        name,
        
      },
    } = req;
    
    const data = {
      
      id,
      contact,
      country_code,
      departId,
      designation,
      email,
      name,
    };
    data = lodash.pickBy(data, lodash.identity);
    await updateFaculty(data);

    return res.send(generateResponse("faculty updated"));
  } catch (error) {
    return next(error);
  }
};
module.exports = updFacController;


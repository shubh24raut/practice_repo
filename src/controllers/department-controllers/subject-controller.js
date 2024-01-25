const uuid = require('uuid');
const generateResponse = require('../../utils/generate-response');
const { createSubject } = require('../../database-functions/department/create-subject');


const addSubjectController = async (req, res, next) => {
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
    await createSubject(data);

    return res.send(generateResponse("subject added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addSubjectController;

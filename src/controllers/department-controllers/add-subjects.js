const uuid = require('uuid');
const { createSubjects } = require('../../database-functions/department/create-subjects');
const generateResponse = require('../../utils/generate-response');

const addSubjectController = async (req, res, next) => {
  try {
    const {
      body: {
        
        sub_name = '',
        sub_marks = '',
        departId='',
        sub_books =''
      },
    } = req;
    const id= uuid.v4();
    const data = {
      id,
      sub_name,
      sub_marks,
      departId,
      sub_books
    };
    await createSubjects(data);

    return res.send(generateResponse("subject  added"));
  } catch (error) {
    return next(error);
  }
};
module.exports = addSubjectController;


const uuid = require('uuid');
const { deleteStudent } = require('../../database-functions/student/delete-student');
const generateResponse = require('../../utils/generate-response');
//const admin = require('../../config/firebase_config');

const delStuController = async (req, res, next) => {
  
    try {
        const {
            body: {id = ''}}=req;
              
              const data = {
                id};

      await deleteStudent(data);
      return res.send(generateResponse("student deleted"));
    } catch (error) {
      return next(error);
    }

};
    
module.exports = delStuController;

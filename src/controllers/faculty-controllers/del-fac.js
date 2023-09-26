const uuid = require('uuid');
const { deleteFaculty } = require('../../database-functions/faculty/delete-faculty');
const generateResponse = require('../../utils/generate-response');
//const admin = require('../../../config/firebase_config');

const delFacController = async (req, res, next) => {
  
    try {
        const {
            body: {id = ''}}=req;
              
              const data = {
                id};

      await deleteFaculty(data);
      return res.send(generateResponse("faculty deleted"));
    } catch (error) {
      return next(error);
    }
};
    
module.exports = delFacController;

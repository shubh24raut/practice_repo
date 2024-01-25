const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const generateResponse = require('../../utils/generate-response');
const db = admin.firestore();

const deleteFaculty = async (collegeData) => {
  try {
    await db.collection(COLLECTIONS.FACULTY).doc(collegeData.id).delete(collegeData);   
    
    return true;
  } catch (error) {
    return error;
  }
};


module.exports = { deleteFaculty };






















//const admin = require('../../config/firebase_config');
//const { COLLECTIONS } = require('../../constants/collection-constants');

//const db = admin.firestore();

//const deleteFaculty = async deptData => {
//        try {
  //        await db.collection(COLLECTIONS.FACULTY).doc(deptData.id).delete(deptData);
    //      return true;
      //  } catch (error) {
        ////  return error;
        //}
//};
//module.exports = {deleteFaculty};

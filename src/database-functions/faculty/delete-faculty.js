const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');

const db = admin.firestore();

const deleteFaculty = async deptData => {
        try {
          await db.collection(COLLECTIONS.FACULTY).doc(deptData.id).delete(deptData);
      
          return true;
        } catch (error) {
          return error;
        }
};


module.exports = {deleteFaculty};

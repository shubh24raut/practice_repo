
const admin=require('../../config/firebase_config');
const {COLLECTIONS}= require('../../constants/collection-constants');
const db=admin.firestore();




const getDeptById = async deptId => {
        try {
          const dept = await db.collection(COLLECTIONS.DEPARTMENT).doc(deptId).get();
          return dept;
        } catch (error) {
          return error;
        }
};
module.exports = {getDeptById};


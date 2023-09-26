const admin = require('../../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');

const db = admin.firestore();

const updateDepartment = async collegeData => {
        try {
          await db.collection(COLLECTIONS.DEPARTMENT).doc(collegeData.id).update(collegeData);
          return true;
        } catch (error) {
          return error;
        }
};
module.exports = {updateDepartment};


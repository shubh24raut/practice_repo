const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');

const db = admin.firestore();

const deleteStudent = async stuData => {
        try {
          await db.collection(COLLECTIONS.STUDENT).doc(stuData.id).delete(stuData);
          return true;
        } catch (error) {
          return error;
        }
};
module.exports = {deleteStudent};

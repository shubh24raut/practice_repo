const admin = require('../../config/firebase_config');
const db = admin.firestore();
const {COLLECTIONS}=require('../../constants/collection-constants');
const fetchFacultyData = async (req, res) => {
  try {
    const {
      body: { id = '' },
    } = req;
    const facultyRef = db.collection(COLLECTIONS.FACULTY);
    const querySnapshot = await facultyRef.where('departId', '==', id).get();
    const faculties = [];
    querySnapshot.forEach((doc) => {
      faculties.push(doc.data());
    });

    res.status(200).json(faculties);
  } catch (error) {
  }
};

module.exports = fetchFacultyData;

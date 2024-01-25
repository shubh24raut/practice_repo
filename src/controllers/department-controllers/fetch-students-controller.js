const admin = require('../../config/firebase_config');
const db = admin.firestore();
const {COLLECTIONS}=require('../../constants/collection-constants');
const fetchStuData = async (req, res) => {
  try {
    const {
      body: { id = '' },
    } = req;
    const studentsRef = db.collection(COLLECTIONS.STUDENT);
    const querySnapshot = await studentsRef.where('departId', '==', id).get();
    const students = [];
    querySnapshot.forEach((doc) => {
      students.push(doc.data());
    });

    res.status(200).json(students);
  } catch (error) {
  }
};

module.exports = fetchStuData;

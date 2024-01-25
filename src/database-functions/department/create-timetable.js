const { times } = require('lodash');
const admin = require('../../config/firebase_config');
const { COLLECTIONS } = require('../../constants/collection-constants');
const db = admin.firestore();

const createTimetable = async (data) => {
  try {
    const subjects = await getSubjects(data.id);
    const courses = await getCourses(data.id);
    
    const timetable = generateTimetable(subjects, courses);
    //console.log(timetable);
    return timetable;
  } catch (error) {
    return error;
  }
};
const schedulePattern = {
  Monday: [
    { time: '10-12', type: 'course', name: 'course' },
    { time: '12-1', type: 'break' },
    { time: '1-2', type: 'subject', name: 'subject' },
    { time: '2-3', type: 'subject', name: 'subject' },
    { time: '3-5', type: 'course', name: 'course' },
  ],
  Tuesday: [
    { time: '10-11', type: 'subject', name: 'subject' },
    { time: '11-12', type: 'subject', name: 'subject' },
    { time: '12-1', type: 'break' },
    { time: '1-3', type: 'course', name: 'course' },
    { time: '3-5', type: 'course', name: 'course' },
  ],
  Wednesday: [
    { time: '10-12', type: 'course', name: 'course' },
    { time: '12-1', type: 'break' },
    { time: '1-2', type: 'subject', name: 'subject' },
    { time: '2-3', type: 'subject', name: 'subject' },
    { time: '3-5', type: 'course', name: 'course' },
  ],
  Thursday: [
    { time: '10-11', type: 'subject', name: 'subject' },
    { time: '11-12', type: 'subject', name: 'subject' },
    { time: '12-1', type: 'break' },
    { time: '1-3', type: 'course', name: 'course' },
    { time: '3-5', type: 'course', name: 'course' },
  ],
  Friday: [
    { time: '10-12', type: 'course', name: 'course' },
    { time: '12-1', type: 'break' },
    { time: '1-2', type: 'subject', name: 'subject' },
    { time: '2-3', type: 'subject', name: 'subject' },
    { time: '3-5', type: 'course', name: 'course' },
  ],
  Saturday: [
    { time: '10-11', type: 'subject', name: 'subject' },
    { time: '11-12', type: 'subject', name: 'subject' },
    { time: '12-1', type: 'break' },
    { time: '1-3', type: 'course', name: 'course' },
    { time: '3-5', type: 'course', name: 'course' },
  ]
};

async function getSubjects (id) {
  try {
    const subjectsRef = db.collection(COLLECTIONS.DEPARTMENT)
      .doc(id)
      .collection(COLLECTIONS.SUBJECT);

    const snapshot = await subjectsRef.get();
    const subjectsData = [];

    snapshot.forEach((doc) => {
      subjectsData.push(doc.data());
    });

    return subjectsData;
  } catch (error) {
    console.error('Error retrieving subjects:', error);
    return null;
  }
}

async function getCourses(id) {
  try {
    const coursesRef = db.collection(COLLECTIONS.DEPARTMENT)
      .doc(id)
      .collection(COLLECTIONS.COURSES);

    const snapshot = await coursesRef.get();
    const coursesData = [];

    snapshot.forEach((doc) => {
      coursesData.push(doc.data());
    });

    return coursesData;
  } catch (error) {
    console.error('Error retrieving courses:', error);
    return null;
  }
}

function generateTimetable(subjects, courses) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const timetable = {};
  daysOfWeek.forEach((day) => {
    if (schedulePattern[day]) {
      const  lectures = [];
      const availableSubjects = [...subjects]; // Create a copy of subjects
      const availableCourses = [...courses]; // Create a copy of courses

      schedulePattern[day].forEach((period) => {
        const { time, type } = period;
        let name = '';

        if (type === 'subject' && availableSubjects.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableSubjects.length);
          name = availableSubjects.splice(randomIndex, 1)[0].name;
          
        } else if (type === 'course' && availableCourses.length > 0) {
          const randomIndex = Math.floor(Math.random() * availableCourses.length);
          name = availableCourses.splice(randomIndex, 1)[0].name;
          
        }

        lectures.push({ time, type, name });
      });
      timetable[day] = { lectures };
    }
  });

  return timetable;
}

function getRandomItem(array) {
  if (array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

module.exports = { createTimetable };

const uuid = require('uuid');
const { createTimetable } = require('../../database-functions/department/create-timetable');
const generateResponse = require('../../utils/generate-response');

const timetableController = async (req, res, next) => {
  try {
    const {
      body: {
        id='',
        day='',
      },
    } = req;
   
    const data = {
      id,
      day
    };
    console.log(data)
    const Result = await createTimetable(data);

    return res.send(Result[day]);
  } catch (error) {
    return next(error);
  }
};
module.exports = timetableController;

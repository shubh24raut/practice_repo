
const express = require('express');
const router = express.Router();


const departmentRoutes = require('./dept-route/dept-route');

const facultyRoutes = require('./fac-route/faculty-routes');

const studentRoutes = require('./stu-route/student-route');

router.use('/department', departmentRoutes);
router.use('/faculty', facultyRoutes);
router.use('/student', studentRoutes);

module.exports = router;



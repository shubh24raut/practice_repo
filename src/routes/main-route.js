
const express = require('express');
const router = express.Router();


const departmentRoutes = require('./dept-route/dept-route');

const addFacultyRoutes = require('./fac-route/add-fac-route');
const delFacultyRoutes = require('./fac-route/del-fac-route');
const updFacultyRoute = require('./fac-route/upd-fac-route');

const addStudentRoutes = require('./stu-route/add-stu-route');
const delStudentRoutes = require('./stu-route/del-stu-route');
const updStudentRoute = require('./stu-route/upd-stu-route')


router.use('/department', departmentRoutes);
router.use('/faculty', addFacultyRoutes, delFacultyRoutes,updFacultyRoute);
router.use('/student', addStudentRoutes, delStudentRoutes,updStudentRoute);

module.exports = router;



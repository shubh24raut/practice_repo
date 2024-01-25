const express = require('express');

const addDeptController = require('../../controllers/department-controllers/add-dept');
const {addDeptValidator, updDeptValidator} = require('../../validators/department_validators');
const validateSchema = require('../../validators/validator');
const updDeptController = require('../../controllers/department-controllers/upd-dept');
const fetchStuData = require('../../controllers/department-controllers/fetch-students-controller');
const fetchFacultyData = require('../../controllers/department-controllers/fetch-faculty-controller');
const addCourseController= require('../../controllers/department-controllers/courses-controller');
const addCourseValidator=require('../../validators/department_validators/create_course_validator');
const addSubjectController=require('../../controllers/department-controllers/subject-controller');
const addSubValidator= require('../../validators/department_validators/create_subject_validator');
const timetableController=require('../../controllers/department-controllers/timetable-controller');


const router = express.Router();

router.post('/add-dept',addDeptValidator,validateSchema, addDeptController);
router.put('/upd-dept',updDeptValidator,validateSchema, updDeptController);
router.get('/fetch-students',fetchStuData);
router.get('/fetch-faculty',fetchFacultyData);
router.post('/add-course',addCourseValidator,validateSchema,addCourseController);
router.post('/add-sub',addSubValidator,validateSchema,addSubjectController);
router.post('/timetable',timetableController);


module.exports=router;


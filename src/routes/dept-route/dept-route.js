//const express = require('express');

//const addDeptController = require('../../controllers/department-controllers/add-dept');
//const {addDeptValidator } = require('../../validators/department_validators');
//const validateSchema = require('../../validators/validator');

//const router = express.Router();
//router.get('/test', (req,res) => {
  //res.send('Hello');
//});
//router.post('/add-dept',addDeptValidator , validateSchema, addDeptController);
//module.exports=router;
const express = require('express');
const router = express.Router();
const validateSchema = require('../../validators/validator');

const addDeptController = require('../../controllers/department-controllers/add-dept');
const updDeptController = require('../../controllers/department-controllers/upd-dept');


const {addDeptValidator,updDeptValidator } = require('../../validators/department_validators');
const addCourseController= require('../../controllers/department-controllers/add-course');
const addCourseValidator=require('../../validators/department_validators/create_course_validator');


//router.get('/test', (req,res) => {
  //res.send('Hello');
//});

router.post('/add-course',addCourseValidator,validateSchema,addCourseController);
router.post('/add-dept',addDeptValidator,validateSchema, addDeptController);
router.put('/upd-dept',updDeptValidator,validateSchema, updDeptController);

module.exports=router;

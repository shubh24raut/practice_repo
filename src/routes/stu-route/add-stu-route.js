//const express = require('express');
//const addStuController = require('../../controllers/student-controllers/add-stu');
//const { addStuValidator } = require('../../validators/student_validators');
//const validateSchema = require('../../validators/validator');
//const router = express.Router();
//router.get('/test', (req,res) => {
//  res.send('Hello');
//});
//router.post('/add-stu',addStuValidator , validateSchema, addStuController);

//module.exports=router;
const express = require('express');

const addStuController = require('../../controllers/student-controllers/add-stu');
const {addStuValidator } = require('../../validators/student_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();
//router.get('/test', (req,res) => {
  //res.send('Hello');
//});


router.post('/add-stu',addStuValidator,validateSchema, addStuController);

module.exports=router;
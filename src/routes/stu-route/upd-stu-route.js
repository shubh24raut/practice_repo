const express = require('express');

const updStuController = require('../../controllers/student-controllers/upd-stu');
const {updStuValidator } = require('../../validators/student_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.put('/upd-stu',updStuValidator,validateSchema,updStuController);

module.exports=router;

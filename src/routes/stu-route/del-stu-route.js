const express = require('express');

const delStuController = require('../../controllers/student-controllers/del-stu');
const {delStuValidator } = require('../../validators/student_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.delete('/del-stu',delStuValidator,validateSchema, delStuController);

module.exports=router;

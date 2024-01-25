
const express = require('express');

const addStuController = require('../../controllers/student-controllers/add-stu');
const delStuController = require('../../controllers/student-controllers/del-stu');
const updStuController = require('../../controllers/student-controllers/upd-stu');
const {addStuValidator,delStuValidator,updStuValidator } = require('../../validators/student_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.delete('/del-stu',delStuValidator,validateSchema, delStuController);
router.post('/add-stu',addStuValidator,validateSchema, addStuController);
router.put('/upd-stu',updStuValidator,validateSchema,updStuController);

module.exports=router;
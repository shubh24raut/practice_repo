
const express = require('express');

const updDeptController = require('../../controllers/department-controllers/upd-dept');
const {updDeptValidator } = require('../../validators/department_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.put('/upd-dept',updDeptValidator,validateSchema, updDeptController);

module.exports=router;

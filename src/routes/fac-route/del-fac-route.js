const express = require('express');

const delFacController = require('../../controllers/faculty-controllers/del-fac');
const {delFacValidator } = require('../../validators/faculty_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.delete('/del-fac',delFacValidator,validateSchema, delFacController);

module.exports=router;


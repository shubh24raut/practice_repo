const express = require('express');

const updFacController = require('../../controllers/faculty-controllers/upd-fac');
const {updFacValidator } = require('../../validators/faculty_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.put('/upd-fac',updFacValidator,validateSchema, updFacController);

module.exports=router;


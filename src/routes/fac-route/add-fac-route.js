
const express = require('express');

const addFacController = require('../../controllers/faculty-controllers/add-fac');
const {addFacValidator } = require('../../validators/faculty_validators');
const validateSchema = require('../../validators/validator');

const router = express.Router();

router.post('/add-fac',addFacValidator,validateSchema ,addFacController);


module.exports=router;
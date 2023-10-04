
const express = require('express');

const addFacController = require('../../controllers/faculty-controllers/add-fac');
const delFacController = require('../../controllers/faculty-controllers/del-fac');
const updFacController = require('../../controllers/faculty-controllers/upd-fac');
const {addFacValidator,delFacValidator,updFacValidator} = require('../../validators/faculty_validators');
const validateSchema = require('../../validators/validator');
const router = express.Router();

router.post('/add-fac',addFacValidator,validateSchema ,addFacController);
router.delete('/del-fac',delFacValidator,validateSchema, delFacController);
router.put('/upd-fac',updFacValidator,validateSchema, updFacController);


module.exports=router;
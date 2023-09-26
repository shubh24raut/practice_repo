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

const addDeptController = require('../../controllers/department-controllers/add-dept');
const {addDeptValidator, updDeptValidator } = require('../../validators/department_validators');
const validateSchema = require('../../validators/validator');
const updDeptController = require('../../controllers/department-controllers/upd-dept');

const router = express.Router();
//router.get('/test', (req,res) => {
  //res.send('Hello');
//});


router.post('/add-dept',addDeptValidator,validateSchema, addDeptController);
router.put('/upd-dept',updDeptValidator,validateSchema, updDeptController);

module.exports=router;

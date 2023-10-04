const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const updFacValidator = checkSchema({
  name: {
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },},
    id:{
      exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'id'),
      },
      isString: {
        errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'id'),
      },
    },
  
  designation: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'designation',),
    },
  },
  country_code: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}','country_code',),
    },
  },
  contact: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace( '{{ input }}','contact', ),
    },
  },
  depart_Id: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}','depart_Id',),
    },
  }, 
  email: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}','email',),
    },
  }
});

module.exports = updFacValidator;

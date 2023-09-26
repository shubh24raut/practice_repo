const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const updStuValidator = checkSchema({
  name: {
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  id:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'id'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'id'),
    },
  },
  address: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'address',),
    },
  },
  admission_year: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace('{{ input }}','admission year',),
    },
  },
  contact: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace( '{{ input }}','contact', ),
    },
  },
  depart_Id: {
    exists: {
        errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'depart_Id'),
      },
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

module.exports = updStuValidator;

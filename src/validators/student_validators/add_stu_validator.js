const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addStuValidator = checkSchema({
  name: {
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
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

module.exports = addStuValidator;

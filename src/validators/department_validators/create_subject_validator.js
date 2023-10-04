
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addSubjectValidator = checkSchema({
    name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  sub_marks: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_Number').replace(
        '{{ input }}',
        'marks',
      ),
    },
  },
  departId: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace(
        '{{ input }}',
        'departId',
      ),
    },
  },
  
});

module.exports = addSubjectValidator;


const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addCourseValidator = checkSchema({
  name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  marks: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
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

module.exports = addCourseValidator;

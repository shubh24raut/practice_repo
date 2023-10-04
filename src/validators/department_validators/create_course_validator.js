
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addCourseValidator = checkSchema({
    course_name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  course_fees: {
    optional: true,
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace(
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

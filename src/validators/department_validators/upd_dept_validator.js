
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const updDeptValidator = checkSchema({
  name:{
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
  total_lab: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'total_lab',
      ),
    },
  },
  total_students: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'total_students',
      ),
    },
  },
  total_faculties: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'total_faculties',
      ),
    },
  },
  total_classrooms: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'total_classrooms',
      ),
    },
  },
});

module.exports = updDeptValidator;
// name,
//total_classrooms,
//total_faculties,
//total_students,
//total_lab

  const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addDeptValidator = checkSchema({
  name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
    },
  },
  total_lab: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMBER').replace(
        '{{ input }}',
        'total_lab',
      ),
    },
  },
  total_students: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMBER').replace(
        '{{ input }}',
        'total_students',
      ),
    },
  },
  total_faculties: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMBER').replace(
        '{{ input }}',
        'total_faculties',
      ),
    },
  },
  total_classrooms: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMBER').replace(
        '{{ input }}',
        'total_classrooms',
      ),
    },
  },
});

module.exports = addDeptValidator;
// name,
//total_classrooms,
//total_faculties,
//total_students,
//total_lab
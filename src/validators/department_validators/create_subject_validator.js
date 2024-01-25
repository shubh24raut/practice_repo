
const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const addSubValidator = checkSchema({
  name:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'name'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'name'),
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
  marks: {
    optional: true,
    isNumeric: {
      errorMessage: getMessage('INPUT_NUMERIC').replace(
        '{{ input }}',
        'marks',
      ),
    },
  }
});

module.exports = addSubValidator;

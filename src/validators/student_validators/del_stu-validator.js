const { checkSchema } = require('express-validator');

const getMessage = require('../../utils/get-message');

const delStuValidator = checkSchema({
  id:{
    exists: {
      errorMessage: getMessage('INPUT_REQUIRED').replace('{{ input }}', 'id'),
    },
    isString: {
      errorMessage: getMessage('INPUT_STRING').replace('{{ input }}', 'id'),
    },
  }

});

module.exports = delStuValidator;

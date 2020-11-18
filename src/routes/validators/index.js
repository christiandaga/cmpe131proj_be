import { celebrate } from 'celebrate';

import authValidator from './authValidator';
import accountValidator from './accountValidator';
import transactionValidator from './transactionValidator';

const validatorSchemas = {
  ...authValidator,
  ...accountValidator,
  ...transactionValidator,
};

export const validatorNames = {};
Object.keys(validatorSchemas).forEach(bodyValidatorName => {
  validatorNames[bodyValidatorName] = bodyValidatorName;
});

class ApiValidator {
  #checkSchemas = {};

  constructor(schemas) {
    // eslint-disable-next-line array-callback-return
    Object.entries(schemas).map(([version, schema]) => {
      this.#checkSchemas[version] = celebrate(schema, {
        abortEarly: false
      });
    });
  }

  doValidation = (req, res, next) => {
    let validations = this.#checkSchemas['0'];
    while (!validations) {
      apiVersion -= 1;
      validations = this.#checkSchemas[apiVersion.toString()];
    }

    validations(req, res, next);
  };
}

export const validateByApiVersion = bodyValidatorName => {
  const apiValidator = new ApiValidator(validatorSchemas[bodyValidatorName]);
  return apiValidator.doValidation;
};

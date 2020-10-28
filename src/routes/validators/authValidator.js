import { Joi } from 'celebrate';

export default {
  login: {
    0: {
      body: {
        username: Joi.string()
          .min(1)
          .required(),
        password: Joi.string()
          .min(1)
          .required()
      }
    }
  },
  register: {
    0: {
      body: {
        username: Joi.string()
          .min(1)
          .required(),
        password: Joi.string()
          .min(1)
          .required(),
        pin: Joi.number().required(),
      }
    }
  }
};

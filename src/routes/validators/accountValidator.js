import { Joi } from 'celebrate';

export default {
  getAccounts: {
    0: {
      query: {
        userId: Joi.string()
          .min(1)
          .required(),
      }
    }
  },
  getAccount: {
    0: {
      params: {
        accountId: Joi.string()
          .min(1)
          .required(),
      }
    }
  },
  createAccount: {
    0: {
      params: {
        accountId: Joi.string()
          .min(1)
          .required(),
      },
      body: {
        name: Joi.string()
        .min(1)
        .required(),
        ownerId: Joi.string()
        .min(1)
        .required(),
      }
    }
  },
  updateAccount: {
    0: {
      params: {
        accountId: Joi.string()
          .min(1)
          .required(),
      },
      body: {
        name: Joi.string()
        .min(1),
        ownerId: Joi.string()
        .min(1),
        amount: Joi.string()
        .min(1),
      }
    }
  },
  deleteAccount: {
    0: {
      params: {
        accountId: Joi.string()
          .min(1)
          .required(),
      }
    }
  },
};

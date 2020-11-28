import { Joi } from 'celebrate';

export default {
  getAccounts: {
    0: {
      query: {
        userId: Joi.string()
          .min(1)
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
        accountType: Joi.string()
        .min(1)
        .required(),
        currentBalance: Joi.number()
        .min(1)
        .required()
        /*name: Joi.string()
        .min(1)
        .required(),
        nth_account: Joi.string()
        .min(1)
        .required(),
        username: Joi.string()
        .min(1)
        .required(),
        unique_id: Joi.string()
        .min(1)
        .required()*/
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

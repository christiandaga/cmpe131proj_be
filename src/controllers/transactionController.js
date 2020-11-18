import httpStatus from 'http-status';

//import Transaction from '../models/Transaction.js';

export const addTransaction = async (req, res, next) => {
  const { account_name, type, amount } = req.body;

  try {
      // add Transaction
      res.status(httpStatus.OK).json(req.body);
  } catch (err) {
      next(err);
  }
}

export const getTransactions = async (req, res, next) => {
  const { accountId } = req.params;

  try {
      // get Transactions
      res.status(httpStatus.OK).json(req.params);
  } catch (err) {
      next(err);
  }
}

import httpStatus from 'http-status';

import * as accountSvc from '../services/accountService';

export const getAccounts = async (req, res, next) => {
    const { userId } = req.query;

    try {
        const accounts = await accountSvc.getAccounts(userId);
        res.status(httpStatus.OK).json(accounts);
    } catch (err) {
        next(err);
    }
}

export const getAccount = async (req, res, next) => {
    const { accountId } = req.params;

    try {
        const account = await accountSvc.getAccount(accountId);
        res.status(httpStatus.OK).json(account);
    } catch (err) {
        next(err);
    }
}

export const createAccount = async (req, res, next) => {
  const { accountId } = req.params;
  const { name, ownerId } = req.body;

  try {
      await accountSvc.createAccount(accountId, name, ownerId);
      res.status(httpStatus.OK).end();
  } catch (err) {
      next(err);
  }
}

export const updateAccount = async (req, res, next) => {
  const { accountId } = req.params;
  const updateInfo = req.body;

  try {
      await accountSvc.getAccount(accountId, updateInfo);
      res.status(httpStatus.OK).end();
  } catch (err) {
      next(err);
  }
}
export const deleteAccount = async (req, res, next) => {
  const { accountId } = req.params;

  try {
      await accountSvc.deleteAccount(accountId);
      res.status(httpStatus.OK).end();
  } catch (err) {
      next(err);
  }
}
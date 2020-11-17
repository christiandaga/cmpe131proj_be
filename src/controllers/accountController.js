import httpStatus from 'http-status';

import * as accountSvc from '../services/accountService';
import User from '../models/User';


export const getAccounts = async (req, res, next) => {
    console.log("made it here!!!! congrats auth works!!!!");
    //const { userId } = req.body.userId;
    //console.log("user Id", userId);

    try {
        //const accounts = await accountSvc.getAccounts(userId);
        //const user = await User.findOne({username: req.body.username});
        
        /*User.findById(userId.id, function(err, foundUser){
            if(err){
                throw err;
                console.log("error in getAccounts findbyID", err);
            }else{
                console.log("founduser name:", foundUser);
                console.log(foundUser.getAccounts);
            }
        });*/
        //res.status(httpStatus.OK).json(accounts);
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
import httpStatus from 'http-status';

import * as accountSvc from '../services/accountService';
import User from '../models/User';
import jwtMiddleware from '../jwtMiddleware';

//need to edit so that userId can be taken out of the params, in the error handling. accountValidator.
//PAYLOAD carries the id over here so we dont need to have it in params but we will see how it works out. 

export const getAccounts = async (req, res, next) => {
    console.log("made it here!!!! congrats auth works!!!!");
    console.log("payload id: ", req.user.id); 

    User.findById(req.user.id, function(err, foundUser){
        if(err){
            throw err;
            console.log("error in getAccounts: ", err);
        }else{
            console.log(foundUser.accounts);
            //we will res.send the acconuts to the ejs file for format and showing. 
        }
    })
}

//working on protected routes that need id.....
//we can pass id in query, id is also inside of payload if we need it. 
export const getAccount = async (req, res, next) => {
    console.log("inside getAccount");
    //this route might be unreachable
    const { accountId } = req.params;

    try {
        const account = await accountSvc.getAccount(accountId);
        res.status(httpStatus.OK).json(account);
    } catch (err) {
        next(err);
    }
}

export const createAccount = async (req, res, next) => {
    console.log("inside create account");
  //const { accountId } = req.params;
  //const { name, ownerId } = req.body;

  /*try {
      await accountSvc.createAccount(accountId, name, ownerId);
      res.status(httpStatus.OK).end();
  } catch (err) {
      next(err);
  }*/
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
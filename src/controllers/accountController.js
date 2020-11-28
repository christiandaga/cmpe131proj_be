import httpStatus from 'http-status';

import * as accountSvc from '../services/accountService';
import User from '../models/User';
import jwtMiddleware from '../jwtMiddleware';
import UserAcccount from '../models/AccountModel';
import AccountModel from '../models/AccountModel';

//need to edit so that userId can be taken out of the params, in the error handling. accountValidator.

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^// 
//PAYLOAD carries the id over here so we dont need to have it in params but we will see how it works out. 

export const getAccounts = async (req, res, next) => {
    //res.send(req.cookies.token);
    console.log("insind get all accounts");
    console.log("payload id: ", req.user.id); 

    await AccountModel.find({user: req.user.id}, function(err, foundAccounts){
        if(err){
            console.log("error in finding all accounts linked to a user", err);
        }else{
            console.log("possible found Accounts", foundAccounts);
            //res.send(foundAccounts);
            res.render("accounts.ejs", {foundAccounts: foundAccounts});
        }
    });
}

//working on protected routes that need id.....
//we can pass id in query, id is also inside of payload if we need it. 
export const getAccount = async (req, res, next) => {
    console.log("inside getAccount");
    console.log(req.user.id);
    console.log(req.params.accountId);

    AccountModel.findById(req.params.accountId, function(err, foundAccount){
        if(err){
            console.log("errror in finding single account", err);
        }else{
            res.render("manageAccount.ejs", {foundAccount: foundAccount});
        }
    });


    

    

}

//adds an account to the db, this is an intial test. 
//error handling asks for "name" and "ownerID"
export const createAccount = async (req, res, next) => {
    console.log("inside create account");
    console.log("userId", req.user.id);
    //here we will create a checking or savings account. that is associated with a user. 

    //inclulde a checker here later. 
    const {
        accountType,
        //name,
        //nth_account,
        //username,
        //unique_id,
        currentBalance
    } = req.body;

    const accountFields = {};
    accountFields.user = req.user.id;

    if(accountType) accountFields.accountType = accountType;
    //if(name) accountFields.name = name;
    //if(username) accountFields.username = username;
    //if(nth_account) accountFields.nth_account = nth_account;
    //if(unique_id) accountFields.unique_id = unique_id;
    if(currentBalance) accountFields.currentBalance = currentBalance;

    console.log("accountFields", accountFields);
    

    let account = new UserAcccount(accountFields);

    await account.save();

    console.log("added account", account);
    
    
}

//will handle both withdrawl and deposit might need 2 routes. 
//update this later. 
export const updateAccount = async (req, res, next) => {
  

    console.log("inside update account");
    const accountType = req.body.accountType;
    const currentBalance = req.body.currentBalance;

    let account = [{
        accountType: accountType,
        currentBalance: currentBalance
    }];

    User.findByIdAndUpdate(req.params.id, {$set: {accounts: account}}, function(err, foundUser){
        if(err){
            throw err;
            console.log("error in createAccount");
        }else{
            console.log("updated account", foundUser.accounts); //displays in db this console.log is not accurate
        }
    });

}
export const deleteAccount = async (req, res, next) => {
  const { accountId } = req.params;
    //delete an account based on id
    
}

export const makeDeposit = async(req, res, next) => {
    //res.send("inside make deposit");
    //foundAccounts.user%>/deposit?_method=PUT
    const id = req.params.accountId;
    let oldBalance;
    const deposit = parseInt(req.body.depositedAmount);

    await AccountModel.findById(id, function(err, foundAccount){
        if(err){
            console.log(err);
        }else{
            console.log("old balance", foundAccount.currentBalance);
            oldBalance = foundAccount.currentBalance;
        }
    });

    console.log("deposit", deposit);
    const newBalance = oldBalance + deposit;
    console.log("newBalance 1", newBalance);

    await AccountModel.findByIdAndUpdate(id, {currentBalance: oldBalance + deposit}, function(err, updatedAccount){
        if(err){
            console.log("err in addition", err);
        }else{
            console.log("new Balance", updatedAccount.currentBalance);
        }
    });

    

}


export const makeWithdrawl = async(req, res, next) => {
    res.send("inside make Withdrawl");
    //foundAccounts.user%>/deposit?_method=PUT
    
    const id = req.params.accountId;
    let oldBalance;
    const withdrawl = parseInt(req.body.withdrawnAmount);

    await AccountModel.findById(id, function(err, foundAccount){
        if(err){
            console.log(err);
        }else{
            console.log("old balance", foundAccount.currentBalance);
            oldBalance = foundAccount.currentBalance;
        }
    });

    //console.log("deposit", deposit);
    const newBalance = oldBalance - withdrawl;
    console.log("newBalance 1", newBalance);

    await AccountModel.findByIdAndUpdate(id, {currentBalance: newBalance}, function(err, updatedAccount){
        if(err){
            console.log("err in subtraction", err);
        }else{
            console.log("new Balance", updatedAccount.currentBalance);
        }
    });



}

export const makeTrasnfer = async(req,res,next) => {

    //redo this. 




} 


//add a trasnfer route function


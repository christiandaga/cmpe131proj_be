import uuid from 'uuid';
import User from '../models/User';

export const getAccounts = async (userId) => {
    //dummy
    const dummy = {
      hi: "It worked"
    }

    return dummy;
   /*const user = await User.findById(userId, function(err, foundUser){
     if(err){
       console.log("error in getAccounts", err);
     }else{
       console.log("foundUser authenticated", foundUser);
     }

   });*/



}

export const getAccount = async (accountId) => {
    // dummy
    const dummy = {
      hi: "It worked"
    }

    return dummy;
}

export const createAccount = async (accountId, name) => {
  // dummy
  const dummy = {
    hi: "It worked"
  }

  return dummy;
}

export const updateAccount = async (accountId, updateInfo) => {
  // dummy
  const dummy = {
    hi: "It worked"
  }

  return dummy;
}

export const deleteAccount = async (accountId) => {
  // dummy
  const dummy = {
    hi: "It worked"
  }

  return dummy;
}
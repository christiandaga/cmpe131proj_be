import uuid from 'uuid';
import User from '../models/User';

export const getAccounts = async (userId) => {
    //will refactor to handle accounts if we turn them into seperate models.
  /*let accounts = [];

  User.findById(userId, function(err, foundUser){
    if(err){
      throw err;
      console.log("error in getAccounts");
    }else{
      accounts = foundUser.accounts;
    }
  });

  return accounts;
*/
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
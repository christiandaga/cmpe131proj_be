import uuid from 'uuid';
import User from '../models/User';

export const login = async (username, password) => {
    // compare password
    let loggedUser = new User({
        id: 1,
        username:username,
        password:password,
        //pin: 1234
    });
    
    return loggedUser;
}

export const register = async (username, password, pin) => {
    // create new user
    let newUser = new User({
        username: username,
        password: password,
        pin: pin
    });
    return newUser;
}
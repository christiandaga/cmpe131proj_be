/*import config from 'config';
import jwt from 'jsonwebtoken';
import uuid from 'uuid';
import User from '../models/User';

const jwtConfig = config.get('jwt');

const createUserJwt = (user) => {
    return jwt.sign(
        { username: user.username },
        jwtConfig.secret,
        { subject: user.id }
    );
};

export const login = async (username, password) => {
   // compare password

    let loggedUser = new User({
        id: 1,
        username:username,
        password:password,
        //pin: 1234
    });
    
    //return loggedUser;

   
    const ret = { loggedUser, token: createUserJwt(loggedUser) };
    return ret;

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

//if we move the json token to register than its already there before the login, can be placed in middleware. 
*/
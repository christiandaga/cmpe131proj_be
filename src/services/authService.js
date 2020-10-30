import config from 'config';
import jwt from 'jsonwebtoken';
import uuid from 'uuid';

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
    const exampleuser = {
        id: '1',
        username,
        password,
        pin: 1234
    }

    const ret = { exampleuser, token: createUserJwt(exampleuser) };
    return ret;
}

export const register = async (username, password, pin) => {
    // create new user
    const exampleuser = {
        id: uuid(),
        username,
        password,
        pin
    }
    return exampleuser;
}
import uuid from 'uuid';

export const login = async (username, password) => {
    // compare password
    const exampleuser = {
        id: 1,
        username,
        password,
        pin: 1234
    }
    return exampleuser;
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
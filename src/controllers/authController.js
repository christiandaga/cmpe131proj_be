import httpStatus from 'http-status';

import * as authSvc from '../services/authService';

export const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const user = await authSvc.login(username, password);
        res.status(httpStatus.OK).json(user);
    } catch (err) {
        next(err);
    }
}

export const register = async (req, res, next) => {
    const { username, password, pin } = req.body;

    try {
        const user = await authSvc.register(username, password, pin);
        res.status(httpStatus.OK).json(user);
    } catch (err) {
        next(err);
    }
}
import httpStatus from 'http-status';

import * as authSvc from '../services/authService';
let User = require("../models/User");
const db = require("../db/db");


//login function works when querying by exact params, doesnt when passing full object, come back to later.
export const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {

        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        
        const user = await authSvc.login(username, password);
        
        await User.find({username: user.username, password: user.password}, function(err, foundUser){
            if(err){
                console.log("error finding user: ", err);
            }else{
                console.log("login test succeeded");
                
                console.log("Printing found user: " , foundUser);
            }
        })
        res.status(httpStatus.OK).json(user);
    } catch (err) {
        next(err);
    }
}

export const register = async (req, res, next) => {
    const { username, password, pin } = req.body;
    //need to add functionality for transactions and accounts, initial integration works.
    try {
        const user = await authSvc.register(username, password, pin);
        user.save(function(err){
            if(err){
                console.log("registration err", err);
            }else{
                console.log("registered user");
            }
        })
        res.status(httpStatus.OK).json(user);
    } catch (err) {
        next(err);
    }
}
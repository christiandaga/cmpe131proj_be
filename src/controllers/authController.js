import httpStatus from 'http-status';

import * as authSvc from '../services/authService';
let User = require("../models/User");
const db = require("../db/db");

import config from 'config';
import jwt from 'jsonwebtoken';
import jwtMiddleware from '../jwtMiddleware';

const jwtConfig = config.get("jwtSecret");

//login function works when querying by exact params, doesnt when passing full object, come back to later.
export const login = async (req, res, next) => {
    const { username, password } = req.body;

    try {

        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        });

        await User.findOne({username: newUser.username, password: newUser.password}, function(err, foundUser){
            if(err){
                console.log("error finding user: ", err);
            }else{
                console.log("logged user id from database?", foundUser._id);
                //send this found id to the token!!!!!!!

                const payload = {
                    user: {
                        id: foundUser.id,
                    }
                }
        
        
                jwt.sign(payload, jwtConfig,{
                    expiresIn: 360000
                }, (err, token) => {
                    if(err) throw err;
                    console.log(token);
                });
                
            }
        });


        res.status(httpStatus.OK).json(newUser);
    }catch (err) {
        next(err);
    }
}

export const register = async (req, res, next) => {
    const { username, password, pin } = req.body;
    //need to add functionality for transactions and accounts, initial integration works.
    try {
        //const user = await authSvc.register(username, password, pin);
        const user = new User({username: req.body.username, password: req.body.password, pin: req.body.pin});
        user.save(function(err){
            if(err){
                console.log("registration err", err);
            }else{
                console.log("registered user");
            }
        })
    } catch (err) {
        next(err);
    }
}
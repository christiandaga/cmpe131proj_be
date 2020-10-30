import bodyParser from 'body-parser';
import express from 'express';
import { UnauthorizedError as JwtUnauthorizedError } from 'express-jwt';
import httpStatus from 'http-status';

import { ApiError } from './errors';
import jwtMiddleware from './jwtMiddleware';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/db");
const mongoose = require("mongoose");
const User = require("./models/User");
//const Account = require("./models/Account");

export default app

export const initExpress = async () => {

    //connect to DB test
    connectDB();
   
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.raw());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use(
        jwtMiddleware.unless({
            path: [
                /^\/api\/(v\d+\/)?auth\/register/,
                /^\/api\/(v\d+\/)?auth\/login/
            ]
        })
    );

    app.use('/api', routes);

    app.use((error, req, res, next) => {
        if (error instanceof JwtUnauthorizedError) {
            next(
                new ApiError(httpStatus.UNAUTHORIZED, httpStatus.UNAUTHORIZED, {
                    message: 'Invalid credentials.',
                    nestedError: error,
                    warning: true,
                    logMessage: error.message
                })
            );
        } else {
            next(error);
        }
    });

    //initial database entry tests
    app.post('/', (req,res) => {
        console.log("Incoming request body: ", req.body);
        console.log("accounts: ", req.body.accounts);
        
        let newUser = new User({
            username: req.body.username,
            password: req.body.password,
            pin: req.body.pin,
            transactions: req.body.transactions,
            accounts: req.body.accounts
        });

        console.log("about to create new user: ", newUser);
        //console.log("newUser.username: ", newUser.username);
        try{
            
            newUser.save(function(err){
                if(err){
                    console.log("Error creating user",err);
                }else{
                    console.log("Created User");
                }
            });
            console.log("User Created");

        }catch(error){
            console.log("error");

        }

    });
  
    app.listen(PORT, () => {
        console.log(`Bank app backend listening on port ${PORT}!`)
    });


}

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


export default app

export const initExpress = async () => {
    
   
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.raw());
    app.use(bodyParser.urlencoded({ extended: false }));


    connectDB();

    //fix this to not need jwtMiddleware but have a checker to make sure there is something there.
    /*app.use(
        jwtMiddleware.unless({
            path: [
                /^\/api\/(v\d+\/)?auth\/register/,
                /^\/api\/(v\d+\/)?auth\/login/
            ]
        })
    );*/

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


    app.listen(PORT, () => {
        console.log(`Bank app backend listening on port ${PORT}!`)
    });


}

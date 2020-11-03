import bodyParser from 'body-parser';
import express from 'express';
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
    app.use('/api', routes);

    app.listen(PORT, () => {
        console.log(`Bank app backend listening on port ${PORT}!`)
    });


}

import mongoose from "mongoose";
const config = require("config");
const db = config.get('mongoURI');


const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("mongoose connected");
    }catch(err){
        console.log(err.message);
        process.exit(1);
    }
}


module.exports = connectDB;
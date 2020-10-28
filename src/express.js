const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const connectDB = require("./db/db");
const mongoose = require("mongoose");
const User = require("./models/User");
//const Account = require("./models/Account");
const bodyParser = require('body-parser');


export default app

export const initExpress = async () => {

    //connect to DB test
    connectDB();
   
    
    app.use(express.json()); 
    app.use(express.urlencoded());
    app.use(express.json({
        extended: false
    }));


    app.get('/', (req, res) => {
        res.send('Testing Git on jd branch')
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
        console.log(`Example app listening on port ${PORT}!`)
    });


}

const mongoose = require("mongoose");

//prelimnary user model for routing and database, as we get more progress it will change
const UserSchema = new mongoose.Schema({

    username: String,
    password: String,
    passwordconf: String, 
    pin: String,

   }
);

module.exports = mongoose.model("User", UserSchema);
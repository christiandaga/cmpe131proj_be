const mongoose = require("mongoose");

//prelimnary user model for routing and database, as we get more progress it will change
const UserSchema = new mongoose.Schema({

    username: 'string',

    password: 'string',

    pin: 'string',

    transactions: [
         'string' //will add date log later
    ],

    accounts: [{
        _id: mongoose.Schema.Types.ObjectId, 
        accountType: 'string', //checking or savings
        currentBalance: 'string' //possibly will change to int
        
    }]

    }
);

module.exports = mongoose.model("User", UserSchema);
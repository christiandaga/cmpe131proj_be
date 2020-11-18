var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let AccountSchema = new Schema ({

    accountType: String, //checking or savings
    name: String,
    nth_account: Number,
    username: String,
    unique_id: String,
    balance: Number
    

});

module.exports = mongoose.model("UserAccount", UserSchema);
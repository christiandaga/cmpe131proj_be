var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let AccountSchema = new Schema ({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    accountType: String, //checking or savings
    name: String,
    nth_account: Number,
    username: String,
    unique_id: String,
    currentBalance: Number //change to number later
    

});

module.exports = mongoose.model("UserAccount", AccountSchema);
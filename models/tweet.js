const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TweetSchema = mongoose.Schema({
    text: String,
});

module.exports = mongoose.model("Tweet", TweetSchema);
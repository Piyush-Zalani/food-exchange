const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let CommentSchema = mongoose.Schema({
    text: String,
    tweet: { type: Schema.Types.ObjectId, ref: "Tweet" }
});

module.exports = mongoose.model("Comment", CommentSchema);
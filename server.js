const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const tweetRoute = require("./routes/tweet");

require("dotenv").config();

const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/tweets", tweetRoute);

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/twitter", { useMongoClient: true }, (err) => {
    if (err) console.error(err);
});

app.listen(port, () => {
    console.log("Listening on " + port);
});



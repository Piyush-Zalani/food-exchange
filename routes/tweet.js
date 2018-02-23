const express = require("express");
const mongoose = require("mongoose");

const Comment = require("../models/comment");
let Tweet = require("../models/tweet");

let tweetRoute = express();

tweetRoute.route("/")
    .get((req, res) => {
        Tweet.find((err, tweets) => {
            if (err) console.error(err);
            res.send(tweets);
        });
    })
    .post((req, res) => {
        let newTweet = new Tweet(req.body);
        newTweet.save((err, test) => {
            if (err) console.error(err);
            res.send(newTweet);
        })
    });
tweetRoute.route("/:id")
    .delete((req, res) => {
        Tweet.findByIdAndRemove(req.params.id, (err, tweet) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(tweet);
        });
    });

tweetRoute.route("/:id/comments")
    .get((req, res) => {
        Comment.find({ tweet: req.params.id }, (err, comments) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(comments);
        })
    })
    .post((req, res) => {
        let newComment = new Comment(req.body);
        newComment.tweet = req.params.id;
        newComment.save((err, savedComment) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(savedComment);
        });
    });




module.exports = tweetRoute;
import React, { Component } from 'react';
import Comments from "./Comments";
import axios from "axios";
let tweetUrl = "/tweets";

export default class FakeTwitter extends Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
            loading: true
        }
    }
    componentDidMount() {
        axios.get(tweetUrl)
            .then((response) => {
                this.setState({
                    tweets: response.data,
                    loading: false
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }
    render() {
        let { loading, tweets } = this.state;
        return (
            loading ?
                <div>
                    ...loading
                </div>
                :
                <div>
                    {tweets.map(tweet => {
                        let { text, _id } = tweet;
                        return (
                            <div key={_id}>
                                <h1>{text}</h1>
                                <Comments tweetId={_id}></Comments>
                            </div>
                        )
                    })}
                </div>
        )
    }
}

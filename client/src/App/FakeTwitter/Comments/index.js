import React, { Component } from 'react';
import axios from "axios";
let commentUrl = "/tweets/";

export default class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            loading: true
        }
    }
    componentDidMount() {
        let { tweetId } = this.props
        axios.get(`${commentUrl}${tweetId}/comments`)
            .then(response => {
                this.setState({
                    comments: response.data,
                    loading: false
                })
            })
            .catch(err => console.error(err))
    }
    render() {
        let { comments, loading } = this.state;
        return (
            loading ?
                <div>...loading</div>
                :
                <ul>
                    {comments.map(comment => {
                        return <li key={comment._id}>{comment.text}</li>
                    })}
                </ul>
        )
    }
}

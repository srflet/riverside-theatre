import React, { Component } from 'react';

export default class PostHeader extends Component {
    render() {
        return (
            <div>
                <h2 className="centered">Post Game Questionnaires</h2>
                <p>Please provide your final verdict and answer a few questions.</p>
                <p>After completing the questions, we will tell you who the guilty person is.</p>
                <br />
            </div>
        )
    }
}

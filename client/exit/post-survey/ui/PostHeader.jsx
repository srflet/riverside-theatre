import React, { Component } from 'react';

export default class PostHeader extends Component {
    render() {
        return (
            <div>
                <h2 className="centered">Post Game Questionnaires</h2>
                <p>Please answer all of the following questionnaires to obtain your reward.</p>
                <p style={{ color: "grey" }}>If you reload the page, you will start at the begining of the questionnaires, but do not worry because the answers you give are saved.</p>
                <br />
            </div>
        )
    }
}

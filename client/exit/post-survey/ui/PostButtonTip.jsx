import React, { Component } from 'react'

export default class PostButtonTip extends Component {
    render() {
        return (
            <div>
                <br />
                <div className="game-instructions">
                    The button to continue will only be clickable once you have answered every question. If it is not clickable, it means you haven't provided an answer for one of the questions.
                </div>
            </div>
        )
    }
}

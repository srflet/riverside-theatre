import React, { Component } from 'react'

export default class CluesCheckGameInstructions extends Component {
    render() {
        return (
            <div className="game-instructions">
                <span>
                    <strong>When you find a clue from another player you should fill in the blank text box for that clue.</strong> This allows you to keep track of the clues you have collected AND it allows us to keep track of the clues you have collected for the points calculation.
            </span>
            </div>
        )
    }
}

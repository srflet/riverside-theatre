import React, { Component } from 'react'

// Tips about how to use the clue table
export class CluesTableGameInstructions1 extends Component {
    render() {
        return (
            <div className="game-tip">
                <div>
                    <p>
                        During the discussion, you will see a table with a reminder of your unique clues and hints about the unique clues that the other players have.
                        These are formatted as questions with textboxes in which you can give your answers.
                    </p>
                    <p>
                        For example, the player who has the question about the guilty person's gender would have the answer to that question (or if you are that player, you have the answer already written in and grayed out).
                    </p>
                    <p style={{ marginBottom: "0px" }}>
                        <strong>As you obtain clues from the other players, you can start filling in the related textboxes.</strong> This allows you to keep track of the clues you have collected AND it allows the experimenter to keep track of the clues you have collected for the points calculation.
                    </p>
                </div>
            </div>
        )
    }
}

export class CluesTableGameInstructions2 extends Component {
    render() {
        return (
            <div className="game-tip">
                <div>
                    <p style={{ marginBottom: "0px" }}><strong>Reminder:</strong> In order to have the best shot at solving the game you need to collect as many clues as possible from the other players.</p>
                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'

export default class ComStructPopulateClues extends Component {
    render() {
        const { round, player, position } = this.props;
        const cluesIndicator = "clues" + position;
        const cluesBlankIndicator = cluesIndicator + "_blank";
        const clues = player.get("type") === position ? round.get(cluesIndicator) : round.get(cluesBlankIndicator);

        return (
            <ul>
                {clues.clues.map(clue => <li key={clue.id}>{clue.text}</li>)}
            </ul>
        )
    }
}

import React, { Component } from 'react'

export default class PersonalClues extends Component {
    render() {
        const { player } = this.props;
        const clues = player.get("independent-clues");

        return (
            <div>
                <ul>
                    {clues.map(clue => <li key={clue.id}>{clue.text}</li>)}
                </ul>
            </div>
        )
    }
}

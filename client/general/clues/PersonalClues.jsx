import React, { Component } from 'react';
import { getPlayerClues } from '../helper-functions/getClues';

export default class PersonalClues extends Component {
    render() {
        const { round, player } = this.props;
        const clues = getPlayerClues(round, player);

        return (
            <div className="game-clues">
                <ol>
                    {clues.map(clue => <li key={clue.id}>{clue.text1 + clue.fill + clue.text2}</li>)}
                </ol>
            </div>
        )
    }
}

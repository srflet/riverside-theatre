import React, { Component } from 'react';
import { getMyClues } from '../helper-functions/getClues';

export default class PersonalClues extends Component {
    render() {
        const { round, player } = this.props;
        const clues = getMyClues(round, player);

        return (
            <div className="game-clues">
                <ol>
                    {clues.map(clue => <li key={clue.id}>{clue.clue}</li>)}
                </ol>
            </div>
        )
    }
}

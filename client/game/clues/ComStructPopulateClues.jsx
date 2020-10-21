import React, { Component } from 'react';
import { getClues } from '../general-ui/helper-functions/getClues';

export default class ComStructPopulateClues extends Component {
    render() {
        const { game, round, player, position } = this.props;
        const clues = getClues(game, round, player, position);

        return (
            <div>
                <ul>
                    {clues.map(clue => <li key={clue.id}>{clue.text}</li>)}
                </ul>
            </div>
        )
    }
}

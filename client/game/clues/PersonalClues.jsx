import React, { Component } from 'react';
import { getClues } from '../general-ui/helper-functions/getClues';

export default class PersonalClues extends Component {
    render() {
        const { game, round, player } = this.props;
        const clues = getClues(game, round, player, player.get("type"));

        return (
            <div>
                <ol>
                    {clues.map(clue => <li key={clue.id}>{clue.text}</li>)}
                </ol>
            </div>
        )
    }
}

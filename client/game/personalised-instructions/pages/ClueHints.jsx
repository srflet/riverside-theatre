import React, { Component } from 'react';
import CluesCheck from '../../discussion/clues-check/CluesCheck';
import CluesCheckGameInstructions from '../../discussion/clues-check/CluesCheckGameInstructions';
import CluesCheckGameTip from '../../discussion/clues-check/CluesCheckGameTip';

export default class ClueHints extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <h3>Hints and keeping track of Clues</h3>

                <p>
                    During the discussion, you will see a table with a reminder of your unique clues, and hints about the unique clues of the other players.
                </p>

                <p>
                    Reminder: In order to have the best shot at solving the game you need to collect as many clues as possible from the other players.
                </p>

                <br />

                <CluesCheckGameInstructions />

                <br />

                <CluesCheck round={round} game={game} player={player} />

                <br />

                <CluesCheckGameTip />

            </div>
        )
    }
}
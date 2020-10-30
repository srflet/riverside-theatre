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
                    During the discussion, you will see a table with a reminder of your unique personal clues, and hints about the unique personal clues of the other players.
                </p>

                <p>
                    As previously explained, in order to earn the most points and have a chance of winning an Amazon voucher, you need to collect these unique personal clues from the other players.
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
import React, { Component } from 'react';
import ComStructShape from '../../../communication-structure/ComStructShape';
import PresComStructInstructions from './PresComStructInstructions';

export default class PresComStructText extends Component {
    render() {
        const { game, player } = this.props;

        return (
            <div>
                <PresComStructInstructions game={game} player={player} />
                <p>
                    On the next page, to facilitate discussion we will give you a hint of what unique clues the other two players have (e.g., “Player B knows the gender of the guilty person”).
                </p>
                <br />
                <div className="centred">
                    <ComStructShape game={game} player={player} />
                </div>
                <br />
                <div className="game-tip">
                    <span>
                        <strong><u>Game tip:</u></strong> Look at your position on this diagram, and think about how you might use your position to gain information. <strong>For example, try not to just ask for clues, but also consider “trading” clues with others.</strong>
                    </span>
                </div>
                <br />
            </div>
        )
    }
}


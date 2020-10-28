import React, { Component } from 'react';
import ComStructShape from '../../communication-structure/ComStructShape';
import PresComStructInstructions from './subpage-elements/PresComStructInstructions';

export default class PresComStruct extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <h3>Communication Structure</h3>
                <PresComStructInstructions game={game} player={player} />
                <br />
                <div className="game-tip">
                    <span>
                        <strong><u>Game tip:</u></strong> Look at your position on this diagram, and think about how you might use your position to gain information. <strong>For example, try not to just ask for clues, but also consider “trading” clues with others.</strong>
                    </span>
                </div>
                <br />
                <p>
                    On the next page, to facilitate discussion we will give you a hint of what unique clues the other two players have (e.g., “Player B knows the gender of the guilty person”).
                </p>
                <br />
                <div className="centred">
                    <ComStructShape game={game} player={player} />
                </div>
            </div>
        )
    }
}

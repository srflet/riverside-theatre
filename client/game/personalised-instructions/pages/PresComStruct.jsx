import React, { Component } from 'react';
import ComStructShape from '../../communication-structure/ComStructShape';
import PresComStructInstructions from '../ui/PresComStructInstructions';

export default class PresComStruct extends Component {
    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <h3>Communication Structure</h3>
                <PresComStructInstructions game={game} player={player} />
                <p>
                    <strong><u>
                        Below is a graphic aid to help you visualize the communication channels.
                    </u></strong>
                </p>
                <p>
                    <strong><u>
                        To help you with discussion, the graph also shows what the other two participants know. No need to write this down, we will present it on the side on the next page.
                    </u></strong>
                </p>
                <p>
                    Click 'Next Stage' to enter the discussion room. You will have 10 minutes to exchange information however you like.
                </p>
                <p>
                    After discussion, you will be asked to give us your final verdict.
                </p>
                <div className="centred">
                    <ComStructShape game={game} player={player} />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import ComStructShape from "./ComStructShape.jsx";
import ComStructPopulateClues from '../clues/ComStructPopulateClues.jsx';

export default class ComStructFull extends Component {
    render() {
        const { round, game, player } = this.props;

        return (
            <div>
                <div className="communicationClues">
                    <ComStructPopulateClues round={round} player={player} position={"A"} />
                </div>

                <div className="centred">
                    <ComStructShape game={game} player={player} />
                </div>

                <div className="communicationClues">
                    <div>
                        <ComStructPopulateClues round={round} player={player} position={"B"} />
                    </div>
                    <div>
                        <ComStructPopulateClues round={round} player={player} position={"C"} />
                    </div>
                </div>
            </div>
        )
    }
}

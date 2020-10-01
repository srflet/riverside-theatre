import React, { Component } from 'react';
import PlayerProfile from './footer-elements/PlayerProfile';
import PlayerStatus from './footer-elements/PlayerStatus';
import Timer from './footer-elements/Timer';

export default class Footer extends Component {
    render() {
        const { game, player, stage } = this.props;

        return (
            <div style={footerContainer}>
                <PlayerProfile stage={stage} player={player} />

                <div style={playerStatusInformationContainer}>
                    <span><strong>Player Status</strong></span>
                    <div style={playerStatusesContainer}>
                        {game.players.map(player => <PlayerStatus key={player._id} player={player} />)}
                    </div>
                </div>

                <Timer stage={stage} />
            </div>
        )
    }
}

//Style variables
const footerContainer = {
    flex: "1",
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-end",
    alignItems: "flex-start"
};

const playerStatusesContainer = {
    display: "flex",
    flexDirection: "row"
};

const playerStatusInformationContainer = {
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
}

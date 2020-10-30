import React, { Component } from 'react';
import { returnPlayerInitials } from '../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../general-ui/helper-functions/returnPlayerAvatar';
import Timer from '../../general-ui/footer/footer-elements/Timer';
import PlayerProfile from '../../general-ui/footer/footer-elements/PlayerProfile';

export default class Heading extends Component {
    render() {
        const { currentPage, player, game, stage } = this.props;

        const player1Initials =
            player.get("type") === "A" ?
                returnPlayerInitials(game, "B") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "A") : returnPlayerInitials(game, "C"));
        const player2Initials =
            player.get("type") === "B" ?
                returnPlayerInitials(game, "A") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "B") : returnPlayerInitials(game, "C"));

        const player1Avatar =
            player.get("type") === "A" ?
                returnPlayerAvatar(game, "B") :
                (player.get("type") === "C" ? returnPlayerAvatar(game, "A") : returnPlayerAvatar(game, "C"));
        const player2Avatar =
            player.get("type") === "B" ?
                returnPlayerAvatar(game, "A") :
                (player.get("type") === "C" ? returnPlayerAvatar(game, "B") : returnPlayerAvatar(game, "C"));

        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                    <PlayerProfile player={player} />
                    <Timer stage={stage} />
                    <div>
                        <p><strong>Page:</strong></p>
                        <p>{currentPage + 1} / 9</p>
                    </div>
                </div>
                { currentPage === 0
                    ? <div>
                        <br />
                        <div className="game-instructions">
                            You have been connected with player {player1Initials} <img src={player1Avatar} style={mediumImage} />  and player {player2Initials} <img src={player2Avatar} style={mediumImage} />
                        </div>
                        <br />
                        <div className="game-tip">
                            <div>
                                <div>
                                    <strong><u>Note:</u></strong> From now on you are playing simultaneously with two other players. You have <strong>15 minutes</strong> to read the instructions. At then end of the instructions you and the other players will move on to a discussion phase.
                                </div>
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>
        )
    }
}

//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    margin: "0"
};
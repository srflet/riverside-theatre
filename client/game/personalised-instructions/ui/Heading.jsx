import React, { Component } from 'react';
import { returnPlayerInitials } from '../../general-ui/helper-functions/returnPlayerInitials';
import { returnPlayerAvatar } from '../../general-ui/helper-functions/returnPlayerAvatar';

export default class Heading extends Component {
    render() {
        const { currentPage, player, game } = this.props;

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
                                    <strong><u>Note:</u></strong> From now on you playing simultaneously with two other players. <br />
                                There is useful information at the top of this page: <br />
                                - A timer. <strong>You will have 15 minutes to read these instructions</strong><br />
                                - A player profile. Each player is represented by an avatar (i.e. a chess piece) and their provided screen name. You can see your profile in the top left.<br />
                                - A player status. When a player has finished a phase their cross will turn into a tick. Only when every player has a tick will you all move on to the next phase.
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
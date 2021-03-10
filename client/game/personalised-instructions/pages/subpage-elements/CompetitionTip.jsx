import React, { Component } from 'react';
import { returnPlayerInitials, returnPlayerAvatar } from '../../../../general/helper-functions/returnPlayerInformation';

export default class CompetitionTip extends Component {
    render() {

        const { player, game } = this.props;

        if (game.treatment.competition === "comp" && player.get("type") !== "C") {
            if (player.get("type") === "A") {
                return (
                    <div className="game-competition">
                        <div>
                            <strong>INCENTIVE:</strong> <span> You are competing to collect more information than player {returnPlayerInitials(game, "B")} <img src={returnPlayerAvatar(game, "B")} className="avatar-medium" /></span>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div className="game-competition">
                        <div>
                            <strong>INCENTIVE:</strong> <span> You are competing to collect more information than player {returnPlayerInitials(game, "A")} <img src={returnPlayerAvatar(game, "A")} className="avatar-medium" /></span>
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div className="game-competition">
                    <div>
                        <strong>INCENTIVE: </strong>You are trying to collect as many unique clues from the other players as possible
                    </div>
                </div>
            )
        }
    }
}

//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    verticalAlign: "top"
};

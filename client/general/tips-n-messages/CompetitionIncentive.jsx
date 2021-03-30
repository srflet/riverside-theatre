import React, { Component } from 'react'

// Functions to get information from the other players
import {
    returnOthersInitials, returnOthersAvatar,
    competitionWithOthers
} from '../helper-functions/returnPlayerInformation'

// Export a reminder message of who the player is competing with
export default class CompetitionIncentive extends Component {
    render() {
        const { player, game } = this.props;

        // Get whether this player is competitin with player 1 (A or B) and player 2 (B or C), as well as their initials and avatars
        const [conditionForCompWithPlayer1, conditionForCompWithPlayer2] = competitionWithOthers(game, player)
        const [player1Initials, player2Initials] = returnOthersInitials(game, player)
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player)

        return (
            <div style={competitorStyle}>
                <span>
                    <strong>INCENTIVE:</strong> You are competing to collect more information than {conditionForCompWithPlayer1 && <>Player {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" /></>}{conditionForCompWithPlayer1 && conditionForCompWithPlayer2 && " and "}{conditionForCompWithPlayer2 && <>Player {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" /></>}
                </span>

            </div>
        )
    }
}

const competitorStyle = {
    backgroundColor: "white"
    , color: "red"
    , border: "1px solid red"
    , borderRadius: "5px"
    , padding: "1.5rem"
    , textAlign: "center"
}
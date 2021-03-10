import React, { Component } from 'react';
import { returnPlayerInitials, returnPlayerAvatar } from '../../../../general/helper-functions/returnPlayerInformation';
import CompetitionTip from './CompetitionTip';

export default class DiscussionInstructions extends Component {
    render() {
        const { player, game, round } = this.props;

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
                <p>
                    During the discussion, <strong><u>you will have {round.get("discussionTime")} minutes</u></strong> to chat with the other two players, {player1Initials} <img src={player1Avatar} className="avatar-medium" /> and {player2Initials} <img src={player2Avatar} className="avatar-medium" />, to get as many clues as you can. After this discussion, we will kindly ask you to complete a short questionnaire and provide your final verdict.
                </p>
                <p>
                    On the next page, you will see tabs that you can click on to revisit certain information. You can click on the same tab again to close it. Illustrated in this image here:
                </p>
                <img src="img/discussion-instructions/tabs-instructions.png" alt="" width="100%" className="img-center" />
                <ul style={{ marginTop: "0" }}>
                    <li>
                        You can click on the “Instructions Reminder” tab to revisit these instructions.
                    </li>
                    <li>
                        You can click on the “Police Clues” tab to revisit the clues all three players share.
                    </li>
                    <li>
                        You can click on the “Communication Structure” tab to revisit the diagram that describes who can talk to whom.
                    </li>
                    <li>
                        You can click on the “Early submission” tab to provide an early submission once {round.get("earlySubTimeText")} minutes remain passed and you do no want to discuss for the full {round.get("discussionTime")} minutes.
                    </li>
                </ul>

                <CompetitionTip player={player} game={game} />
            </div>
        )
    }
}

//Style variables
const mediumImage = {
    width: "2.5rem",
    height: "2.5rem",
    verticalAlign: "top"
};
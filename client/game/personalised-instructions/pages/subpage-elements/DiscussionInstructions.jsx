import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general-ui/helper-functions/returnPlayerInitials';
import CompetitionTip from './CompetitionTip';

export default class DiscussionInstructions extends Component {
    render() {
        const { player, game, round } = this.props;

        const player1 =
            player.get("type") === "A" ?
                returnPlayerInitials(game, "B") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "A") : returnPlayerInitials(game, "C"));
        const player2 =
            player.get("type") === "B" ?
                returnPlayerInitials(game, "A") :
                (player.get("type") === "C" ? returnPlayerInitials(game, "B") : returnPlayerInitials(game, "C"));

        return (
            <div>
                <p>
                    During the discussion, <strong><u>you will have {round.get("discussionTime")} minutes</u></strong> to chat with the other two players, {player1} and {player2}, to get as many clues as you can. After this discussion, we will kindly ask you to complete a short questionnaire and provide your final verdict.
                </p>

                <br />
                <div className="game-instructions">
                    <span>
                        Careful, there is nothing stopping the other players from not telling you the truth.
                    </span>
                </div>

                <h4>Tabs for more information</h4>
                <div>
                    At the top of the page, you will see tabs that you can click on to get more information. You can click on the same tab again to close the information. Illustrated in this image here:
                </div>
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

                <h4>Hints and keeping track of Clues</h4>
                <p>
                    Below the tabs you will see the table that allows you to keep track of the clues you have collected from the other players
                </p>

                <h4>Chats</h4>
                <p>
                    Here are a few instructions on how to use the chats in this discussion phase:
                </p>

                <img
                    src={`img/discussion-instructions/chat-instructions-${game.treatment.competition === "comp" && player.get("type") !== "C"
                        ? "comp"
                        : "noncomp"
                        }.png`}
                    alt=""
                    width="80%"
                    className="img-center"
                />

                <br />
                <CompetitionTip player={player} game={game} />
            </div>
        )
    }
}

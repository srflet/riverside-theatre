import React, { Component } from 'react';
import { returnPlayerInitials } from '../../../general-ui/helper-functions/returnPlayerInitials';

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
                <h4>Tabs for more information</h4>
                <div>
                    At the top of the page, you will see tabs that you can click on to get more information. You can click on the same tab again to close the information.
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
                        You can click on the “Early submission” tab to provide an early submission after {round.get("earlySubTimeText")} minutes have passed and you do no want to discuss for the full {round.get("discussionTime")} minutes.
                    </li>
                </ul>
                <h4>Checkboxes to track collected clues</h4>
                <p>
                    Then, you will see a table with check boxes. <strong>There are check boxes for each unique clue everyone has.</strong> Your clues will be in plain text, whilst the clues of the other players will be as 'hints' (with blanks in the text). <strong>This allows you to keep track of which unique clues you collect from the other players. When you collect a unique clue from another player, you should check off that clue.</strong>
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
                    width="100%"
                    className="img-center"
                />
                <br />
                <div className="game-tip">
                    <span>
                        <strong><u>Game tip #1:</u></strong> These check boxes could help you get started. <strong>Look at what type of unique clues other players have and try to ask specific questions.</strong> You will need at least 4 unique clues from these 2 players to have a chance to find the guilty person.
                    </span>
                </div>
                <br />
                <div className="game-tip">
                    <span>
                        <strong><u>Game tip #2:</u></strong> Look at the communication diagram again, and <strong>think about how you may take advantage of your position and “bargain” with other players to get unique clues.</strong>
                    </span>
                </div>
            </div>
        )
    }
}

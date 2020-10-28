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
                    In this space, <strong><u>you will have {round.get("discussionTime")} minutes</u></strong> to chat with the other two players {player1} and {player2} to get as many cues as you can. After this discussion, we will kindly ask you to complete a short questionnaire and provide your final verdict.
                </p>
                <br />
                <p>
                    On the left hand side, you will see tabs. You can click on the “Instructions Reminder” tab to revisit these instructions. You can click on the “Police Clues” tab to revisit the clues all three players share. You can click on the “Communication Structure” to revisit the diagram that describes who can talk to whom. You can click on the “Early submission” tab to provide an early submission after {round.get("earlySubTimeText")} minutes have passed and you do no want to discuss for the full {round.get("discussionTime")} minutes.
                </p>
                <br />
                <p>
                    To help you get started, <strong><u>we have created these “check boxes” about the unique clues everyone has.</u></strong> When you collect and unique clue from another player, you should check off that clue.
                </p>
                <br />
                <div className="game-tip">
                    <span>
                        Game tip #1: These check boxes could help you get started. <strong><u>Look at what type of unique clues other players have and try to ask specific questions.</u></strong> You will need at least 4 unique clues from these 2 players to have a chance to find the guilty person.
                                    </span>
                </div>
                <br />
                <div className="game-tip">
                    <span>
                        Game tip #2: Look at the communication diagram again, and <strong><u>think about how you may take advantage of your position and “bargain” with other players to get unique clues.</u></strong>
                    </span>
                </div>
            </div>
        )
    }
}

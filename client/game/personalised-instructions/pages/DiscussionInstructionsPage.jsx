import React, { Component } from 'react'
import InformationLine from '../../../general/information-line/InformationLine';
import { returnOthersInitials, returnOthersAvatar } from '../../../general/helper-functions/returnPlayerInformation';

export default class DiscussionInstructionsPage extends Component {
    componentDidMount() {
        this.props.scrollToTop();
    }

    previous = () => {
        const { player, pageDbIndex } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage--;
        player.set(pageDbIndex, currentPage);
    }

    next = () => {
        const { player, pageDbIndex, max } = this.props;
        let currentPage = player.get(pageDbIndex);
        currentPage++;

        if (currentPage > max) {
            player.stage.submit();
        } else {
            player.set(pageDbIndex, currentPage);
        }
    }

    render() {
        const { player, round, game } = this.props;
        const buttonText = "Click to set ready for the discussion";
        const discussionTime = round.get("discussionTime")

        const [player1Initials, player2Initials] = returnOthersInitials(game, player);
        const [player1Avatar, player2Avatar] = returnOthersAvatar(game, player);

        return (
            <div>
                <h3>Instructions about the Discussion</h3>

                <p><strong>In the next phase, you will be discussing the case with the other two players.</strong></p>

                <p>
                    During the discussion, <strong><u>you will have {discussionTime} minutes</u></strong> to chat with the other two players, {player1Initials} <img src={player1Avatar} className="avatar-medium-textaligned" /> and {player2Initials} <img src={player2Avatar} className="avatar-medium-textaligned" />, to get as many clues as you can. After this discussion, we will kindly ask you to complete a short questionnaire and provide your final verdict.
                </p>
                <p>
                    On the next page, you will see tabs that you can click on to revisit certain information. You can click on the same tab again to close it. Illustrated in this image here:
                </p>
                <img src="img/discussion-instructions/tabs-instructions.png" alt="" width="100%" className="img-center" />
                <ul>
                    <li>
                        You can click on the “Clues Table” tab (open by default) to get hints about what clues the other players have, enter your answers when you obtain a clue from another player, and revisit the clues you obtained in your personal investigation.
                    </li>
                    <li>
                        You can click on the “Police Clues” tab to revisit the clues all three players share.
                    </li>
                    <li>
                        You can click on the “Early submission” tab to provide an early submission once {round.get("earlySubTimeText")} minutes remain passed and you do no want to discuss for the full {discussionTime} minutes.
                    </li>
                </ul>

                <br />

                <p className="button-holder">
                    <button type="button" onClick={this.previous}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={this.next} disabled={player.stage.submitted}>
                        {this.props.player.stage.submitted ? "Waiting for the others..." : buttonText}
                    </button>
                </p>

                {player.stage.submitted &&
                    <>
                        <br />
                        <div className="game-instructions">
                            <div>
                                <strong>Note:</strong> The next stage will only start once all players have finished reading the instructions and have clicked the ‘{buttonText}’ button. You can see whether players have clicked the button by looking at the "Player Status" below: the cross next to their avatar (i.e., their chess piece) will have changed to a checkmark.
                            </div>
                        </div>
                    </>
                }


                <br />
                <InformationLine {...this.props} />
            </div>
        )
    }
}

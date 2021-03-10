import React, { Component } from 'react'
import InformationLine from '../../../general/information-line/InformationLine';
import DiscussionInstructions from './subpage-elements/DiscussionInstructions';

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
        const { player, round, game, stage } = this.props;

        const buttonText = "Click to set ready for the discussion";

        return (
            <div>
                <h3>Instructions about the Discussion</h3>

                <p><strong>In the next phase, you will be discussing with the other two players</strong></p>

                <DiscussionInstructions player={player} game={game} round={round} />

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

                <br />
                <div className="game-instructions">
                    <div>
                        <strong>Note:</strong> The next stage will only start once all players have finished reading the instructions and have clicked the ‘{buttonText}’ button. You can see whether players have clicked the button by looking at the "Player Status" below: the cross next to their avatar (i.e., their chess piece) will have changed to a checkmark.
                    </div>
                </div>

                <br />
                <InformationLine game={game} player={player} stage={stage} />
            </div>
        )
    }
}

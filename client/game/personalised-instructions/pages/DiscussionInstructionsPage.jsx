import React, { Component } from 'react'
import DiscussionInstructions from './subpage-elements/DiscussionInstructions';
import Footer from '../../general-ui/footer/Footer';

export default class DiscussionInstructionsPage extends Component {
    render() {
        const { player, round, game, previousPage, stage } = this.props;

        const buttonText = "Click to set ready for the discussion";

        return (
            <div>
                <h3>Instructions about the Discussion</h3>

                <p><strong>In the next phase, you will be discussing with the other two players</strong></p>

                <DiscussionInstructions player={player} game={game} round={round} />

                <br />

                <p className="button-holder">
                    <button type="button" onClick={previousPage}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={() => player.stage.submit()} disabled={this.props.player.stage.submitted}>
                        {this.props.player.stage.submitted ? "You are ready!" : buttonText}
                    </button>
                </p>

                <br />
                <div className="game-instructions">
                    <div>
                        <strong>Note:</strong> The next stage will only start once all players have finished reading the instructions and have clicked the ‘{buttonText}’ button. You can see whether players have clicked the button by looking at the "Player Status" below: the cross next to their avatar (i.e., their chess piece) will have changed to a checkmark.
                    </div>
                </div>

                <div className="footer">
                    <Footer game={game} player={player} stage={stage} />
                </div>
            </div>
        )
    }
}

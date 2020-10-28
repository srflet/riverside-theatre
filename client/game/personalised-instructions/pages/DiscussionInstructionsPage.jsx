import React, { Component } from 'react'
import DiscussionInstructions from './subpage-elements/DiscussionInstructions';

export default class DiscussionInstructionsPage extends Component {
    render() {
        const { player, round, game, previousPage } = this.props;

        return (
            <div>
                <h3>Instructions about the Discussion</h3>

                <DiscussionInstructions player={player} game={game} round={round} />

                <p className="button-holder">
                    <button type="button" onClick={previousPage}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={() => player.stage.submit()} disabled={this.props.player.stage.submitted}>
                        {this.props.player.stage.submitted ? "You are ready!" : "Set ready for the discussion"}
                    </button>
                </p>

                <br />
                <p style={{ textAlign: "center" }}>NOTE: The next stage will only start once every player has submitted their answers and read all of the instructions. You can see whether players have finished reading the instructions by looking at the "Player Status" below. In the meantime you can continue browsing the instructions.</p>
            </div>
        )
    }
}

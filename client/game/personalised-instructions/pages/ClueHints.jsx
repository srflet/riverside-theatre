import React, { Component } from 'react';
import ComStructFull from '../../communication-structure/ComStructFull';

export default class ClueHints extends Component {
    render() {
        const { round, game, player, previousPage, nextPage } = this.props;

        return (
            <div>
                <h3>Hints about Clues</h3>

                <p>
                    Below we show you, in addition to the communication structure, what unique clues you have and <strong><u>what unique clues the other two players have.</u></strong>
                </p>
                <p>
                    For instance, we show you that the other player may know the gender of the guilty person. We provide this information such that you can ask specific questions to each player.
                </p>
                <p>
                    You do not have to write this down because we will show you them again on the next page when you enter the discussion phase.
                </p>

                <div className="centred">
                    <ComStructFull round={round} game={game} player={player} />
                </div>

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
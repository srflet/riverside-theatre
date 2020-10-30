import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';
import PostBottonTip from '../../exit/post-survey/ui/PostButtonTip';

export default class PreventInfo extends Component {
    state = {
        name: "PreventInfo"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "I tried to prevent specific other players from being able to get more clues",
            "I deliberately tried to make sure specific players could not get information from others",
            "I tried to prevent one player from sharing clues with the other player",
        ];
        const responseScale = DisagreeAgree5;

        let answers = player.get(this.state.name);

        return (
            <div>
                <p>Based on the incentive structure in the game...</p>

                <br />

                <Matrix
                    player={player}
                    playerVariable={this.state.name}
                    questions={questions}
                    responseScale={responseScale}
                />

                <br />

                <p className="button-holder">
                    <button type="button" onClick={previousPage} disabled={currentPage === 0}>
                        Previous
                    </button>
                    &emsp;
                    <button type="button" onClick={nextPage} disabled={Object.keys(answers).length !== questions.length}>
                        Next
                    </button>
                </p>
                <PostBottonTip />
            </div>
        )
    }
}


import React, { Component } from 'react';
import Matrix from '../templates/Matrix';
import { DisagreeAgree5 } from '../templates/scales/DisagreeAgree5';
import PostBottonTip from '../../exit/post-survey/ui/PostButtonTip';

export default class EaseInfoExchange extends Component {
    state = {
        name: "EaseInfoExchange"
    }

    render() {
        const { player, currentPage, previousPage, nextPage } = this.props;

        const questions = [
            "It was difficult to get unique clues from other players",
            "If I did not give others my unique clues, it was impossible to get anything from them",
            "Getting new clues from others was only possible when I promised I would share my clues with them as well",
        ];
        const responseScale = DisagreeAgree5;

        let answers = player.get(this.state.name);

        return (
            <div>

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